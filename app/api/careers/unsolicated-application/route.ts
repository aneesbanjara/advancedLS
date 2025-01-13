import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";
import dotenv from "dotenv";
dotenv.config();

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID;

const SERVICE_ACCOUNT = {
  type: "service_account",
  project_id: process.env.GOOGLE_PROJECT_ID,
  private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
  private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  client_email: process.env.GOOGLE_CLIENT_EMAIL,
  client_id: process.env.GOOGLE_CLIENT_ID,
};

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const cv = formData.get("cv") as File | null;

    // Save to Google Sheets
    const auth = new google.auth.GoogleAuth({
      credentials: SERVICE_ACCOUNT,
      scopes: SCOPES,
    });
    const sheets = google.sheets({ version: "v4", auth });
    const sheetInfo = await sheets.spreadsheets.get({
      spreadsheetId: GOOGLE_SHEET_ID,
    });

    const sheetExists = sheetInfo.data.sheets?.some(
      (sheet) => sheet.properties?.title === "CV - Unsolicited Application"
    );

    if (!sheetExists) {
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId: GOOGLE_SHEET_ID,
        requestBody: {
          requests: [
            {
              addSheet: {
                properties: {
                  title: "CV - Unsolicited Application", // Sheet name
                },
              },
            },
          ],
        },
      });
    }

    const getSheetData = await sheets.spreadsheets.values.get({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: "CV - Unsolicited Application!A:E",
    });

    const rows = getSheetData.data.values || [];
    if (rows.length === 0) {
      // Add headers if not present
      await sheets.spreadsheets.values.append({
        spreadsheetId: GOOGLE_SHEET_ID,
        range: "CV - Unsolicited Application!A1",
        valueInputOption: "RAW",
        requestBody: {
          values: [
            ["S.N.", "Date", "Full Name", "Last Name", "Email", "Phone"],
          ],
        },
      });
    }

    const serialNumber = rows.length + 1;
    const date = new Date().toLocaleDateString("en-GB");

    await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: "CV - Unsolicited Application!A:E",
      valueInputOption: "RAW",
      requestBody: {
        values: [[serialNumber, date, firstName, lastName, email, phone]],
      },
    });

    // Nodemailer transporter setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Your email
        pass: process.env.GMAIL_APP_PASSWORD, // App password
      },
    });

    // Convert CV file to buffer
    const attachments = [];
    if (cv) {
      const arrayBuffer = await cv.arrayBuffer();
      attachments.push({
        filename: cv.name,
        content: Buffer.from(arrayBuffer),
      });
    }

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER, // Sender's email
      to: process.env.GMAIL_USER, // Your Gmail inbox
      subject: "New CV - Unsolicited Application Received",
      text: `
        You have received a new CV - Unsolicited Application:
        
        Full Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Phone: ${phone}
      `,
      attachments, // Attach CV
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully!");

    return NextResponse.json(
      { message: "CV - Unsolicited Application submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing Unsolicited Application:", error);
    return NextResponse.json(
      { message: "Error processing Unsolicited Application" },
      { status: 500 }
    );
  }
}
