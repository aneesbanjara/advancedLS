import { Modal } from "antd";
import { Button, Form, Input, message } from "antd";
import { useState } from "react";

type RegisterModelProps = {
  isEventUserRegisterModelOpen: boolean;
  setIsEventUserRegisterModelOpen: (value: boolean) => void;
};

interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  country: string;
}

export default function RegisterModel({
  isEventUserRegisterModelOpen,
  setIsEventUserRegisterModelOpen,
}: RegisterModelProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const onFinish = async (values: FormValues) => {
    setLoading(true);
    messageApi.open({
      type: "loading",
      content: "Submitting your application...",
      duration: 0, // Keep it open until destroyed manually
    });
    try {
      setLoading(true);
      const response = await fetch("/api/event-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        console.log("Registration submitted successfully!");
        messageApi.destroy();
        messageApi.open({
          type: "success",
          content: "Application submitted successfully!",
          duration: 3,
        });
        form.resetFields();
      } else {
        const errorData = await response.json();
        console.error(`Failed to register: ${errorData.message}`);
        messageApi.destroy();
        messageApi.open({
          type: "error",
          content: "Failed to submit application. Please try again.",
          duration: 3,
        });
      }
    } catch (error) {
      console.error("Error submitting registration:", error);
      messageApi.destroy();
      messageApi.open({
        type: "error",
        content: "Something went wrong. Please try again later.",
        duration: 3,
      });
    } finally {
      setLoading(false);
    }
    setIsEventUserRegisterModelOpen(false);
  };
  return (
    <>
      {contextHolder}
      <Modal
        open={isEventUserRegisterModelOpen}
        footer={null}
        onCancel={() => setIsEventUserRegisterModelOpen(false)}
      >
        <Form layout="vertical" onFinish={onFinish} form={form}>
          <div className="flex flex-row gap-8 justify-between">
            <Form.Item<FormValues>
              label="Full Name"
              name="fullName"
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
            <Form.Item label={null}>
              <Button type="primary" loading={loading} htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </>
  );
}
