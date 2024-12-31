import trcnw400Img from "@/public/images/diagnostics/fundusCameras/trc-nw400.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

export default function TRCNW400() {
  return (
    <ProductDetails
      productName="TRC-NW400"
      para="The TRC-NW400 is an automated and robotic fundus camera that performs true color photography. By incorporating the 360° rotating touch panel monitor, operator is able to acquire the image rapidly and easily by simple finger touch. It makes your workflow efficient."
      imgSrc={trcnw400Img}
      imgAlt={"TRC-NW400 Image"}
      keyFeatures={[
        "Robotic fundus camera with rapid and simple capture by single touch",
        "Clear color fundus image",
        "Small pupil photography with φ3.3mm or more",
        "Quick stereo photography",
        "Full 360° rotating monitor allows operator to optimize distance from patient",
        "Connect with your EMR to create patient worklists conveniently in one centralized place",
      ]}
      pdfSrc="/pdfs/products/diagnostics/fundusCameras/TRC-NW400_Brochure.pdf"
    />
  );
}
