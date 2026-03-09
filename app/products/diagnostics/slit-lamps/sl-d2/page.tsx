import sld2Img from "@/public/images/diagnostics/slitLamps/sl-d2.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "SL-D2 – Advanced Lifescience Technologies",
  description: "The Combined Result of Optics and Technology",
  alternates: {
    canonical:
      "https://www.altplnepal.com/products/diagnostics/slit-lamps/sl-d2/",
  },
};

export default function SLD2() {
  return (
    <ProductDetails
      productName="SL-D2"
      para="The blending of quality, versatility and ease of use make digital image capture smooth and effortless. The SL-D series meets the varied demands of eye care specialisits."
      imgSrc={sld2Img}
      imgAlt={"SL-D2 Image"}
      keyFeatures={[
        "Optical Quality: With more than 85 years of experience in lens manufacturing, Topcon produces all the optics to outﬁt its instruments, providing excellent lens quality and a bright, clear view.",
        "Ergonomics: Topcon Slit Lamps are ergonomically designed for comfortable use. The SL “D” Series employs converging binocular tubes with a comfortable parallel magniﬁcation.",
        "Versatility: Variety of models in different conﬁgurations from basic clinical observation to sophisticated image capture. The Topcon series will satisfy any need and budget.",
      ]}
      pdfSrc="/pdfs/products/diagnostics/slitLamp/SLD-series_Brochure.pdf"
    />
  );
}
