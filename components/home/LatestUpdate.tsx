import { FaArrowRight } from "react-icons/fa6";

export default function LatestUpdate() {
  return (
    <div className=" flex flex-col justify-center items-center gap-10 my-12 mx-[10%]">
      <div className="text-3xl font-bold text-[rgb(138,34,153)]">
        Latest Update
      </div>
      <div className="border-b-[1px] border-[#ccc] w-full"></div>

      <div className="flex flex-row justify-center items-center space-x-8 border-b-[1px] border-[#ccc] w-full py-4 ">
        <div className="text-white bg-[#8A2299] rounded-3xl text-sm py-1 px-3">
          NEWS&EVENTS
        </div>
        <span className="font-thin text-base">
          10<sup>th</sup> Dec
        </span>
        <div className="font-bold text-xl">Announcement - APTOS-APOIS 2024</div>
        <div>GO</div>
        <span>
          <FaArrowRight color="#8A2299" />
        </span>
      </div>

      <div className="flex flex-row justify-center items-center space-x-8 border-b-[1px] border-[#ccc] w-full py-4 ">
        <div className="text-white bg-[#8A2299] rounded-3xl text-sm py-1 px-3">
          NEWS&EVENTS
        </div>
        <span className="font-thin text-base">
          10<sup>th</sup> Dec
        </span>
        <div className="font-bold text-xl">Announcement - APTOS-APOIS 2024</div>
        <div>GO</div>
        <span>
          <FaArrowRight color="#8A2299" />
        </span>
      </div>
    </div>
  );
}
