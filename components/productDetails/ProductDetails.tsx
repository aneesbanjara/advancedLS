import { Button } from "antd";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import SubHeader from "../subheader/SubHeader";
import Margin from "../margin/Margin";
import { CiSquareCheck } from "react-icons/ci";
import { PiFilePdf } from "react-icons/pi";
import InquiryForm from "../inquiry/InquiryForm";
import CarouselComponent from "../home/carousel/CarouselComponent";

import TritonImg from "@/public/images/diagnostics/OCT/Triton-Pro.png";
import solosImg from "@/public/images/examination/lensmeter/solos.png";
import myahImg from "@/public/images/diagnostics/axialLength/myah.png";
import maestro2Img from "@/public/images/diagnostics/OCT/maestro2.png";
import chronosImg from "@/public/images/examination/refractionSystem/chronos.png";
import nw500Img from "@/public/images/diagnostics/fundusCameras/nw500.png";
import trk3omniaImg from "@/public/images/examination/tonometer/trk-3-omnia.png";

interface ProductDetailsCardProps {
  productName: string;
  para: string;
  imgSrc: string | StaticImageData;
  imgAlt: string;
  keyFeatures: string[];
  pdfSrc: string;
}

interface Product {
  id: number;
  image: string | StaticImageData;
  name: string;
  description: string;
  link: string;
}

export default function ProductDetails({
  productName,
  para,
  imgSrc,
  imgAlt,
  keyFeatures,
  pdfSrc,
}: ProductDetailsCardProps) {
  const products: Product[] = [
    {
      id: 1,
      image: TritonImg,
      name: "DRI OCT Triton",
      description:
        "Increase diagnostic capabilities and capture advanced retinal imaging from the global leader in OCT",
      link: "/products/diagnostics/oct/triton",
    },
    {
      id: 2,
      image: solosImg,
      name: "SOLOS",
      description:
        "Advanced, accurate lens analysis with the touch of a button.",
      link: "/products/examination/lensmeter/solos",
    },
    {
      id: 3,
      image: myahImg,
      name: "MYAH",
      description:
        "The efficient, affordable and repeatable way to baseline axial length and monitor changes",
      link: "/products/diagnostics/axiallength/myah",
    },
    {
      id: 4,
      image: maestro2Img,
      name: "Maestro2",
      description:
        "Automated OCT, true color fundus photography and automated OCT Angiography in one instrument.",
      link: "/products/diagnostics/oct/maestro2",
    },
    {
      id: 5,
      image: chronosImg,
      name: "Chronos",
      description: "Now is the time to reinvent refractions with Chronos.",
      link: "/products/examination/refraction-system/chronos",
    },
    {
      id: 6,
      image: nw500Img,
      name: "NW500",
      description: "Reliable, sharp-quality imaging, with enhanced capability.",
      link: "/products/diagnostics/fundus-cameras/nw500",
    },
    {
      id: 7,
      image: trk3omniaImg,
      name: "TRK-3 OMNIA",
      description:
        "The TRK-3 OMNIA is a multifunctional 4-in-1 device that combines refractometer, keratometer, tonometer and pachymeter into one instrument. ",
      link: "/products/examination/tonometer/trk-3-omnia",
    },
  ];
  return (
    <section>
      <SubHeader>{productName}</SubHeader>
      <Margin>
        <div className="flex flex-wrap sm:flex-nowrap justify-between gap-4 w-full">
          <div className="flex flex-col gap-2">
            <p className="whitespace-pre-line text-justify text-base sm:text-base md:text-lg">
              {para}
            </p>
            <Link href="#inquiry-section">
              <Button type="primary" ghost className="rounded-none">
                LEARN MORE
              </Button>
            </Link>
          </div>
          <div className="w-[35%]">
            <div className="w-[17rem] h-[17rem] relative p-4]">
              <Image
                src={imgSrc}
                alt={imgAlt}
                fill
                className="w-[15rem] h-[15rem] object-contain drop-shadow-[0_0_0.75rem_rbga(0,0,0,0.5)] p-4"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </Margin>
      {keyFeatures.length !== 0 && (
        <div className="flex flex-col gap-4 bg-[#eee] px-[20%] py-[2%] my-[2%]">
          <div className="aboutUsHeading text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl mx-[10%] my-[5%] px-4 py-2 rounded-xl text-[#8b229b] font-medium ">
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
            <div className="aboutUsHeading text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl mx-[10%] my-[5%] px-4 py-2 rounded-xl text-[#8b229b] font-medium ">
              Request Information Now
            </div>
            <div className="text-sm sm:text-base text-[#555] px-4 sm:px-[5%] md:px-[10%] lg:px-[15%]">
              Have questions about our products or ready to make a purchase?
              We&apos;re here to assist you. Simply fill out the form below, and
              our team will reach out to you shortly.
            </div>
          </div>
          <section>
            <InquiryForm />
          </section>
        </div>
        <div>
          <div className="text-3xl font-thin">Related products:</div>
        </div>
      </Margin>
      <CarouselComponent products={products} />
    </section>
  );
}
