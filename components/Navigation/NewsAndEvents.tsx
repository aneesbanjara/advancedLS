import { Dropdown } from "antd";
import type { MenuProps } from "antd";
import Link from "next/link";

export default function NewsAndEvents() {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link href="/news/conferences" className="">
          CONFERENCES
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link href="/news/gallary" className="">
          GALLARY
        </Link>
      ),
    },
    // {
    //   key: "3",
    //   label: (
    //     <Link href="/news/certificates" className="">
    //       Ceritficates
    //     </Link>
    //   ),
    // },
  ];
  return (
    <Dropdown
      menu={{ items }}
      overlayStyle={{ borderRadius: 0, width: 300 }}
      placement="bottom"
    >
      <Link href="/news" onClick={(e) => e.preventDefault()}>
        NEWS & EVENTS
      </Link>
    </Dropdown>
  );
}
