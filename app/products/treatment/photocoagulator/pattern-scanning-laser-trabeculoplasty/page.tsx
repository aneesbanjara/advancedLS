import patternScanningLaserTrabeculoplastyImg from "@/public/images/treatment/photocoagulator/pattern-scanning-laser-trabeculoplasty.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

export default function PatternScanningLaserTrabeculoplasty() {
  return (
    <ProductDetails
      productName="Pattern Scanning Laser Trabeculoplasty"
      para="Pattern Scanning Laser Trabeculoplasty (PSLT)*1 is a tissue-sparing laser treatment for reducing intraocular pressure in open-angle glaucoma. PSLT provides a rapid, precise, and minimally traumatic computer-guided treatment that applies a sequence of patterns onto the trabecular meshwork."
      imgSrc={patternScanningLaserTrabeculoplastyImg}
      imgAlt={"Pattern Scanning Laser Trabeculoplasty Image"}
      keyFeatures={[
        "Computer guided treatment",
        "Sub-visible procedure",
        "Clinical studies show an IOP reduction of 24% in 6 months",
        "Ability to retreat if necessary",
      ]}
      pdfSrc="/pdfs/products/treatment/\photocoagulator/PASCAL-Brochure.pdf"
    />
  );
}
