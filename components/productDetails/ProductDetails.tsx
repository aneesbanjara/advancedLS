import { Button } from "antd";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import SubHeader from "../subheader/SubHeader";
import Margin from "../margin/Margin";
import { CiSquareCheck } from "react-icons/ci";
import { PiFilePdf } from "react-icons/pi";
import InquiryForm from "../inquiry/InquiryForm";

interface ProductDetailsCardProps {
  productName: string;
  para: string;
  imgSrc: string | StaticImageData;
  imgAlt: string;
  keyFeatures: string[];
  pdfSrc: string;
}

export default function ProductDetails({
  productName,
  para,
  imgSrc,
  imgAlt,
  keyFeatures,
  pdfSrc,
}: ProductDetailsCardProps) {
  return (
    <section>
      <SubHeader>{productName}</SubHeader>
      <Margin>
        <div className="flex justify-between gap-4 w-full">
          <div className="flex flex-col gap-2">
            <p className="text-base">{para}</p>
            <Link href="#inquiry-section">
              <Button type="primary" ghost className="rounded-none">
                LEARN MORE
              </Button>
            </Link>
          </div>
          <div className="w-[35%]">
            <Image
              src={imgSrc}
              alt={imgAlt}
              className="w-[15rem] h-[15rem] object-contain drop-shadow-[0_0_0.75rem_rbga(0,0,0,0.5)] p-4"
              priority
            />
          </div>
        </div>
      </Margin>
      {keyFeatures.length !== 0 && (
        <div className="flex flex-col gap-4 bg-[#eee] px-[20%] py-[2%] my-[2%]">
          <div className="aboutUsHeading text-center text-3xl mx-[10%] my-[5%] px-4 py-2 rounded-xl text-[#8b229b] font-medium ">
            Key Features
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            {keyFeatures.map((index, keyFeature) => {
              return (
                <div
                  className="flex justify-start items-start gap-4 w-full"
                  key={keyFeature}
                >
                  <span>
                    <CiSquareCheck
                      fontSize={30}
                      color="#00008B"
                      className="font-[30px]"
                    />
                  </span>
                  <span>{index}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <Margin>
        {pdfSrc.length > 0 && (
          <div className="flex flex-col justify-center items-center gap-3">
            <PiFilePdf fontSize={40} />
            <span className="text-lg font-bold">{productName} Brochure</span>
            <Link
              href={pdfSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-[#00008B] cursor-pointer"
              locale={"false"}
            >
              Download Now
            </Link>
          </div>
        )}
        <div>
          <div id="inquiry-section" className="my-[5%]">
            <div className="aboutUsHeading text-center text-3xl mx-[10%] my-[5%] px-4 py-2 rounded-xl text-[#8b229b] font-medium ">
              Request Information Now
            </div>
            <div className="text-base text-[#555] px-[20%]">
              Have questions about our products or ready to make a purchase?
              We&apos;re here to assist you. Simply fill out the form below, and
              our team will reach out to you shortly.
            </div>
          </div>
          <section>
            <InquiryForm />
          </section>
        </div>
      </Margin>
    </section>
  );
}
