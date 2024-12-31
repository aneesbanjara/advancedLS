import oms90Img from "@/public/images/treatment/operationMicroscopes/oms-90.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

export default function OMS90() {
  return (
    <ProductDetails
      productName="OMS-90"
      para="It features a water-repellent coated objective lens, coaxial illumination, a PD adjustment knob, and five-step magnification."
      imgSrc={oms90Img}
      imgAlt={"OMS-90 Image"}
      keyFeatures={[
        "Wide assortment of optional accessories",
        "Stain-proof coated objective lens",
        "Shown with optional XY translator",
        "PD adjustment knob",
        "Parallel binocular tube",
        "Homogeneous coaxiall illumination by fiber optic",
        "Focal length of 200mm",
        "Compact base ensures optimal use of limited operating room floor space",
        "Built-in yellow filter",
      ]}
      pdfSrc="/pdfs/products/treatment/operationMicroscopes/OMS-90_Brochure.pdf"
    />
  );
}
