import myahImg from "@/public/images/diagnostics/axialLength/myah.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

export default function MYAH() {
  return (
    <ProductDetails
      productName="MYAH"
      para="MYAH offers all the technologies required to support myopia management: optical biometry, corneal topography, and pupillometry — it is a one-time investment. In addition, MYAH is an all-in-one device that offers an evolving platform which provides the tools to add or grow Dry Eye Management."
      imgSrc={myahImg}
      imgAlt={"MYAH Image"}
      keyFeatures={[
        "Growth Curves for Monitoring Eye Elongation and Comparing Measurements with Normative Dataset",
        "Corneal Topography including Keratoconus Screening and Pupillometry",
        "Axial Length Measurement by Optical Low Coherence Interferometry",
        "Comprehensive Suite of Dry Eye Assessment Tools",
        "Compact, All-in-One and Space-Saving Device",
      ]}
      pdfSrc="/pdfs/products/diagnostics/axialLength/MYAH_Brochure.pdf"
    />
  );
}
