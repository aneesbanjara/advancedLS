import ca800Img from "@/public/images/examination/topographer/ca-800.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

export default function CA800() {
  return (
    <ProductDetails
      productName="CA-800"
      para="The Topcon CA-800 Corneal Analyzer is an easy-to-use, comprehensive corneal topography solution allowing for the complete evaluation of the anterior corneal surface. In addition to elevation mapping of the corneal surface, the CA-800 provides robust software features, allowing for a total analysis of the patients corneal surface."
      imgSrc={ca800Img}
      imgAlt={"CA-800 Image"}
      keyFeatures={[
        "On board PC allows for complete standalone operation",
        "Meibomian gland imaging, pupillometry and fluorescein imaging allows the user to collect more data than a typical topographer",
        "Intuitive Touchscreen operation",
        "Flexible output of reports direct to printer or network shared folder via LAN",
        "Fast, Easy acquisition",
        "Differential maps to track progress",
      ]}
      pdfSrc="/pdfs/products/examination/topographer/CA-800-Brochure.pdf"
    />
  );
}
