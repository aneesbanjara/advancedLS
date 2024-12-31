import harmonyImg from "@/public/images/data-management/harmony.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

export default function PatternScanningLaserTrabeculoplasty() {
  return (
    <ProductDetails
      productName="Harmony"
      para="Connect all of your diagnostic instruments, regardless of manufacturer, in one secure, web-based platform."
      imgSrc={harmonyImg}
      imgAlt={"Harmony Image"}
      keyFeatures={[
        "unlimited Device Connections: Topcon Harmony connects with hundreds of devices, from all manufacturers – DICOM or not.",
        "Instrument Experience: Direct clinical data display combined with Topcon’s extensive medical instrument experience.",
        "Time Saving: No need to insert patient information at the device.",
        "Easy to use: Follows user-interface guidelines established by top software companies",
        "Local or Cloud: On-premise or in the cloud data storage",
        "Secure Medical Grade Storage System: A secure Medical Grade Storage system where all data is encrypted and backed-up",
        "Comprehensive Application: Part of comprehensive software suite of applications that share common user-interface",
      ]}
      pdfSrc="/pdfs/products/data-management/Harmony_Brochure.pdf"
    />
  );
}
