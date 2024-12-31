import hud1Img from "@/public/images/treatment/photocoagulator/hud-1.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

export default function HUD1() {
  return (
    <ProductDetails
      productName="HUD-1"
      para="The HUD-1 is an ophthalmic image projector used as an accessory to PASCALR Synthesis and TwinStar lasers. The HUD-1 lets you compare the target area of treatment with a side-by-side view of a reference image previously obtained from the patient’s fundus for location and assessment."
      imgSrc={hud1Img}
      imgAlt={"HUD-1 Image"}
      keyFeatures={[]}
      pdfSrc=""
    />
  );
}
