import FeaturedProducts from "@/components/home/FeaturedProducts";
import LatestUpdate from "@/components/home/LatestUpdate";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <video preload="none" autoPlay muted loop className="w-full h-auto">
          <source src="./videos/microscope.mp4" type="video/mp4" />
        </video>
        <div className="p-[15rem] absolute bottom-8 left-8 space-y-4">
          <h1 className="text-6xl text-[#FFFAFA] font-bold tracking-wider">
            OMS-90
          </h1>
          <p className="text-5xl text-[#FFFAFA] font-semibold">
            Water-Repellent Coated Objective Lens, a PD Adjustment Knob, and
            Five-Step Magnification
          </p>
          <Link
            href="/products/treatment/operation-microscopes/oms-90"
            className="inline-block px-6 py-3 border-2 border-white text-[#FFFAFA] text-lg font-semibold rounded hover:bg-white hover:text-black transition"
          >
            Learn More
          </Link>
        </div>
      </div>
      <LatestUpdate />
      <FeaturedProducts />
    </div>
  );
}
