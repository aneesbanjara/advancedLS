"use client";
import React, { useState } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { Button, Form, Input, message } from "antd";
import SubHeader from "@/components/subheader/SubHeader";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  cv: File | null;
}

export default function Careers() {
  const [loading, setLoading] = useState<boolean>(false);
  const [cvFile, setCvFile] = useState<File | null>(null); // State to store the uploaded CV file
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setCvFile(event.target.files[0]); // Update the state with the selected file
    } else {
      setCvFile(null); // Reset if no file is selected
    }
  };

  const onFinish = async (values: Omit<FormValues, "cv">) => {
    setLoading(true);
    messageApi.open({
      type: "loading",
      content: "Submitting your application...",
      duration: 0, // Keep it open until destroyed manually
    });
    try {
      const formData = new FormData();

      // Append form fields
      formData.append("firstName", values.firstName);
      formData.append("lastName", values.lastName);
      formData.append("email", values.email);
      formData.append("phone", values.phone);

      // Append the uploaded file
      if (cvFile) {
        formData.append("cv", cvFile, cvFile.name);
      }

      const response = await fetch("/api/careers/unsolicated-application", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Submitting application successful!");
        messageApi.destroy();
        messageApi.open({
          type: "success",
          content: "Application submitted successfully!",
          duration: 3,
        });
        form.resetFields();
        setCvFile(null);
      } else {
        const errorData = await response.json();
        console.error(`Failed to submit inquiry: ${errorData.message}`);
        messageApi.destroy();
        messageApi.open({
          type: "error",
          content: "Failed to submit application. Please try again.",
          duration: 3,
        });
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      messageApi.destroy();
      messageApi.open({
        type: "error",
        content: "Something went wrong. Please try again later.",
        duration: 3,
      });
    } finally {
      setLoading(false);
    }
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <div className="text-2xl font-medium">Unsolicited Application</div>
      ),
      children: (
        <>
          {contextHolder}
          <Form layout="vertical" onFinish={onFinish} form={form}>
            <div className="flex flex-row gap-8 justify-between">
              <Form.Item<FormValues>
                label="First Name"
                name="firstName"
                rules={[
                  { required: true, message: "Please input your first name!" },
                ]}
                className="w-full"
              >
                <Input placeholder="Enter your first name" />
              </Form.Item>
              <Form.Item<FormValues>
                label="Last Name"
                name="lastName"
                rules={[
                  { required: true, message: "Please input your last name!" },
                ]}
                className="w-full"
              >
                <Input placeholder="Enter your last name" />
              </Form.Item>
            </div>
            <div className="flex flex-row gap-8 justify-between">
              <Form.Item<FormValues>
                label="Email"
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  { required: true, message: "Please input your email!" },
                ]}
                className="w-full"
              >
                <Input type="email" placeholder="Enter your email" />
              </Form.Item>
              <Form.Item<FormValues>
                label="Phone"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                  {
                    min: 10,
                    message: "Phone No. must be at least 10 numbers.",
                  },
                  {
                    max: 10,
                    message: "Phone No. must be at least 10 numbers.",
                  },
                ]}
                className="w-full"
              >
                <Input type="text" placeholder="Enter your phone number" />
              </Form.Item>
            </div>
            <div className="flex flex-row gap-8 justify-between">
              <Form.Item
                label="Upload your CV"
                name="cv"
                rules={[{ required: true }]}
              >
                <Input type="file" onChange={handleFileChange} />
              </Form.Item>
            </div>
            <div className="flex flex-row gap-8 justify-between">
              <Form.Item>
                <Button type="primary" loading={loading} htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </div>
          </Form>
        </>
      ),
    },
    {
      key: "2",
      label: <div className="text-2xl font-medium">Open Positions</div>,
      children: "Sorry, there are no opportunities available at this time.",
    },
  ];

  return (
    <section>
      <SubHeader>Careers</SubHeader>
      <div className="mx-4 sm:mx-[10%] md:mx-[15%] lg:mx-[20%] my-2 sm:my-[2%] text-xl sm:text-2xl">
        Always on the lookout for fresh talent! Explore our open positions or
        submit your details through the form.
      </div>
      <div className="mx-4 sm:mx-[10%] md:mx-[12%] lg:mx-[15%] my-2 sm:my-[2%]">
        <Tabs
          defaultActiveKey="1"
          items={items}
          className="text-lg sm:text-xl md:text-2xl border-2 border-[#00008B] p-2 sm:p-4 rounded"
        />
      </div>
    </section>
  );
}
