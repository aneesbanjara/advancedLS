import lm88cImg from "@/public/images/examination/lensmeter/lm-8-8c.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

export default function LM88C() {
  return (
    <ProductDetails
      productName="LM-8/8C"
      para="LM-8/8C features a cartridge type marking device and a redesigned eyepiece."
      imgSrc={lm88cImg}
      imgAlt={"LM-8/8C Image"}
      keyFeatures={[
        "Traditional AO crosshair style target",
        "LED illuminated target for brighter, glare-free viewing",
        "Improved optical system",
        "Improved marking device",
        "High and wide field eyepiece provides less shading effect and is less fatiguing",
        "Contact lens measurement",
        "Built-in prism compensator",
        "Battery operated",
      ]}
      pdfSrc="/pdfs/products/examination/lensmeter/LM8_8C_Brochure.pdf"
    />
  );
}
