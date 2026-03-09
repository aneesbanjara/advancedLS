import Margin from "@/components/margin/Margin";
import SubHeader from "@/components/subheader/SubHeader";
import maestro2Img from "@/public/images/diagnostics/OCT/maestro2.png";
import TritonImg from "@/public/images/diagnostics/OCT/Triton-Pro.png";
import Product from "@/components/product/Product";

export default function OCT() {
  return (
    <section>
      <SubHeader>Optical Coherence Tomography (OCT)</SubHeader>
      <Margin>
        <div className="flex flex-row flex-wrap gap-8 justify-center sm:justify-between items-start">
          <Product
            linkTo="/products/diagnostics/oct/maestro2"
            imgSrc={maestro2Img}
            imgAlt="Maestro2 image"
            productName="Maestro 2"
            para=" Introducing automated OCT, true color fundus photography, and
              automated OCT Angiography in one instrument. With the touch of a
              button, OCTA provides instantaneous vascular structure information
              – from our world-renowned, multi-modal OCT solution."
          />
          <Product
            linkTo="/products/diagnostics/oct/triton"
            imgSrc={TritonImg}
            imgAlt="Triton image"
            productName="DRI OCT Triton"
            para="TOPCONs SS OCT Angio combines OCT Angiography with Swept Source OCT technology and a long 1050nm wavelength. OCTARA, a proprietary image processing algorithm, provides highly sensitive angiographic detection, allowing for visualisation of vascular structures."
          />
        </div>
      </Margin>
    </section>
  );
}
