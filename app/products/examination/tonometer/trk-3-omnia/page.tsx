import trk3omniaImg from "@/public/images/examination/tonometer/trk-3-omnia.png";
import ProductDetails from "@/components/productDetails/ProductDetails";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "TRK-3 OMNIA – Advanced Lifescience Technologies",
  description: "Optimise Clinical Workflow and Streamline Patient Care",
  alternates: {
    canonical:
      "https://www.altplnepal.com/products/examination/tonometer/trk-3-omnia/",
  },
};

export default function CT800series() {
  return (
    <ProductDetails
      productName="TRK-3 OMNIA"
      para="The TRK-3 OMNIA is a multifunctional 4-in-1 device that combines refractometer, keratometer, tonometer and pachymeter into one instrument. With the capability to capture all measurements in a single test is a bonus for your staff and patients and eliminates the need for patients to move between multiple devices."
      imgSrc={trk3omniaImg}
      imgAlt={"TRK-3 OMNIA Image"}
      keyFeatures={[
        "New SLD light source: The TRK-3 OMNIA uses a new measurement light source for the refractometer, providing consistent capture success than the conventional model. Clear refraction light can now be obtained even when there is turbidity in the intermediate transmitting body, improving the success rate of measurements*.",
        "Easy measurement: Simply touch the patient’s pupil on the control screen to begin automatic measurement. From alignment to mode switching, all measurements can be completed quickly with just one touch, making the process speedy and efficient.",
        "Space-saving, flexible layout: As a multifunctional device, It can replace two units (refractometer and tonometer) in the space of one. The control panel can rotate to suit the layout of the examination room, making it easy to install in a variety of configurations. It's designed to meet the needs of patients who require support for eye opening or positioning, allowing measurements to be taken from the side or rear of the patient.",
        "4-in-1 functions",
        "Fully Automated operation",
        "Wide Touch Screen",
        "Space-Saving",
        "Stable Measurement",
        "Patient Friendly",
        "Connectivity Options",
      ]}
      pdfSrc="/pdfs/products/examination/tonometer/TRK-3_OMNIA_Brochure.pdf"
    />
  );
}
