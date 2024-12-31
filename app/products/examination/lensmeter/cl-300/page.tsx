import cl300Img from "@/public/images/examination/lensmeter/cl-300.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

export default function CL300() {
  return (
    <ProductDetails
      productName="CL-300"
      para="The Topcon CL-300 Computerized Lensmeter combines innovative technology with ease-of-use features including progressive lens measurement, a large color LCD monitor, a green light reading beam that enhances measurement precision and a UV transmittance measurement function."
      imgSrc={cl300Img}
      imgAlt={"CL-300 Image"}
      keyFeatures={[
        "UV Transmittance Measurement",
        "LCD Touch Panel",
        "Improved Lens Support",
        "Green Measurement Light Beam",
        "Fast and Easy Loading of Printer Paper",
        "Easy and Fast Operation",
        "Compact Slim Body",
        "Auto—Mono and Multi Focal Detection",
      ]}
      pdfSrc="/pdfs/products/examination/lensmeter/CL-300-Brochure.pdf"
    />
  );
}
