import {
  MdOutlineEmail,
  MdOutlineLocationOn,
  MdOutlinePhone,
} from "react-icons/md";

export default function Header() {
  return (
    <>
      <div
        className="flex flex-col sm:flex-row flex-wrap sm:justify-end items-start sm:items-center 
  gap-2 sm:gap-8 
  bg-black text-[#FAF9F6] 
  px-2 sm:px-10 md:px-20 lg:px-36 
  py-1 sm:py-2 
  text-xs sm:text-sm"
      >
        <div className="flex items-center gap-1 sm:gap-2">
          <span>
            <MdOutlineEmail fontSize={20} />
          </span>
          <span>info@altplnepal.com</span>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <span>
            <MdOutlinePhone fontSize={20} />
          </span>
          <span>00977-1-4375507</span>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <span>
            <MdOutlineLocationOn fontSize={20} />
          </span>
          <span>Ward no:3, Maharajgunj, Kathmandu, Nepal</span>
        </div>
      </div>
    </>
  );
}
