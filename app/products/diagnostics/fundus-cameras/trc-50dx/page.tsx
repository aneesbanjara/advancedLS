import trc50dxImg from "@/public/images/diagnostics/fundusCameras/trc-50dx.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

export default function TRC50DX() {
  return (
    <ProductDetails
      productName="TRC-50DX"
      para="The Topcon TRC-50DX, as well as the TRC-50DX(Type IA), improves on the unsurpassed quality of Topcon retinal cameras, incorporating new functions that enhance their versatility and operational ease."
      imgSrc={trc50dxImg}
      imgAlt={"TRC-50DX Image"}
      keyFeatures={[
        "Small pupil mode and aperture adjustment.",
        "Easy-to-use touch-screen control panel.",
        "Comfortable backlit panel for use in darkened environments.",
        "Color fundus, red-free, and fluorescein (ICG and autofluorescence filters are available).",
        "Can support a variety of photo devices, from film to high-resolution digital cameras.",
        "50°, 35°, and 20°angles of coverage.",
        "21 levels of flash intensity.",
      ]}
      pdfSrc="/pdfs/products/diagnostics/fundusCameras/TRC-50DX__Brochure.pdf"
    />
  );
}
