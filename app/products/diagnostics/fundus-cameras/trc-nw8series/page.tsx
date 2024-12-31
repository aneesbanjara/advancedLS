import trcnw8seriesImg from "@/public/images/diagnostics/fundusCameras/trc-nw8series.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

export default function TRCNW8series() {
  return (
    <ProductDetails
      productName="TRC-NW8 Series"
      para="With the TRC-NW8 series, it is possible to capture not only Color, Red-free but also Fluorescein angiography to answer your needs."
      imgSrc={trcnw8seriesImg}
      imgAlt={"TRC-NW8 Series Image"}
      keyFeatures={[
        "Multi-Functional Retinal Camera",
        "Lower Flash Intensity",
        "Easy to use",
        "Continuous Shooting Function",
        "Auto Focus & Auto Shoot & Auto Small Pupil Detection",
      ]}
      pdfSrc="/pdfs/products/diagnostics/fundusCameras/TRCNW8series-brochure.pdf"
    />
  );
}
