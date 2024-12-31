import rm1Img from "@/public/images//examination/autoRefractometer/rm-1.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

export default function RM1() {
  return (
    <ProductDetails
      productName="RM-1"
      para="The Topcon RM-1 is an Auto Refractometer features fully automated operation with an easy-to-use color touch screen, a 360 degree rotatable monitor, and a flexible layout and space saiving design."
      imgSrc={rm1Img}
      imgAlt={"RM-1 Image"}
      keyFeatures={[
        "Simple and Quick Operation",
        "Easy-to-Use Color touchscreen Control Panel",
        "Flexible and Space Saving Layout",
        "Compact and Ergonomic Design",
        "Reliable Measurement",
      ]}
      pdfSrc="/pdfs/products/examination/autoRefractometer/RM1_Brochure.pdf"
    />
  );
}
