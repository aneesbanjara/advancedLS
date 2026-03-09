"use client";
// import { Badge, Button } from "antd";
import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
// import RegisterModel from "../models/registerModel/RegisterModel";

export default function LatestUpdate() {
  // const [isEventUserRegisterModelOpen, setIsEventUserRegisterModelOpen] =
  //   useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [timeLeft2, setTimeLeft2] = useState({
    days2: 0,
    hours2: 0,
    minutes2: 0,
    seconds2: 0,
  });
  console.log(timeLeft2);
  useEffect(() => {
    const targetDate = new Date("2026-02-05T00:00:00");
    const targetDate2 = new Date("2026-02-05T00:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      const difference2 = targetDate2.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      if (difference2 <= 0) {
        clearInterval(interval);
        setTimeLeft2({ days2: 0, hours2: 0, minutes2: 0, seconds2: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const days2 = Math.floor(difference2 / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const hours2 = Math.floor(
        (difference2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const minutes2 = Math.floor(
        (difference2 % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      const seconds2 = Math.floor((difference2 % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
      setTimeLeft2({ days2, hours2, minutes2, seconds2 });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-8 my-12 mx-4 md:mx-[10%]">
      {/* Heading */}
      <div className="text-2xl sm:text-3xl font-bold text-[rgb(138,34,153)] text-center">
        Latest Update
      </div>

      <div className="border-b border-[#ccc] w-full" />

      {/* <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 border-b border-[#ccc] w-full py-6">
        <div className="flex flex-wrap items-center gap-4">
          <div className="text-white bg-[#8A2299] rounded-3xl text-xs sm:text-sm py-1 px-3">
            NEWS & EVENTS
          </div>
          <span className="font-thin text-sm sm:text-base">
            12<sup>th</sup> - 14<sup>th</sup> Dec
          </span>
          <div className="font-semibold text-base sm:text-lg">
            Announcement - 18<sup>th</sup> Congress of APVRS 2025
          </div>
          <div className="flex items-center gap-2">
            <span>GO</span>
            <FaArrowRight color="#8A2299" size={16} />
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-[#8A2299] font-semibold text-sm sm:text-lg">
          <div className="flex flex-col items-center bg-[#f8e9fb] px-3 py-2 rounded-xl shadow-md">
            <span className="text-2xl sm:text-3xl">{timeLeft.days}</span>
            <span className="text-xs sm:text-sm">Days</span>
          </div>
          <div className="flex flex-col items-center bg-[#f8e9fb] px-3 py-2 rounded-xl shadow-md">
            <span className="text-2xl sm:text-3xl">{timeLeft.hours}</span>
            <span className="text-xs sm:text-sm">Hrs</span>
          </div>
          <div className="flex flex-col items-center bg-[#f8e9fb] px-3 py-2 rounded-xl shadow-md">
            <span className="text-2xl sm:text-3xl">{timeLeft.minutes}</span>
            <span className="text-xs sm:text-sm">Min</span>
          </div>
          <div className="flex flex-col items-center bg-[#f8e9fb] px-3 py-2 rounded-xl shadow-md">
            <span className="text-2xl sm:text-3xl">{timeLeft.seconds}</span>
            <span className="text-xs sm:text-sm">Sec</span>
          </div>
        </div> */}

      {/* Register Button */}
      {/* <div className="flex justify-center lg:justify-end w-full lg:w-auto">
          <Badge.Ribbon
            text="Win FREE gifts!"
            className="custom-ribbon pulsing-ribbon"
          >
            <Button
              type="primary"
              ghost
              className="rounded-none border-2 !text-[#8A2299] !border-[#8A2299] whitespace-nowrap"
              onClick={() => setIsEventUserRegisterModelOpen(true)}
            >
              REGISTER NOW
            </Button>
          </Badge.Ribbon>
        </div> */}

      {/* {isEventUserRegisterModelOpen && (
          <RegisterModel
            isEventUserRegisterModelOpen={isEventUserRegisterModelOpen}
            setIsEventUserRegisterModelOpen={setIsEventUserRegisterModelOpen}
          />
        )} */}
      {/* </div> */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 border-b border-[#ccc] w-full py-6">
        {/* Info Section */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="text-white bg-[#8A2299] rounded-3xl text-xs sm:text-sm py-1 px-3">
            NEWS & EVENTS
          </div>
          <span className="font-thin text-sm sm:text-base">
            5<sup>th</sup> - 8<sup>th</sup> Feb
          </span>
          <div className="font-semibold text-base sm:text-lg">
            Announcement - 41<sup>st</sup> APAO Congress 2026
          </div>
          <div className="flex items-center gap-2">
            <span>GO</span>
            <FaArrowRight color="#8A2299" size={16} />
          </div>
        </div>
        {/* Countdown Timer */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-[#8A2299] font-semibold text-sm sm:text-lg">
          <div className="flex flex-col items-center bg-[#f8e9fb] px-3 py-2 rounded-xl shadow-md">
            <span className="text-2xl sm:text-3xl">{timeLeft.days}</span>
            <span className="text-xs sm:text-sm">Days</span>
          </div>
          <div className="flex flex-col items-center bg-[#f8e9fb] px-3 py-2 rounded-xl shadow-md">
            <span className="text-2xl sm:text-3xl">{timeLeft.hours}</span>
            <span className="text-xs sm:text-sm">Hrs</span>
          </div>
          <div className="flex flex-col items-center bg-[#f8e9fb] px-3 py-2 rounded-xl shadow-md">
            <span className="text-2xl sm:text-3xl">{timeLeft.minutes}</span>
            <span className="text-xs sm:text-sm">Min</span>
          </div>
          <div className="flex flex-col items-center bg-[#f8e9fb] px-3 py-2 rounded-xl shadow-md">
            <span className="text-2xl sm:text-3xl">{timeLeft.seconds}</span>
            <span className="text-xs sm:text-sm">Sec</span>
          </div>
        </div>

        {/* Register Button */}
        {/* <div className="flex justify-center lg:justify-end w-full lg:w-auto">
          <Badge.Ribbon
            text="Win FREE gifts!"
            className="custom-ribbon pulsing-ribbon"
          >
            <Button
              type="primary"
              ghost
              className="rounded-none border-2 !text-[#8A2299] !border-[#8A2299] whitespace-nowrap"
              onClick={() => setIsEventUserRegisterModelOpen(true)}
            >
              REGISTER NOW
            </Button>
          </Badge.Ribbon>
        </div> */}

        {/* {isEventUserRegisterModelOpen && (
          <RegisterModel
            isEventUserRegisterModelOpen={isEventUserRegisterModelOpen}
            setIsEventUserRegisterModelOpen={setIsEventUserRegisterModelOpen}
          />
        )} */}
      </div>
    </div>
  );
}
