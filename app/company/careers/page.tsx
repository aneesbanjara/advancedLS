"use client";
import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { Button, Form, Input } from "antd";

interface FormValues {
  name: string;
  email: string;
  password: string;
}

export default function Careers() {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <div className="text-2xl font-medium">Unsolicited Application</div>
      ),
      children: (
        <>
          <Form layout="vertical">
            <div className="flex flex-row gap-8 justify-between">
              <Form.Item<FormValues>
                label="First Name"
                name="name"
                rules={[
                  { required: true, message: "Please input your first name!" },
                  { min: 2, message: "Name must be at least 2 characters." },
                ]}
                className="w-full"
              >
                <Input placeholder="Enter your name" />
              </Form.Item>
              <Form.Item<FormValues>
                label="Last Name"
                name="name"
                rules={[
                  { required: true, message: "Please input your last name!" },
                  { min: 2, message: "Name must be at least 2 characters." },
                ]}
                className="w-full"
              >
                <Input placeholder="Enter your name" />
              </Form.Item>
            </div>
            <div className="flex flex-row gap-8 justify-between">
              <Form.Item<FormValues>
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
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
                label="Upload your CV"
                name="name"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
                className="w-full"
              >
                <Input type="file" />
              </Form.Item>
            </div>
            <div className="flex flex-row gap-8 justify-between">
              <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
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
      <div className="flex flex-row justify-start bg-gradient-to-r from-[#ADD8E6] to-[#00008B] text-white px-36 py-8">
        <div className="text-4xl">Careers</div>
      </div>
      <div className="mx-[20%] my-[2%] text-2xl">
        Always on the lookout for fresh talent! Explore our open positions or
        submit your details through the form.
      </div>
      <div className="mx-[15%] my-[2%]">
        <Tabs
          defaultActiveKey="1"
          items={items}
          className="text-2xl border-2 border-[#00008B] p-4 rounded"
        />
      </div>
    </section>
  );
}
