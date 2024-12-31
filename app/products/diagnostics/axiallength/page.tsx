import Margin from "@/components/margin/Margin";
import SubHeader from "@/components/subheader/SubHeader";
import myahImg from "@/public/images/diagnostics/axialLength/myah.png";
import Product from "@/components/product/Product";

export default function AxialLength() {
  return (
    <section>
      <SubHeader>Axial Length</SubHeader>
      <Margin>
        <div className="flex flex-row gap-8 justify-between items-start">
          <Product
            linkTo="/products/diagnostics/axiallength/myah"
            imgSrc={myahImg}
            imgAlt="MYAH image"
            productName="MYAH"
            para="Build, Manage, and Grow Your Myopia & Dry Eye Practice"
          />
        </div>
      </Margin>
    </section>
  );
}
