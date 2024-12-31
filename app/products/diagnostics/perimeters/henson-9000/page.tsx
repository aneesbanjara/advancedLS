import Henson9000Img from "@/public/images/diagnostics/perimeters/henson9000.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

export default function Henson9000() {
  return (
    <ProductDetails
      productName="Henson 9000"
      para="The Henson 9000 is a compact, easy-to-use perimeter for glaucoma detection and management. It features innovative tests that improve speed and diagnostic accuracy while enhancing the patient experience and practice efficiency. A full suite of analytical tools enables the long-term management of glaucoma patients."
      imgSrc={Henson9000Img}
      imgAlt={"Henson 9000 Image"}
      keyFeatures={[
        "SPEED & ACCURACY – Smart Supra multiple stimulus tests help to reduce patient response errors and improve workflow",
        "IMPROVED SENSITIVITY (TO CENTRAL DEFECTS) – The 3.5-minute Smart Supra test combines 24-2 and 10-2 test patterns",
        "CONVENIENCE – Smart Supra test can be set to auto-extend as required, from 26 points to 54 (24-2) and from 54 points to 86 (24-2 plus 10-2)",
        "ENHANCED FOLLOW-UP – ZATA threshold test starts from prior patient data and uses smart threshold-related terminating criteria to optimize test performance and includes powerful tools for analyzing the progression",
      ]}
      pdfSrc="/pdfs/products/diagnostics/perimeters/Henson9000_Brochure.pdf"
    />
  );
}
