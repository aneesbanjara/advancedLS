"use client";
import SubHeader from "@/components/subheader/SubHeader";
import { Alert, Button, Form, Input, message } from "antd";
import { useState } from "react";

interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  feedback: string;
}

export default function Feedback() {
  const [loading, setLoading] = useState<boolean>(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const onFinish = async (values: FormValues) => {
    setLoading(true);
    messageApi.open({
      type: "loading",
      content: "Submitting your feedback...",
      duration: 0, // Keep it open until destroyed manually
    });
    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        console.log("Feedback submitted successfully!");
        messageApi.destroy();
        messageApi.open({
          type: "success",
          content: "Feedback submitted successfully!",
          duration: 3,
        });
        form.resetFields();
      } else {
        const errorData = await response.json();
        console.error(`Failed to submit feedback: ${errorData.message}`);
        messageApi.destroy();
        messageApi.open({
          type: "error",
          content: "Failed to submit feedback. Please try again.",
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
      <SubHeader>Feedback Form</SubHeader>
      <div className="flex flex-col gap-5 mx-4 my-2 sm:mx-[20%] sm:my-[5%]">
        <Alert
          description="We value your feedback and are committed to improving our services. Please share your thoughts and experiences to help us ensure the highest quality of service for all our customers. Your input is important to us!"
          type="info"
        />
        <Form layout="vertical" onFinish={onFinish} form={form}>
          <div className="flex flex-row gap-8 justify-between">
            <Form.Item<FormValues>
              label="Full Name"
              name="fullName"
              rules={[
                { required: true, message: "Please input your full name!" },
                { min: 2, message: "Name must be at least 2 characters." },
              ]}
              className="w-full"
            >
              <Input placeholder="Enter your fullname" />
            </Form.Item>
            <Form.Item<FormValues>
              label="Country"
              name="country"
              rules={[
                { min: 2, message: "Name must be at least 2 characters." },
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
                {
                  required: true,
                  message: "Please input your valid phone number!",
                },
                { min: 10, message: "Phone No must be at least 10 numbers." },
                { max: 10, message: "Phone No must be at least 10 numbers." },
              ]}
              className="w-full"
            >
              <Input type="number" placeholder="Enter your phone number" />
            </Form.Item>
          </div>
          <div className="flex flex-row gap-8 justify-between">
            <Form.Item<FormValues>
              label="Feedback Message"
              name="feedback"
              rules={[{ required: true, message: "Please input your email!" }]}
              className="w-full"
            >
              <Input.TextArea />
            </Form.Item>
          </div>
          <div className="flex flex-row gap-8 justify-between">
            <Form.Item label={null}>
              <Button type="primary" loading={loading} htmlType="submit">
                Submit Feedback
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </section>
  );
}
