"use client";
import React from "react";
import { Image as AntImage } from "antd";
import SubHeader from "@/components/subheader/SubHeader";

export default function Conferences() {
  return (
    <section>
      <SubHeader>Conferences </SubHeader>
      <div className="mx-[15%] my-[3%]">
        <AntImage.PreviewGroup
          preview={{
            onChange: (current, prev) =>
              console.log(`current index: ${current}, prev index: ${prev}`),
          }}
        >
          <div className="flex flex-row gap-5">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <div className="relative w-[130px] h-[130px]">
                <AntImage
                  width={120}
                  src="/images/gallery/1.jpg"
                  alt="Image 1"
                  className="absolute top-[-29px] left-0 z-1 shadow-md"
                  style={{ borderRadius: "6px" }}
                />
                <AntImage
                  width={120}
                  src="/images/gallery/2.jpg"
                  alt="Image 2"
                  className="absolute top-[-59px] left-1 z-0 rotate-[0deg]"
                  style={{ borderRadius: "6px" }}
                />
                <AntImage
                  width={120}
                  src="/images/gallery/3.jpg"
                  alt="Image 2"
                  className="absolute top-[-79px] left-2 z-0 rotate-[0deg]"
                  style={{ borderRadius: "6px" }}
                />
              </div>

              <p className="text-base font-medium max-w-[180px]">
                Participation at NOSCON conference 2025 held at Mechi Eye
                Hospital
              </p>
            </div>
          </div>
        </AntImage.PreviewGroup>
      </div>
    </section>
  );
}

{
  /*
  import { Image as AntImage } from "antd";
   <div className="mx-[15%] my-[3%]">
<AntImage.PreviewGroup
  preview={{
    onChange: (current, prev) =>
      console.log(`current index: ${current}, prev index: ${prev}`),
  }}
>
  <div className="flex flex-row gap-5">
    <div className="flex flex-col items-center justify-center gap-4 text-center">
      <div className="relative w-[130px] h-[130px]">
        <AntImage
          width={120}
          src="/images/conferenceEgImg.jpg"
          alt="Image 1"
          className="absolute top-0 left-0 z-0 shadow-md"
          style={{ borderRadius: "6px" }}
        />
        <AntImage
          width={120}
          src="/images/corneaConferenceSCEH.jpeg"
          alt="Image 2"
          className="absolute top-0 left-0 z-0 rotate-[5deg] opacity-80"
          style={{ borderRadius: "6px" }}
        />

      </div>

      <p className="text-base font-medium max-w-[180px]">
        Participation at Cornea Conference held at Sagarmatha Chaudhary
        Eye Hospital, Lahan
      </p>
    </div>
  </div>
</AntImage.PreviewGroup>
</div> */
}
