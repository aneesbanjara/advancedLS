"use client";
import { FloatButton } from "antd";
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function CustomFloatButton() {
  const phoneNumber = "9851034376";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  return (
    <>
      <FloatButton
        icon={<AiOutlineWhatsApp size={23} color="green" />}
        tooltip={<div>Connect in Whatsapp</div>}
        shape="circle"
        style={{ insetInlineEnd: 24 + 70 + 70 }}
        badge={{ dot: true }}
        onClick={() => window.open(whatsappUrl, "_blank")}
      />
    </>
  );
}
