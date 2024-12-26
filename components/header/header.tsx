import NavigationMenu from "@/components/Navigation/NavigationMenu";
import {
  MdOutlineEmail,
  MdOutlineLocationOn,
  MdOutlinePhone,
} from "react-icons/md";

export default function Header() {
  return (
    <>
      <div className="flex flex-row justify-end gap-8 bg-[#DBDBDB] text-[#636466] px-36 py-0.5">
        <div className="flex flex-row items-center gap-1">
          <span>
            <MdOutlineEmail fontSize={20} />
          </span>
          <span>advancedtechnologiespvtltd@gmail.com</span>
        </div>
        <div className="flex flex-row items-center">
          <span>
            <MdOutlinePhone fontSize={20} />
          </span>
          <span>00977-1-4375507</span>
        </div>
        <div className="flex flex-row items-center">
          <span>
            <MdOutlineLocationOn fontSize={20} />
          </span>
          <span>Ward no:3, Maharajgunj, Kathmandu, Nepal</span>
        </div>
      </div>
      <NavigationMenu />
    </>
  );
}
