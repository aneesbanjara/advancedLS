import chronosImg from "@/public/images/examination/refractionSystem/chronos.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Chronos – Advanced Lifescience Technologies",
  description:
    "Balancing Innovation with Tradition for an Enhanced Refraction Workflow",
  alternates: {
    canonical:
      "https://www.altplnepal.com/products/examination/refraction-system/chronos/",
  },
};

export default function Chronos() {
  return (
    <ProductDetails
      productName="Chronos"
      para="Chronos combines binocular autorefraction and keratometry measurements with binocular subjective testing and visual acuity in a single instrument that occupies a minimal amount of space and optimizes workflow."
      imgSrc={chronosImg}
      imgAlt={"Chronos Image"}
      keyFeatures={[
        "Binocular objective testing",
        "Binocular subjective refraction",
        "Seamless testing available with multiple distances",
        "Unique operability with SightPilot™, a guided refraction system",
        "Time-saving – without the need of moving between instruments",
        "Tablet control for all steps of objective and subjective refraction",
        "Space-saving – 3 measurements*1 are available in 1 instrument",
      ]}
      pdfSrc="/pdfs/products/examination/refractionSystem/Chronos_Brochure.pdf"
    />
  );
}
