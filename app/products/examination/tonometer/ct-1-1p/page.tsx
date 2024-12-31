import ct11pImg from "@/public/images/examination/tonometer/ct_1_1p.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

export default function CT11P() {
  return (
    <ProductDetails
      productName="CT-1/CT-1P"
      para="The CT-1/CT-1P provides an innovative operation experience and eliminates the need for a control lever. You will save space in your examination room. The air-puff mechanism ensures a soft air-puff and reduces the maintenance and cleaning."
      imgSrc={ct11pImg}
      imgAlt={"CT-1/CT-1P Image"}
      keyFeatures={[
        "Simple and Quick Operation",
        "R/L fully automated measurement",
        "Easy-to-use Touch Screen Control Panel eliminates the need for control lever",
        "Additional Measurement Mode",
        "Flexible and Space Saving Layout",
        "The adjustable control panel can be positioned in any direction",
        "Compact Body",
        "Reliable Measurement",
        "New ergonomic optical head and headrest design",
        "Stable IOP measurement with soft Air-Puff",
        "Corneal thickness measurement for IOP compensation(CT-1P only)",
      ]}
      pdfSrc="/pdfs/products/examination/tonometer/CT1_1P_Brochure.pdf"
    />
  );
}
