import Iridex_PASCALImg from "@/public/images/treatment/iridex-products/iridex-PASCAL/iridex-PASCAL.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Iridex PASCAL® – Advanced Lifescience Technologies",
  description:
    "A versatile laser platform combining pattern-scanning precision with MicroPulse® tissue-sparing technology.",
  alternates: {
    canonical:
      "https://www.altplnepal.com/products/treatment/iridex-products/iridex-PASCAL/",
  },
};

export default function Iridex_PASCAL() {
  return (
    <ProductDetails
      productName="Iridex PASCAL®"
      para="A versatile laser platform combining pattern-scanning precision with MicroPulse® tissue-sparing technology. Offers enhanced ergonomics, innovative four-fiber beam design, and the industry’s most comprehensive scanning library."
      imgSrc={Iridex_PASCALImg}
      imgAlt={"Iridex PASCAL® Image"}
      keyFeatures={[
        "Enhanced ergonomics with a smaller footprint",
        "Leading subthreshold technology including EPM™, PSLT, and now with MicroPulse® Technology",
        "Innovative four-fiber beam laser technology",
        "Access to the industry’s most comprehensive pattern-scanning library",
      ]}
      pdfSrc=""
    />
  );
}
