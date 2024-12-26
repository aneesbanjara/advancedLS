import { Button } from "antd";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProductCardProps {
  linkTo: string;
  imgSrc: string | StaticImageData;
  imgAlt: string;
  productName: string;
  para: string;
}

export default function Product({
  linkTo = "/",
  imgSrc,
  imgAlt,
  productName,
  para,
}: ProductCardProps) {
  return (
    <section className="flex flex-col justify-center items-center gap-8 w-[40%]">
      <Link href={linkTo ? linkTo : "/"} className="  no-underline rounded-md ">
        <Image
          src={imgSrc}
          alt={imgAlt ? imgAlt : "Product Image"}
          className="w-[10rem] h-[10rem] object-contain drop-shadow-[0_0_0.75rem_rbga(0,0,0,0.5)] p-4"
          priority
        />
      </Link>
      <div className="flex flex-col justify-center items-center bg-[#eee] p-4 rounded-md gap-1">
        <div className="text-[#00008B] font-bold tracking-[0.15rem] uppercase font-['Montserrat',sans-serif]">
          {productName}
        </div>
        <p className="text-sm text-[#666]">{para}</p>
        <Link href={linkTo ? linkTo : "/"}>
          <Button type="primary" ghost className="rounded-none">
            LEARN MORE
          </Button>
        </Link>
      </div>
    </section>
  );
}
