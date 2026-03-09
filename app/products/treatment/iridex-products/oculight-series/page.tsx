import OcuLight_SeriesImg from "@/public/images/treatment/iridex-products/oculight-series/oculight-series.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

export default function OcuLight_Series() {
  return (
    <ProductDetails
      productName="OcuLight® Series"
      para="Durable and reliable with advanced thermal management, the OcuLight® Series features an intuitive user interface and portable design for easy use across clinics and offices."
      imgSrc={OcuLight_SeriesImg}
      imgAlt={"OcuLight® Series Image"}
      keyFeatures={[
        "Designed for durability, with a thermal management system to increase laser conversion efficiency and reliability",
        "Enhanced user interface with conveniently located, easily understood controls",
        "Allows easy transport between rooms and offices",
      ]}
      pdfSrc=""
    />
  );
}
