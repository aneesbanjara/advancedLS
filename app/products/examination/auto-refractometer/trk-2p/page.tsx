import trk2pImg from "@/public/images/examination/tonometer/trk-2p.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

export default function TRK2P() {
  return (
    <ProductDetails
      productName="TRK-2P"
      para="Introducing automated OCT, true color fundus photography, and
              automated OCT Angiography in one instrument. With the touch of a
              button, OCTA provides instantaneous vascular structure information
              – from our world-renowned, multi-modal OCT solution."
      imgSrc={trk2pImg}
      imgAlt={"TRK-2P Image"}
      keyFeatures={[
        "Refractometer, Keratometer, Non-Contact Tonometer, and Pachymeter in one single instrument",
        "Fully automated",
        "Rotating touch screen control panel",
        "compact and modern design",
      ]}
      pdfSrc="/pdfs/products/examination/tonometer/TRK-2P_Brochure.pdf"
    />
  );
}
