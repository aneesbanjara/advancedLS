import sld701Img from "@/public/images/diagnostics/slitLamps/sl-d701.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

export default function SLD701() {
  return (
    <ProductDetails
      productName="SL-D701"
      para="A complete Slit Lamp with expanded magnification range, digital ready, LED illumination and infra red capability."
      imgSrc={sld701Img}
      imgAlt={"SL-D701 Image"}
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
