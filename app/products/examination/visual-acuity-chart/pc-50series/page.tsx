import pc50seriesImg from "@/public/images/examination/visualAcuityChart/pc-50series.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

export default function PC50series() {
  return (
    <ProductDetails
      productName="PC-50 series"
      para="The PC-50 series is a high-resolution LCD visual acuity chart that is optimized for the CV-5000PRO. It features a comprehensive range of optotypes and tests. Videos and photos can also be added and viewed on the system."
      imgSrc={pc50seriesImg}
      imgAlt={"PC-50 series Image"}
      keyFeatures={[
        "LCD chart",
        "Comprehensive range of optotypes",
        "Variety of charts, images with videos",
        "PC50: Stand Alone",
        "PC50S: 3D Contents",
        "PC50SB: Circular Polarization, 3D Contents, Open Binocular Vision Test",
      ]}
      pdfSrc="/pdfs/products/examination/visualAcuityChart/PC-50SB-Brochure.pdf"
    />
  );
}
