"use client";
import { Alert, Button, Form, Input } from "antd";

interface FormValues {
  name: string;
  email: string;
  password: string;
}

export default function Feedback() {
  return (
    <section>
      <div className="flex flex-row justify-start bg-gradient-to-r from-[#ADD8E6] to-[#00008B] text-white px-36 py-8">
        <div className="text-4xl">Feedback Form</div>
      </div>
      <div className="flex flex-col gap-5 mx-[20%] my-[5%]">
        <Alert
          description="We value your feedback and are committed to improving our services. Please share your thoughts and experiences to help us ensure the highest quality of service for all our customers. Your input is important to us!"
          type="info"
        />
        <Form layout="vertical">
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
              label="Feedback Message"
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
                Submit Feedback
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </section>
  );
}
