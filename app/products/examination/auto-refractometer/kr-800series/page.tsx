import kr800seriesImg from "@/public/images/examination/autoRefractometer/kr-800series.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

export default function KR800series() {
  return (
    <ProductDetails
      productName="KR-800 series"
      para="The Topcon KR-800 Series has a full line up of Auto kerato-refractometers each with unique functions:
KR-800PA/KR-800A/KR-800S/KR-800"
      imgSrc={kr800seriesImg}
      imgAlt={"KR-800 series Image"}
      keyFeatures={[
        "KR-800PA: Corneal Mapping, 3D Auto alignment, Corneal Curvature Measurement, Refractive Power Measurement, Easy LAN network setup",
        "KR-800A: 3D Auto alignment, Corneal Curvature Measurement, Refractive Power Measurement, Easy LAN network setup",
        "KR-800S: Subjective test, Corneal Curvature Measurement, Refractive Power Measurement, Easy LAN network setup",
        "KR-800: Corneal Curvature Measurement, Refractive Power Measurement, Easy LAN network setup",
      ]}
      pdfSrc="/pdfs/products/examination/autoRefractometer/kr-800series/KR-800A-Brochure.pdf"
    />
  );
}
