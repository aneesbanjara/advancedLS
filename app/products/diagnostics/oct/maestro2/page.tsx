import Maestro2Img from "@/public/images/diagnostics/OCT/maestro2.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maestro 2 – Advanced Lifescience Technologies",
  description:
    "Introducing automated OCT, true color fundus photography, and automated OCT Angiography in one instrument.",
  alternates: {
    canonical: "https://www.altplnepal.com/products/diagnostics/oct/maestro2/",
  },
};

export default function Maestro2() {
  return (
    <>
      <ProductDetails
        productName="Maestro 2"
        para="Introducing automated OCT, true color fundus photography, and automated OCT Angiography in one instrument. With the touch of a button, OCTA provides instantaneous vascular structure information – from our world-renowned, multi-modal OCT solution."
        imgSrc={Maestro2Img}
        imgAlt={"Maestro2 Image"}
        keyFeatures={[
          "Fully automated image capture",
          "Compact and space-saving design",
          "Hood Report for Glaucoma",
          "12mm x 9mm Wide field OCT",
          "Fully automated OCT Angiography",
        ]}
        pdfSrc="/pdfs/products/diagnostics/oct/OCT_Maestro2_Brochure_EN_2210.pdf"
      />
    </>
  );
}
