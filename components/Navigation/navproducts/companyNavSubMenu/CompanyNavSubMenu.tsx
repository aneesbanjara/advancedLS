import { Divider } from "antd";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
type CompanyNavSubMenuProps = {
  toggleCompanyMenu: () => void;
};

export default function CompanyNavSubMenu({
  toggleCompanyMenu,
}: CompanyNavSubMenuProps) {
  return (
    <>
      <div className="flex justify-between items-start ">
        <div className="flex flex-col justify-between items-start w-full">
          <Link
            href="/company/aboutus"
            className="font-bold text-lg text-[#00008B] m-3 hover:text-[#E77723]"
            onClick={() => toggleCompanyMenu()}
          >
            ABOUT US
          </Link>
          <Divider className="m-0 p-0 border-1 border-[#D9D9D9] w-full" />
          <Link
            href="/company/careers"
            className="font-bold text-lg text-[#00008B] m-3 hover:text-[#E77723]"
            onClick={() => toggleCompanyMenu()}
          >
            CAREERS
          </Link>
          <Divider className="m-0 p-0 border-1 border-[#D9D9D9] w-full" />
          <Link
            href="/company/inquiry"
            className="font-bold text-lg text-[#00008B] m-3 hover:text-[#E77723]"
            onClick={() => toggleCompanyMenu()}
          >
            INQUIRY
          </Link>
          <Divider className="m-0 p-0 border-1 border-[#D9D9D9] w-full" />
          <Link
            href="/company/feedback"
            className="font-bold text-lg text-[#00008B] m-3 hover:text-[#E77723]"
            onClick={() => toggleCompanyMenu()}
          >
            FEEDBACK
          </Link>
          <Divider className="m-0 p-0 border-1 border-[#D9D9D9] w-full" />
          <Link
            href="/company/privacy"
            className="font-bold text-lg text-[#00008B] m-3 hover:text-[#E77723]"
            onClick={() => toggleCompanyMenu()}
          >
            PRIVACY & POLICY
          </Link>
        </div>
        <div
          className="rounded-full padding-4 cursor-pointer hover:text-[#E77723]"
          onClick={() => toggleCompanyMenu()}
        >
          <IoMdClose size={30} />
        </div>
      </div>
    </>
  );
}
