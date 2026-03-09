import PASCAL_Synthesis_TwinstarImg from "@/public/images/treatment/iridex-products/PASCAL-synthesis-twinstar/PASCAL-synthesis-twinstar.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

export default function PASCAL_Synthesis_Twinstar() {
  return (
    <ProductDetails
      productName="PASCAL® Synthesis TwinStar"
      para="A dual-wavelength system (577nm yellow + 638nm red) designed for versatility. Seamlessly integrates with the Topcon SL-D4 slit lamp, with red light offering deep, gentle penetration for effective choroidal vessel treatment."
      imgSrc={PASCAL_Synthesis_TwinstarImg}
      imgAlt={"PASCAL® Synthesis TwinStar Image"}
      keyFeatures={[
        "Includes both 577nm + 638nm wavelengths (yellow/red) in a single system",
        "Integrates seamlessly with Topcon SL-D4 slit lamp",
        "Red wavelength is ideal for providing deep, gentle penetration and effective treatment of choroidal vessels",
      ]}
      pdfSrc=""
    />
  );
}
