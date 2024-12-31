import mc55sImg from "@/public/images/examination/visualAcuityChart/mc-5-5s.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

export default function MC55S() {
  return (
    <ProductDetails
      productName="MC-5/MC-5S"
      para="MC-5/MC-5S supports you in the path to adapting quickly to new social distance recommendations whilst providing sophisticated visual acuity (VA) and space saving."
      imgSrc={mc55sImg}
      imgAlt={"MC-5/MC-5S Image"}
      keyFeatures={[
        "Safe-distance",
        "Small space requirements",
        "Less components",
        "Binocular open balance test",
        "Clear and stable VA test",
        "3D vision check",
        "Attractive contents",
      ]}
      pdfSrc="/pdfs/products/examination/visualAcuityChart/MC-5_brochure.pdf"
    />
  );
}
