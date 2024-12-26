import Image from "next/image";
import Link from "next/link";
import conferenceImg from "@/app/assets/conferenceEgImg.jpg";

export default function Topics() {
  return (
    <div className=" flex flex-col justify-center items-center gap-10 my-10 px-16 py-5 bg-[#efefef]">
      <div className="text-4xl font-bold text-[rgb(138,34,153)]">TOPICS</div>
      <div className="flex flex-row justify-center items-center space-x-8 w-full py-4 ">
        <Link href="/" className="border-2 border-red-600">
          <Image
            src={conferenceImg}
            alt="Conference image"
            className="w-[30%] object-contain"
            priority
          />
        </Link>
        <Link href="/" className="border-2 border-red-600">
          <Image
            src={conferenceImg}
            alt="Conference image"
            className="w-[30%] object-contain"
            priority
          />
        </Link>
      </div>
    </div>
  );
}
