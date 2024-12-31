import sl2gImg from "@/public/images/diagnostics/slitLamps/sl-2g.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

export default function SL2G() {
  return (
    <ProductDetails
      productName="SL-2G"
      para="Basic, economical and environmentally friendly, the SL-2G meets all the needs for a clinical exam."
      imgSrc={sl2gImg}
      imgAlt={"SL-2G Image"}
      keyFeatures={[
        "Optical Quality: With more than 85 years of experience in lens manufacturing, Topcon produces all the optics to outﬁt its instruments, providing excellent lens quality and a bright, clear view.",
        "Ergonomics: Topcon Slit Lamps are ergonomically designed for comfortable use. The SL “D” Series employs converging binocular tubes with a comfortable parallel magniﬁcation.",
        "Versatility: Variety of models in different conﬁgurations from basic clinical observation to sophisticated image capture. The Topcon series will satisfy any need and budget.",
        "LED Illumination: As a leader in Ophthalmic Instrumentation, Topcon is incorporating LED as the main illumination in some models of its slit lamps. The lifetime of the LED is substantially longer than conventional halogen bulbs. LEDs don’t need frequent replacement making Topcon slit lamps environmentally sound.",
      ]}
      pdfSrc="/pdfs/products/diagnostics/slitLamp/SLD-series_Brochure.pdf"
    />
  );
}
