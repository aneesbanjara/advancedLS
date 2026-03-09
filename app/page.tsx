import FeaturedProducts from "@/components/home/FeaturedProducts";
// import LatestUpdate from "@/components/home/LatestUpdate";
// import PopupModal from "@/components/models/popupModel/PopupModal";
// import { useState } from "react";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advanced Lifescience Technologies",
  description: "Authorized distributor of Topcon Healthcare in Nepal",
  alternates: {
    canonical: "https://www.altplnepal.com/",
  },
};

export default function Home() {
  // const [showPopup, setShowPopup] = useState(true);
  // const handleClose = () => setShowPopup(false);
  return (
    <div>
      {/* {showPopup && (
        <PopupModal
          imageSrc="/announcement/announcement.png"
          onClose={handleClose}
        />
      )} */}
      <div className="relative">
        <video preload="none" autoPlay muted loop className="w-full h-auto">
          <source src="/videos/microscope.mp4" type="video/mp4" />
        </video>
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 p-4 sm:p-10 lg:p-[15rem] space-y-3 sm:space-y-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FFFAFA] font-bold tracking-wider">
            Maestro2
          </h1>
          <p className="text-base sm:text-2xl md:text-3xl lg:text-5xl text-[#FFFAFA] font-semibold">
            Automated OCT, true color fundus photography and automated OCT
            Angiography in one instrument.
          </p>
          <Link
            href="/products/diagnostics/oct/maestro2"
            className="inline-block px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 border-2 border-white text-sm sm:text-base md:text-lg text-[#FFFAFA] font-semibold rounded hover:bg-white hover:text-black transition"
          >
            Learn More
          </Link>
        </div>
      </div>
      {/* <LatestUpdate /> */}
      <FeaturedProducts />
    </div>
  );
}
