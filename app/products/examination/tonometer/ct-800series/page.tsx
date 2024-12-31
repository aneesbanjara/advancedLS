import ct800seriesImg from "@/public/images/examination/tonometer/ct-800series.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

export default function CT800series() {
  return (
    <ProductDetails
      productName="CT-800/CT-800A"
      para="CT-800A offers enhanced efficiency and easier operation to improve day to day examination workflow in a practice."
      imgSrc={ct800seriesImg}
      imgAlt={"CT-800/CT-800A Image"}
      keyFeatures={[
        "3D Auto Alignment function allows quicker and easier measurement(CT-800A only)",
        "Smooth operation",
        "8.5 inch wide touchscreen control panel",
        "Soft air puff",
        "Higher measurement success rate for eyes with IOL, in the IOL measurement mode",
        "Compensated IOP values with central corneal thickness value",
        "Compact designed body",
        "Easy set-up with a LAN network",
      ]}
      pdfSrc="/pdfs/products/examination/tonometer/CT800A_Brochure.pdf"
    />
  );
}
