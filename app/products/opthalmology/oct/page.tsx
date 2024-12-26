import Margin from "@/components/margin/Margin";
import SubHeader from "@/components/subheader/SubHeader";
import maestro2Img from "@/public/images/opthalmology/OCT/maestro2.png";
import tritonImg from "@/public/images/opthalmology/OCT/triton.png";
import Product from "@/components/product/Product";

export default function OCT() {
  return (
    <section>
      <SubHeader>Optical Coherence Tomography (OCT)</SubHeader>
      <Margin>
        <div className="flex flex-row gap-8 justify-start items-start">
          <Product
            linkTo="/products/opthalmology/oct/maestro2"
            imgSrc={maestro2Img}
            imgAlt="Maestro2 image"
            productName="Maestro 2"
            para=" Introducing automated OCT, true color fundus photography, and
              automated OCT Angiography in one instrument. With the touch of a
              button, OCTA provides instantaneous vascular structure information
              – from our world-renowned, multi-modal OCT solution."
          />
          <Product
            linkTo="/products/opthalmology/oct/triton"
            imgSrc={tritonImg}
            imgAlt="Triton image"
            productName="Triton"
            para="The DRI OCT Triton is a multi-modal swept source OCT with a non-mydriatic color fundus camera."
          />
        </div>
      </Margin>
    </section>
  );
}
