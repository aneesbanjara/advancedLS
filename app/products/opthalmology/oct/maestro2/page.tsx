import Margin from "@/components/margin/Margin";
import SubHeader from "@/components/subheader/SubHeader";
import Image from "next/image";
import maestro2Img from "@/public/images/opthalmology/OCT/maestro2.png";
import { CiSquareCheck } from "react-icons/ci";
import { PiFilePdf } from "react-icons/pi";
import Link from "next/link";
import { Button } from "antd";
import InquiryForm from "@/components/inquiry/InquiryForm";

export default function Maestro2() {
  return (
    <section>
      <SubHeader>Maestro 2</SubHeader>
      <Margin>
        <div className="flex gap-4 w-full">
          <div className="flex flex-col gap-2">
            <p className="text-base">
              Introducing automated OCT, true color fundus photography, and
              automated OCT Angiography in one instrument. With the touch of a
              button, OCTA provides instantaneous vascular structure information
              – from our world-renowned, multi-modal OCT solution.
            </p>
            <Link href="#inquiry-section">
              <Button type="primary" ghost className="rounded-none">
                LEARN MORE
              </Button>
            </Link>
          </div>
          <div className=" w-[35%]">
            <Image
              src={maestro2Img}
              alt={"Maestro 2 Image"}
              className="w-[15rem] h-[15rem] object-contain drop-shadow-[0_0_0.75rem_rbga(0,0,0,0.5)] p-4"
              priority
            />
          </div>
        </div>
      </Margin>
      <div className="flex flex-col gap-4 bg-[#eee] px-[20%] py-[2%] my-[2%]">
        <div className="aboutUsHeading text-center text-3xl mx-[10%] my-[5%] px-4 py-2 rounded-xl text-[#8b229b] font-medium ">
          Key Features
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex justify-start items-end gap-4 w-full">
            <CiSquareCheck fontSize={30} color="#00008B" />
            <span>Fully automated image capture</span>
          </div>
          <div className="flex justify-start items-end gap-4 w-full">
            <CiSquareCheck fontSize={30} color="#00008B" />
            <span>Compact and space-saving design</span>
          </div>
          <div className="flex justify-start items-end gap-4 w-full">
            <CiSquareCheck fontSize={30} color="#00008B" />
            <span>Hood Report for Glaucoma</span>
          </div>
          <div className="flex justify-start items-end gap-4 w-full">
            <CiSquareCheck fontSize={30} color="#00008B" />
            <span>12mm x 9mm Wide field OCT</span>
          </div>
          <div className="flex justify-start items-end gap-4 w-full">
            <CiSquareCheck fontSize={30} color="#00008B" />
            <span>Fully automated OCT Angiography</span>
          </div>
        </div>
      </div>
      <Margin>
        <div className="flex flex-col justify-center items-center gap-3">
          <PiFilePdf fontSize={40} />
          <span className="text-lg font-bold">Maestro2 Brochure</span>
          <Link href={"/"} className="text-sm font-bold text-[#00008B]">
            Download Now
          </Link>
        </div>
        <div>
          <div className="my-[5%]">
            <div className="aboutUsHeading text-center text-3xl mx-[10%] my-[5%] px-4 py-2 rounded-xl text-[#8b229b] font-medium ">
              Request Information Now
            </div>
            <div className="text-base text-[#555] px-[20%]">
              Have questions about our products or ready to make a purchase?
              We&apos;re here to assist you. Simply fill out the form below, and
              our team will reach out to you shortly.
            </div>
          </div>
          <section id="bottom-section">
            <InquiryForm />
          </section>
        </div>
      </Margin>
    </section>
  );
}
