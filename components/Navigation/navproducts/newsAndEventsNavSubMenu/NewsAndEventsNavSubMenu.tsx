import { Divider } from "antd";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
type NewsAndEventsNavSubMenuProps = {
  toggleNewsAndEventsMenu: () => void;
};

export default function NewsAndEventsNavSubMenu({
  toggleNewsAndEventsMenu,
}: NewsAndEventsNavSubMenuProps) {
  return (
    <>
      <div className="flex justify-between items-start ">
        <div className="flex flex-col justify-between items-start w-full">
          <Link
            href="/news/conferences"
            className="font-bold text-lg text-[#00008B] m-3 hover:text-[#E77723]"
            onClick={() => toggleNewsAndEventsMenu()}
          >
            CONFERENCES
          </Link>
          <Divider className="m-0 p-0 border-1 border-[#D9D9D9] w-full" />
          <Link
            href="/news/gallery"
            className="font-bold text-lg text-[#00008B] m-3 hover:text-[#E77723]"
            onClick={() => toggleNewsAndEventsMenu()}
          >
            GALLERY
          </Link>
          {/* <Divider className="m-0 p-0 border-1 border-[#D9D9D9] w-full" />
          <Link
            href="/news/certificates"
            className="font-bold text-lg text-[#00008B] m-3 hover:text-[#E77723]"
          onClick={() => toggleNewsAndEventsMenu()}
            >
            CERTIFICATES
          </Link> */}
        </div>
        <div
          className="rounded-full padding-4 cursor-pointer hover:text-[#E77723]"
          onClick={() => toggleNewsAndEventsMenu()}
        >
          <IoMdClose size={30} />
        </div>
      </div>
    </>
  );
}
