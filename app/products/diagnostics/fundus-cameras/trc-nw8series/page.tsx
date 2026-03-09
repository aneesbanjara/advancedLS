import trcnw8seriesImg from "@/public/images/diagnostics/fundusCameras/trc-nw8series.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TRC-NW8 Series – Advanced Lifescience Technologies",
  description: "Multi-functional, non-mydriatic retinal camera",
  alternates: {
    canonical:
      "https://www.altplnepal.com/products/diagnostics/fundus-cameras/trc-nw8series/",
  },
};

export default function TRCNW8series() {
  return (
    <ProductDetails
      productName="TRC-NW8 Series"
      para="With the TRC-NW8 series, it is possible to capture not only Color, Red-free but also Fluorescein angiography to answer your needs."
      imgSrc={trcnw8seriesImg}
      imgAlt={"TRC-NW8 Series Image"}
      keyFeatures={[
        "Multi-Functional Retinal Camera",
        "Lower Flash Intensity",
        "Easy to use",
        "Continuous Shooting Function",
        "Auto Focus & Auto Shoot & Auto Small Pupil Detection",
      ]}
      pdfSrc="/pdfs/products/diagnostics/fundusCameras/TRCNW8series-brochure.pdf"
    />
  );
}
