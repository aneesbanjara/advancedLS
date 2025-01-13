import { Divider } from "antd";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
type SupportNavSubMenuProps = {
  toggleSupportMenu: () => void;
};

export default function SupportNavSubMenu({
  toggleSupportMenu,
}: SupportNavSubMenuProps) {
  return (
    <>
      <div className="flex justify-between items-start ">
        <div className="flex flex-col justify-between items-start w-full">
          <Link
            href="/support/personalizedsupport"
            onClick={() => toggleSupportMenu()}
            className="font-bold text-lg text-[#00008B] m-3 hover:text-[#E77723]"
          >
            PERSONALIZED SUPPORT
          </Link>
          <Divider className="m-0 p-0 border-1 border-[#D9D9D9] w-full" />
          <Link
            href="/support/service"
            onClick={() => toggleSupportMenu()}
            className="font-bold text-lg text-[#00008B] m-3 hover:text-[#E77723]"
          >
            SERVICE AND REPAIRS
          </Link>
          {/* <Divider className="m-0 p-0 border-1 border-[#D9D9D9] w-full" />
          <Link
            href="/support/warranty"
                      onClick={() => toggleSupportMenu()}

            className="font-bold text-lg text-[#00008B] m-3 hover:text-[#E77723]"
          >
            WARRANTY
          </Link> */}
        </div>
        <div
          className="rounded-full padding-4 cursor-pointer hover:text-[#E77723]"
          onClick={() => toggleSupportMenu()}
        >
          <IoMdClose size={30} />
        </div>
      </div>
    </>
  );
}
