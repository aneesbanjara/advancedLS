import cv5000seriesProImg from "@/public/images/examination/visionTester/cv-5000series-pro.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

export default function CV5000seriesPro() {
  return (
    <ProductDetails
      productName="CV-5000S/PRO"
      para="CV-5000PRO allows for comfort and efficiency in your refraction. Easy understandable layouts and various programs to support a smooth operation, offers free stress refractions for operators and patients. A quick operation with various controllers and wide connectivity with other devices supports efficient workflow. Comfort and Efficient operations create better communication with patients, for more satisfaction of refraction results."
      imgSrc={cv5000seriesProImg}
      imgAlt={"CV-5000S/PRO Image"}
      keyFeatures={[
        "Topcon’s Smart Cross System",
        "Color display for cross cylinder",
        "Compact, Open and Contemporary Design",
        "High Speed Lens Disc Rotation",
      ]}
      pdfSrc="/pdfs/products/examination/visionTester/CV5000_brochure.pdf"
    />
  );
}
