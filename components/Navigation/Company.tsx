import { Dropdown } from "antd";
import type { MenuProps } from "antd";
import Link from "next/link";

export default function Company() {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link href="/company/aboutus" className="">
          ABOUT US
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link href="/company/careers" className="">
          CAREERS
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link href="/company/inquiry" className="">
          INQUIRY
        </Link>
      ),
    },
    {
      key: "5",
      label: (
        <Link href="/company/feedback" className="">
          FEEDBACK
        </Link>
      ),
    },
    {
      key: "6",
      label: (
        <Link href="/company/privacy" className="">
          PRIVACY & POLICY
        </Link>
      ),
    },
  ];
  return (
    <Dropdown
      menu={{ items }}
      overlayStyle={{ width: 300, borderRadius: 0 }}
      placement="bottom"
    >
      <Link href="/company" onClick={(e) => e.preventDefault()}>
        COMPANY
      </Link>
    </Dropdown>
  );
}
