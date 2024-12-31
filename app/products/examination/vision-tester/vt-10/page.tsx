import vt10Img from "@/public/images/examination/visionTester/vt-10.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

export default function VT10() {
  return (
    <ProductDetails
      productName="VT-10"
      para="The VT-10 Vision Tester provides exceptional quality and value, featuring quick, easy and accurate refractions. Notable features include synchronized cross cylinders, an extended measurement range, and multi-coated lenses."
      imgSrc={vt10Img}
      imgAlt={"VT-10 Image"}
      keyFeatures={[
        "Wide testing range",
        "Synchronized cross cylinders",
        "Quick, easy and accurate refractions",
        "Precision engineering for superior performance",
        "Multi-coated lenses",
        "Extended measurement range",
        "Available in silver and black",
      ]}
      pdfSrc="/pdfs/products/examination/visionTester/VT10_brochure.pdf"
    />
  );
}
