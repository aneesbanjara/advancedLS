import nw500Img from "@/public/images/diagnostics/fundusCameras/nw500.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

export default function NW500() {
  return (
    <ProductDetails
      productName="NW500"
      para="The NW500 acquires excellent quality retinal images with a pupil size 2.0mm or more*. The NW500 delivers exclusive slit scan technology that enables the capture of sharp-quality images in lighted settings, with more consistency, even when imaging small pupils. It also offers a wide variety of connectivity options such as DICOM, shared folder, and USB/ HDD."
      imgSrc={nw500Img}
      imgAlt={"NW500 Image"}
      keyFeatures={[
        "Small Pupil Photography with φ2.0mm or More*",
        "Enhanced Quality 12MP Image Sensor**",
        "Rapid and Fully-Automatic Capture by Single Touch",
        "Rotating Monitor Allows Operator to Optimise Distance From Patients",
        "Small Footprint, Space-Saving",
        "Multiple Connectivity Options (Direct DICOM, EZ Capture/ IMAGEnet 6, Shared Folder, Direct Storage)",
      ]}
      pdfSrc="/pdfs/products/diagnostics/fundusCameras/NW500_Brochure.pdf"
    />
  );
}
