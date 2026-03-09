import TritonImg from "@/public/images/diagnostics/OCT/Triton-Pro.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DRI OCT Triton – Advanced Lifescience Technologies",
  description:
    "TOPCON’s SS OCT Angio combines OCT Angiography with Swept Source OCT technology and a long 1050nm wavelength.",
  alternates: {
    canonical: "https://www.altplnepal.com/products/diagnostics/oct/triton/",
  },
};
export default function Triton() {
  return (
    <ProductDetails
      productName="DRI OCT Triton"
      para="TOPCONs SS OCT Angio combines OCT Angiography with Swept Source OCT technology and a long 1050nm wavelength. OCTARA, a proprietary image processing algorithm, provides highly sensitive angiographic detection, allowing for visualisation of vascular structures."
      imgSrc={TritonImg}
      imgAlt={"Triton Image"}
      keyFeatures={[
        "High Density Swept Source OCT",
        "Deep Penetration Including Through Media Opacity",
        "Multimodal Imaging",
        "Swept Source OCT Angiography",
        "Hood Report for Glaucoma",
        "Wide-Field OCT Max. 21mm Scan",
        "Wide-Field OCT Angiography",
        "Smart Denoise",
      ]}
      pdfSrc="/pdfs/products/diagnostics/oct/DRI_OCT_Triton_Brochure_EN_2410.pdf"
    />
  );
}
