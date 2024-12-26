"use client";
import { Button, Form, Input } from "antd";

interface FormValues {
  name: string;
  email: string;
  password: string;
}

export default function InquiryForm() {
  return (
    <section>
      <Form layout="vertical" className="z-0">
        <div className="flex flex-row gap-8 justify-between">
          <Form.Item<FormValues>
            label="Full Name"
            name="name"
            rules={[
              { required: true, message: "Please input your first name!" },
              { min: 2, message: "Name must be at least 2 characters." },
            ]}
            className="w-full"
          >
            <Input placeholder="Enter your fullname" />
          </Form.Item>
          <Form.Item<FormValues>
            label="Country"
            name="name"
            rules={[{ min: 2, message: "Name must be at least 2 characters." }]}
            className="w-full"
          >
            <Input placeholder="Enter your country" />
          </Form.Item>
        </div>
        <div className="flex flex-row gap-8 justify-between">
          <Form.Item<FormValues>
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
            className="w-full"
          >
            <Input type="email" placeholder="Enter your email" />
          </Form.Item>
          <Form.Item<FormValues>
            label="Phone"
            name="name"
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
            name="name"
            rules={[{ required: true, message: "Please input your email!" }]}
            className="w-full"
          >
            <Input.TextArea />
          </Form.Item>
        </div>
        <div className="flex flex-row gap-8 justify-between">
          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Submit Inquiry
            </Button>
          </Form.Item>
        </div>
      </Form>{" "}
    </section>
  );
}
