import aladdinImg from "@/public/images/diagnostics/biometer/aladdin.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

export default function Aladdin() {
  return (
    <ProductDetails
      productName="ALADDIN"
      para="The Aladdin is an easy-to-use, combination optical biometer and a full corneal topographer.
9-in-1 features include optical coherence biometry, Placido topography, wavefront analysis of the cornea, IOL calculation suite, pupillometry, DICOM connectivity, and the NEW RX/AL Trends Module."
      imgSrc={aladdinImg}
      imgAlt={"ALLADIN Image"}
      keyFeatures={[
        "Keratometry, Topography",
        "Keratoconus Screening",
        "Aberrometry Analysis (Zernike)",
        "White to White Measurement",
        "Posterior & Anterior Interferometry",
        "Pupillometry",
        "IOL & Toric IOL Calculation",
        "Comprehensive Reports",
        "RX/AL Trends Module",
      ]}
      pdfSrc="/pdfs/products/diagnostics/biometer/Aladdin-Brochure.pdf"
    />
  );
}
