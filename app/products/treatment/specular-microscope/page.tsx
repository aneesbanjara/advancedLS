import Margin from "@/components/margin/Margin";
import SubHeader from "@/components/subheader/SubHeader";
import sp1pImg from "@/public/images/treatment/specularMicroscope/sp-1p.png";
import Product from "@/components/product/Product";

export default function SpecularMicroscope() {
  return (
    <section>
      <SubHeader>Specular Microscope</SubHeader>
      <Margin>
        <div className="flex flex-row gap-8 justify-between items-start">
          <Product
            linkTo="/products/treatment/specular-microscope/sp-1p"
            imgSrc={sp1pImg}
            imgAlt="SP-1P image"
            productName="SP-1P"
            para="The Topcon Specular Microscope model SP-1P introduces a fully automatic capture procedure together with a modern, ergonomic design that simplifies its use and increases its efficiency."
          />
        </div>
      </Margin>
    </section>
  );
}
