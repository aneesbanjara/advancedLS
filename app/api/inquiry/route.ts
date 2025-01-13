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
    const data = await request.json();
    const { fullName, email, phone, country, inquiry } = data;

    const auth = new google.auth.GoogleAuth({
      credentials: SERVICE_ACCOUNT,
      scopes: SCOPES,
    });
    const sheets = google.sheets({ version: "v4", auth });
    const sheetInfo = await sheets.spreadsheets.get({
      spreadsheetId: GOOGLE_SHEET_ID,
    });

    const sheetExists = sheetInfo.data.sheets?.some(
      (sheet) => sheet.properties?.title === "Inquiry"
    );

    if (!sheetExists) {
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId: GOOGLE_SHEET_ID,
        requestBody: {
          requests: [
            {
              addSheet: {
                properties: {
                  title: "Inquiry", // Sheet name
                },
              },
            },
          ],
        },
      });

      console.log("Inquiry sheet created successfully.");
    }
    // Check if the sheet has a header
    const getSheetData = await sheets.spreadsheets.values.get({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: "Inquiry!A:E",
    });

    const rows = getSheetData.data.values || [];

    if (rows.length === 0) {
      // Add headers if not present
      await sheets.spreadsheets.values.append({
        spreadsheetId: GOOGLE_SHEET_ID,
        range: "Inquiry!A1",
        valueInputOption: "RAW",
        requestBody: {
          values: [
            [
              "S.N.",
              "Date",
              "Full Name",
              "Email",
              "Phone",
              "Country",
              "Inquiry",
            ],
          ],
        },
      });
    }

    const serialNumber = rows.length + 1; // Increment serial number
    const date = new Date().toLocaleDateString("en-GB"); // Format as DD/MM/YYYY

    await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: "Inquiry!A:E",
      valueInputOption: "RAW",
      requestBody: {
        values: [
          [serialNumber, date, fullName, email, phone, country, inquiry],
        ],
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

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER, // Sender's email
      to: process.env.GMAIL_USER, // Your Gmail inbox
      subject: "New inquiry Received",
      text: `
        You have received a new inquiry:
        
        Full Name: ${fullName}
        Email: ${email}
        Phone: ${phone}
        Country: ${country}
        Inquiry: ${inquiry}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully!");

    return NextResponse.json(
      { message: "feedback submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing feedback:", error);
    return NextResponse.json(
      { message: "Error processing feedback" },
      { status: 500 }
    );
  }
}
