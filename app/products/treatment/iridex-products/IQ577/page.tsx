import IQ577Img from "@/public/images/treatment/iridex-products/IQ577/IQ577.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "IQ 577® Laser System – Advanced Lifescience Technologies",
  description:
    "A true yellow laser for retinal disorders, featuring MicroPulse® Fovea-Friendly™ therapy, dual-port efficiency, and repeatable macular treatments",
  alternates: {
    canonical:
      "https://www.altplnepal.com/products/treatment/iridex-products/IQ577/",
  },
};

export default function IQ532() {
  return (
    <ProductDetails
      productName="IQ 577® Laser System"
      para="A true yellow laser for retinal disorders, featuring MicroPulse® Fovea-Friendly™ therapy, dual-port efficiency, and repeatable macular treatments with high transmission through dense ocular media."
      imgSrc={IQ577Img}
      imgAlt={"IQ 577® Laser System Image"}
      keyFeatures={[
        "High transmission through dense ocular media",
        "Dual Port for efficient setup of alternate delivery devices",
        "Repeatable macular and foveal laser sessions",
        "Maximize workflow efficiency",
      ]}
      pdfSrc=""
    />
  );
}
