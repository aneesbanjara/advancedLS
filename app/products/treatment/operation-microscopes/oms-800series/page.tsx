import oms800seriesImg from "@/public/images/treatment/operationMicroscopes/oms-800series.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "OMS-800 series – Advanced Lifescience Technologies",
  description: "Extensive focus range and high versatlity",
  alternates: {
    canonical:
      "https://www.altplnepal.com/products/treatment/operation-microscopes/oms-800series/",
  },
};

export default function OMS800series() {
  return (
    <ProductDetails
      productName="OMS-800 series"
      para="Topcon’s pursuit of perfection is reflected in its continuing development of the OMS-800 range of operating microscopes, adapting them to meet the needs of modern ophthalmic procedures while maintaining the high quality and durability that made Topcon the World Leader in Ophthalmic Equipment."
      imgSrc={oms800seriesImg}
      imgAlt={"OMS-800 series Image"}
      keyFeatures={[
        "Bi-manual vitrectomy without the need for fiber-optic illumination (OFFISS model only)",
        "Double focusing mechanism",
        "Programmable multi-function footswitch",
        "Electromagnetic locks",
        "Suitable for all types of ophthalmic surgery",
        "Space-saving design provides a large working area",
        "Easy illumination bulb exchange allows the spare lamp to be immediately rotated into position if the main lamp fails",
      ]}
      pdfSrc="/pdfs/products/treatment/operationMicroscopes/OMS-800_Brochure.pdf"
    />
  );
}
