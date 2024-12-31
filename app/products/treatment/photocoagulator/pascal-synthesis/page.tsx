import pascalSynthesisSeriesImg from "@/public/images/treatment/photocoagulator/pascalSynthesis.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

export default function PascalSynthesis() {
  return (
    <ProductDetails
      productName="PASCAL Synthesis Series"
      para="PASCAL represents a quantum leap in ophthalmic treatment technology and is committed to helping you deliver effective results for your patients. Demanding ophthalmologists choose PASCAL because of its speed and ease of use."
      imgSrc={pascalSynthesisSeriesImg}
      imgAlt={"PASCAL Synthesis Series Image"}
      keyFeatures={[
        "The PASCAL technology was developed in partnership with Stanford University",
        "Exclusive Precision Spots with Multi-Fiber Beam Technology",
        "Reduced power and short pulses produce less discomfort during treatment",
        "Rapid pattern scanning laser delivery",
        "Precise alignment and continuous laser pulse directed by high speed galvanometers",
        "Ergonomic design. Enhanced features simplify its use",
        "Fine view by enhanced laser delivery slit lamp",
        "Endpoint Management for sub-threshold treatment",
        "Pattern Scanning Laser Trabeculoplasty (PSLT) for IOP reduction",
      ]}
      pdfSrc="/pdfs/products/treatment/\photocoagulator/PASCAL-Brochure.pdf"
    />
  );
}
