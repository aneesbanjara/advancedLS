"use client";

import React from "react";
import { Image as AntImage } from "antd";

export default function Gallary() {
  return (
    <section>
      <div className="flex flex-row justify-start bg-gradient-to-r from-[#ADD8E6] to-[#00008B] text-white px-36 py-8">
        <div className="text-4xl">Gallary</div>
      </div>
      <div className="flex flex-col gap-5 mx-[15%] my-[3%] text-2xl">
        <div className="flex justify-center items-center gap-8 no-underline font-medium ">
          <AntImage.PreviewGroup
            preview={{
              onChange: (current, prev) =>
                console.log(`current index: ${current}, prev index: ${prev}`),
            }}
          >
            <AntImage
              width={100}
              src={"/images/conferenceEgImg.jpg"}
              alt="Cornea Conference held at Sagarmata Chaudhary Eye Hospital, Lahan"
            />
          </AntImage.PreviewGroup>
          Participation At Cornea Conference held at Sagarmatha Chaudhary Eye
          Hospital, Lahan
        </div>{" "}
        <div className="flex justify-center items-center gap-8 no-underline font-medium ">
          <AntImage.PreviewGroup
            preview={{
              onChange: (current, prev) =>
                console.log(`current index: ${current}, prev index: ${prev}`),
            }}
          >
            <AntImage
              width={100}
              src={"/images/ExibitionCorneaConferenceSCEH.jpeg"}
              alt="Exibition of Cornea Conference held at Nepal Eye Hospital, Tripureshower"
            />
          </AntImage.PreviewGroup>
          Exhibition At Cornea Conference held at Nepal Eye Hospital,
          Tripureshower
        </div>{" "}
      </div>
    </section>
  );
}
