"use client";
import { Badge, Button } from "antd";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import RegisterModel from "../models/registerModel/RegisterModel";

export default function LatestUpdate() {
  const [isEventUserRegisterModelOpen, setIsEventUserRegisterModelOpen] =
    useState(false);
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
          5<sup>th</sup> Jan
        </span>
        <div className="font-bold text-xl">
          Announcement - Nepal Eye Hospital Conferernce 2025
        </div>
        <div>GO</div>
        <span>
          <FaArrowRight color="#8A2299" />
        </span>
        <Badge.Ribbon
          text="Win FREE gifts!"
          className="custom-ribbon pulsing-ribbon"
        >
          <Button
            type="primary"
            ghost
            className="rounded-none border-2 !text-[#8A2299] !border-[#8A2299]"
            onClick={() => setIsEventUserRegisterModelOpen(true)}
          >
            REGISTER NOW
          </Button>
        </Badge.Ribbon>
        {isEventUserRegisterModelOpen && (
          <RegisterModel
            isEventUserRegisterModelOpen={isEventUserRegisterModelOpen}
            setIsEventUserRegisterModelOpen={setIsEventUserRegisterModelOpen}
          />
        )}
      </div>
    </div>
  );
}
