import sld2Img from "@/public/images/diagnostics/slitLamps/sl-d2.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

export default function SLD2() {
  return (
    <ProductDetails
      productName="SL-D2"
      para="A basic slit lamp with digital capability that doesn’t compromise on features and optical quality."
      imgSrc={sld2Img}
      imgAlt={"SL-D2 Image"}
      keyFeatures={[
        "Optical Quality: With more than 85 years of experience in lens manufacturing, Topcon produces all the optics to outﬁt its instruments, providing excellent lens quality and a bright, clear view.",
        "Ergonomics: Topcon Slit Lamps are ergonomically designed for comfortable use. The SL “D” Series employs converging binocular tubes with a comfortable parallel magniﬁcation.",
        "Versatility: Variety of models in different conﬁgurations from basic clinical observation to sophisticated image capture. The Topcon series will satisfy any need and budget.",
      ]}
      pdfSrc="/pdfs/products/diagnostics/slitLamp/SLD-series_Brochure.pdf"
    />
  );
}
