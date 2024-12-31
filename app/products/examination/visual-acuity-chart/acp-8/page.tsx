import acp8Img from "@/public/images/examination/visualAcuityChart/acp-8.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

export default function ACP8() {
  return (
    <ProductDetails
      productName="ACP-8"
      para="The TOPCON ACP-8 Auto Chart Projector provides improved sharp and clear image projection and fast chart rotation. A cordless remote controller allows instant projection of the 30 test charts at a rate of 0.03 seconds per frame."
      imgSrc={acp8Img}
      imgAlt={"ACP-8 Image"}
      keyFeatures={[
        "Wide projection size (330 x 270)",
        "Variable focus lens",
        "Programmable wireless remote",
        "Fully programmable chart selections",
        "Fastest chart rotation on the market",
        "Completly interfaced with CV-5000",
        "30 AO compatible test charts including ETDRS",
      ]}
      pdfSrc="/pdfs/products/examination/visualAcuityChart/ACP8_brochure.pdf"
    />
  );
}
