import sp1pImg from "@/public/images/treatment/specularMicroscope/sp-1p.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

export default function SP1P() {
  return (
    <ProductDetails
      productName="SP-1P"
      para="SP-1P introduces a fully automatic capture procedure together with a modern, ergonomic design that simplifies its use and increases its efficiency. A large 10.4-inch rotatable touch panel monitor eliminates the need for a joystick and can be turned to various angles, for better interaction with the patient."
      imgSrc={sp1pImg}
      imgAlt={"SP-1P Image"}
      keyFeatures={[
        "Wide Angle “Panorama” Photography Mode　- Substantial size increase of the analyzed area",
        "Two Specific Photography Modes　- Sequence Course & Free Style Course",
        "Quick Automatic Measurement and Analysis　- Instant acquisition of the analysis result and Intuitive operation",
        "Easy-to-Read Screen and Comprehensive Analysis Software",
        "Compact and Stylish Design – 10.4” rotatable touch panel monitor",
      ]}
      pdfSrc="/pdfs/products/treatment/specularMicroscope/SP-1P_brochure.pdf"
    />
  );
}
