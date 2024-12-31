import solosImg from "@/public/images/examination/lensmeter/solos.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

export default function SOLOS() {
  return (
    <ProductDetails
      productName="SOLOS"
      para="SOLOS enables advanced, accurate lens analysis with the touch of a button. SOLOS is a fully automated lensmeter with a full range spectrometer that detects, measures and marks single vision, progressive and other multifocal lenses glazes in a spectacle fame or as uncut lenses. With a single touch, SOLOS automatically positions each lens, detects the lens type and performs comprehensive measurements."
      imgSrc={solosImg}
      imgAlt={"SOLOS Image"}
      keyFeatures={[
        "Comprehensive Measurements for Both Lens with a Single Touch",
        "Single, Progressive, Multifocal Lens Mapping",
        "Automatic Marking",
        "UV-A, Blue Light and Visible Light Transmittance Measurements",
        "Green E-Line Light Source",
        "Wireless Data Transfer to CV-5000, Chronos, and Filling System/EMR",
        "Automatic Lens Type Detection",
        "Lens Mapping",
        "UV-A, Blue Light, and Visible Light Transmittance Measurements",
      ]}
      pdfSrc="/pdfs/products/examination/lensmeter/SOLOS_Brochure.pdf"
    />
  );
}
