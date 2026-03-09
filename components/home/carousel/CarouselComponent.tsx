import { Carousel } from "antd";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  image: string | StaticImageData;
  name: string;
  description: string;
  link: string;
}

interface CarouselCardProps {
  products: Product[];
}

export default function CarouselComponent({ products }: CarouselCardProps) {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Carousel {...settings} className="my-12 mx-4 md:mx-[10%] z-10">
      {products.map((product) => (
        <div key={product.id} className="text-center">
          <div className="flex flex-col items-center p-6 rounded-lg h-[450px]">
            <Link
              href={product.link.toString()}
              className="no-underline rounded-md"
            >
              <Image
                src={product.image}
                alt={product.name}
                className="w-full max-w-[300px] h-[200px] object-contain rounded-md mb-4"
                unoptimized
              />
            </Link>
            <h3 className="text-[#00008B] text-xl sm:text-2xl font-semibold mb-2 text-center">
              {product.name}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-center flex-grow mb-4 whitespace-pre-line hidden sm:block">
              {product.description}
            </p>
            <Link
              href={product.link.toString()}
              className="px-4 py-2 border border-[#4f6de3] text-[#364d79] font-semibold hover:bg-gray-200 rounded-none transition-all duration-200"
              style={{
                backgroundColor: "#fff",
                display: "inline-block",
                textAlign: "center",
              }}
            >
              Learn More
            </Link>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
