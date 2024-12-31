import endpointManagementImg from "@/public/images/treatment/photocoagulator/endpoint-management.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

export default function EndpointManagement() {
  return (
    <ProductDetails
      productName="Endpoint Management"
      para="Endpoint Management (EpM)* is a pattern sub-threshold retinal laser therapy that uses a unique
algorithm to control laser power and pulse duration, optimizing the therapeutic effect of the laser at sub-visible levels."
      imgSrc={endpointManagementImg}
      imgAlt={"Endpoint Management Image"}
      keyFeatures={[
        "Mathematically precise with Arrhenius Integral",
        "Laser power and duration are simultaneously modulated with liner control",
        "Landmark™ Patterns for tracking the sub-visible areas",
        "Easy operation with the laser spots indication on display",
      ]}
      pdfSrc=""
    />
  );
}
