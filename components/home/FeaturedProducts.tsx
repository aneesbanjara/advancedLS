import TritonImg from "@/public/images/diagnostics/OCT/Triton-Pro.png";
import solosImg from "@/public/images/examination/lensmeter/solos.png";
import myahImg from "@/public/images/diagnostics/axialLength/myah.png";
import maestro2Img from "@/public/images/diagnostics/OCT/maestro2.png";
import chronosImg from "@/public/images/examination/refractionSystem/chronos.png";
import nw500Img from "@/public/images/diagnostics/fundusCameras/nw500.png";
import trk3omniaImg from "@/public/images/examination/tonometer/trk-3-omnia.png";
import { StaticImageData } from "next/image";
import CarouselComponent from "./carousel/CarouselComponent";

type Product = {
  id: number;
  image: string | StaticImageData;
  name: string;
  description: string;
  link: string;
};

export default function FeaturedProducts() {
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
      <div className=" flex flex-col justify-center items-center gap-10 my-10 px-16 py-5">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[rgb(138,34,153)] text-center">
          FEATURED PRODUCTS
        </div>
      </div>
      <CarouselComponent products={products} />
    </section>
  );
}
