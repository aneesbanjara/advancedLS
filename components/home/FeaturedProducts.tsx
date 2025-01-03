import { Button, Carousel } from "antd";
import tritonImg from "@/public/images/diagnostics/OCT/triton.png";
import solosImg from "@/public/images/examination/lensmeter/solos.png";
import myahImg from "@/public/images/diagnostics/axialLength/myah.png";
import maestro2Img from "@/public/images/diagnostics/OCT/maestro2.png";
import chronosImg from "@/public/images/examination/refractionSystem/chronos.png";
import nw500Img from "@/public/images/diagnostics/fundusCameras/nw500.png";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

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
      image: tritonImg,
      name: "Triton",
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
  ];
  return (
    <section>
      <div className=" flex flex-col justify-center items-center gap-10 my-10 px-16 py-5">
        <div className="text-4xl font-bold text-[rgb(138,34,153)]">
          FEATURED PRODUCTS
        </div>
      </div>
      <Carousel
        autoplay
        autoplaySpeed={2000}
        slidesToShow={3}
        className="my-12 mx-[10%]"
        draggable
      >
        {products.map((product) => (
          <div key={product.id} className="text-center">
            <div className="flex flex-col items-center p-6 rounded-lg h-[450px]">
              <Link href={product.link} className="  no-underline rounded-md ">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full max-w-[300px] h-[200px] object-contain rounded-md mb-4"
                />
              </Link>
              <h3 className="text-[#00008B] text-3xl font-semibold mb-2 text-center">
                {product.name}
              </h3>
              <p className="text-center text-lg flex-grow mb-4">
                {product.description}
              </p>
              <Button
                type="primary"
                ghost
                href={product.link}
                className="px-4 py-2 bg-white text-[#364d79] font-semibold hover:bg-gray-200 rounded-none"
              >
                Learn More
              </Button>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
