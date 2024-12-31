import DC4Img from "@/public/images/diagnostics/slitLamps/dc-4.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

export default function DC4() {
  return (
    <ProductDetails
      productName="DC-4"
      para="The DC-4 Digital Camera can be easily mounted on any of the “D” series of Topcon Slit Lamps converting them into an ophthalmic imaging instrument.
The DC-4 captures color and monochrome images of the eye. When used in conjunction with the BG-5 background illuminator, the Infrared capabilities allow viewing and documenting meibomian glands."
      imgSrc={DC4Img}
      imgAlt={"DC4 Image"}
      keyFeatures={[
        "Smart Capture Function: ﬁve images captured in less than a second.",
        "Live View: see exactly what you are capturing on screen.",
        "Still Image with Auto Exposure (AE) Function: always the correct color and brightness balance",
        "Video Capability: video clips are easily obtained and displayed",
        "Meibomian Gland Observation: view and document meibomian glands condition with infrared viewing",
      ]}
      pdfSrc="/pdfs/products/diagnostics/slitLamp/SLD-series_Brochure.pdf"
    />
  );
}
