import IQ532Img from "@/public/images/treatment/iridex-products/IQ532/IQ532.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

export default function IQ532() {
  return (
    <ProductDetails
      productName="IQ 532® Laser System"
      para="A dual-port green laser for comprehensive ophthalmology, offering MicroPulse® tissue-sparing therapy and high power for versatile glaucoma and retinal treatments. Designed for efficiency, flexibility, and repeatable laser sessions."
      imgSrc={IQ532Img}
      imgAlt={"IQ 532® Laser System Image"}
      keyFeatures={[
        "High power for greater range of therapy alternatives",
        "Dual port for efficient setup of alternate delivery devices",
        "Repeatable laser sessions for retinal diseases with optional MicroPulse module",
      ]}
      pdfSrc=""
    />
  );
}
