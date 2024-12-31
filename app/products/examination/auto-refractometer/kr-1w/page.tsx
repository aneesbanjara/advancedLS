import kr1wImg from "@/public/images/examination/autoRefractometer/kr-1w.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

export default function KR1W() {
  return (
    <ProductDetails
      productName="KR-1W"
      para="The KR-1W combines aberrometry, topography, keratometry, pupillometry and auto refraction in one unit that is unparalleled in terms of functionality and reproducibility."
      imgSrc={kr1wImg}
      imgAlt={"KR-1W Image"}
      keyFeatures={[
        "5 functions in 1 machine (Auto-Refraction, Keratometry, Aberrometry, Topography and Pupillometry)",
        "Multiple maps for overview analysis",
        "Decision support for cataract and refractive procedures",
        "Less stress with invisible light measurement at the topography",
        "Easier operation with R/L fully automated measurement and touch panel",
      ]}
      pdfSrc="/pdfs/products/examination/autoRefractometer/KR-1W_Brochure.pdf"
    />
  );
}
