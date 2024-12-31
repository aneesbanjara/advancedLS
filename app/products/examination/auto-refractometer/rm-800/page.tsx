import rm800Img from "@/public/images/examination/autoRefractometer/rm-800.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

export default function RM800() {
  return (
    <ProductDetails
      productName="RM-800"
      para="The RM-800 features a bright, 8.5 inch color touchscreen panel to control the main functions and an improved joystick operation due to a 23% reduction in weight from the previous models. Topcon systems have been renowned for their accuracy due to the proven Rotary Prism Technology. RM-800 features this technology as well, so you can take confidence that accurate and stable refractive measurements will be the norm."
      imgSrc={rm800Img}
      imgAlt={"RM-800 Image"}
      keyFeatures={[
        "Topcon’s Rotary Prism technology for highly accurate refractive measurements",
        "Improved joystick operation due to a 23% lighter weight design",
        "Ease of use and operability",
        "Compact, modern and ergonomic design",
        "Bright, new 8.5 color touch-screen display",
      ]}
      pdfSrc="/pdfs/products/examination/autoRefractometer/RM800-Brochure.pdf"
    />
  );
}
