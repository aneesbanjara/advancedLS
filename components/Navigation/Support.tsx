import { Dropdown } from "antd";
import type { MenuProps } from "antd";
import Link from "next/link";

export default function Support() {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link href="/support/personalizedsupport" className="">
          PERSONALIZED SUPPORT
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link href="/support/service" className="">
          SERVICE AND REPAIRS
        </Link>
      ),
    },
    // {
    //   key: "3",
    //   label: (
    //     <Link href="/support/warranty" className="">
    //       Warranty
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
      <Link href="/support" onClick={(e) => e.preventDefault()}>
        SUPPORT
      </Link>
    </Dropdown>
  );
}
