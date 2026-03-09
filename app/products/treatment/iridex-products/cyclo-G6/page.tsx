import cycloG6Img from "@/public/images/treatment/iridex-products/cyclo-G6/cyclo-G6.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

export default function CYCLO_G6() {
  return (
    <ProductDetails
      productName="Cyclo G6® Glaucoma Laser System"
      para="A trusted solution for glaucoma care, offering MicroPulse® and Continuous-Wave CPC therapies. Used in top U.S. hospitals and available in 80+ countries, it’s suitable for both office and OR settings."
      imgSrc={cycloG6Img}
      imgAlt={"Cyclo G6® Glaucoma Laser System Image"}
      keyFeatures={[
        "For MicroPulse transscleral laser therapy and Continuous-Wave Cyclophotocoagulation",
        "Can be used in the office and operating room",
        "Used in 38 of the 39 best U.S. hospitals",
        "Available in over 80 countries",
      ]}
      pdfSrc=""
    />
  );
}
