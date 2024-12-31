import IMAGEnetImg from "@/public/images/software/IMAGEnet-6.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

export default function PatternScanningLaserTrabeculoplasty() {
  return (
    <ProductDetails
      productName="IMAGEnet 6"
      para="Topcon’s IMAGEnet 6 provides clinicians access to detailed patient exam Information that gives them the ability to make more informed clinical decisions."
      imgSrc={IMAGEnetImg}
      imgAlt={"IMAGEnet 6 Image"}
      keyFeatures={[
        "Web-based application",
        "Multimodal dispaly",
        "Integrates with any Topcon device",
      ]}
      pdfSrc="/pdfs/products/software/Topcon-Healthcare-Product-Portfolio-for-APAC.pdf"
    />
  );
}
