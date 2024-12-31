import kr1Img from "@/public/images/examination/autoRefractometer/kr-1.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

export default function KR1() {
  return (
    <ProductDetails
      productName="KR-1"
      para="The Topcon KR-1 is a modern, automated, and robotic easy-to-use keratometer-refractometer controlled by a color touch screen with Topcon’s Rotary Prism technology."
      imgSrc={kr1Img}
      imgAlt={"KR-1 Image"}
      keyFeatures={[
        "Fully Automated Kerato-Refractometer",
        "Rotary Prism Technology",
        "Full 360° rotating monitor allows the operator to optimize distance from the patient",
      ]}
      pdfSrc="/pdfs/products/examination/autoRefractometer/KR-1_Brochure.pdf"
    />
  );
}
