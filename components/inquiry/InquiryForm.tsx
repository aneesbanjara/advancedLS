"use client";
import { Button, Form, Input, message } from "antd";
import { useState } from "react";

interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  inquiry: string;
}

export default function InquiryForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const onFinish = async (values: FormValues) => {
    setLoading(true);
    messageApi.open({
      type: "loading",
      content: "Submitting your inquiry...",
      duration: 0, // Keep it open until destroyed manually
    });
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        console.log("Inquiry submitted successfully!");
        messageApi.destroy();
        messageApi.open({
          type: "success",
          content: "Inquiry submitted successfully!",
          duration: 3,
        });
        form.resetFields();
      } else {
        const errorData = await response.json();
        console.error(`Failed to submit inquiry: ${errorData.message}`);
        messageApi.destroy();
        messageApi.open({
          type: "error",
          content: "Failed to submit inquiry. Please try again.",
          duration: 3,
        });
      }
    } catch (error) {
      console.error("Error submitting inquiry:", error);
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
  return (
    <section>
      {contextHolder}
      <Form layout="vertical" className="z-0" onFinish={onFinish} form={form}>
        <div className="flex flex-row gap-8 justify-between">
          <Form.Item<FormValues>
            label="Full Name"
            name="fullName"
            rules={[
              { required: true, message: "Please input your first name!" },
              { min: 2, message: "Fullname must be at least 2 characters." },
            ]}
            className="w-full"
          >
            <Input placeholder="Enter your fullname" />
          </Form.Item>
          <Form.Item<FormValues>
            label="Country"
            name="country"
            rules={[
              { min: 2, message: "Country must be at least 2 characters." },
            ]}
            className="w-full"
          >
            <Input placeholder="Enter your country" />
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
              { required: true, message: "Please input your name!" },
              { min: 10, message: "Name must be at least 10 characters." },
              { max: 10, message: "Name must be at least 10 characters." },
            ]}
            className="w-full"
          >
            <Input type="number" placeholder="Enter your phone number" />
          </Form.Item>
        </div>
        <div className="flex flex-row gap-8 justify-between">
          <Form.Item<FormValues>
            label="Inquiry"
            name="inquiry"
            rules={[
              {
                required: true,
                message: "Please input your some inquiry message!",
              },
            ]}
            className="w-full"
          >
            <Input.TextArea />
          </Form.Item>
        </div>
        <div className="flex flex-row gap-8 justify-between">
          <Form.Item label={null}>
            <Button type="primary" loading={loading} htmlType="submit">
              Submit Inquiry
            </Button>
          </Form.Item>
        </div>
      </Form>{" "}
    </section>
  );
}
