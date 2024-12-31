import TritonImg from "@/public/images/diagnostics/OCT/triton.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

export default function Triton() {
  return (
    <ProductDetails
      productName="Triton"
      para="The DRI OCT Triton combines the world’s first swept-source OCT technology with multimodal fundus imaging."
      imgSrc={TritonImg}
      imgAlt={"Triton Image"}
      keyFeatures={[
        "1,050nm wavelength – invisible scan line",
        "100,000 A-scan/sec scanning speed",
        "Multimodal fundus imaging",
        "Enface OCT",
        "Hood report for Glaucoma",
        "Anterior segment imaging",
      ]}
      pdfSrc="/pdfs/products/diagnostics/oct/OCT_Triton_Brochure_EN_2210.pdf"
    />
  );
}
