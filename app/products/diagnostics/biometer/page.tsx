import Margin from "@/components/margin/Margin";
import SubHeader from "@/components/subheader/SubHeader";
import aladdinImg from "@/public/images/diagnostics/biometer/aladdin.png";
import Product from "@/components/product/Product";

export default function Biometer() {
  return (
    <section>
      <SubHeader>Biometer</SubHeader>
      <Margin>
        <div className="flex flex-row gap-8 justify-between items-start">
          <Product
            linkTo="/products/diagnostics/biometer/aladdin"
            imgSrc={aladdinImg}
            imgAlt="ALADDIN image"
            productName="ALADDIN"
            para="unique optical biometry & topography system"
          />
        </div>
      </Margin>
    </section>
  );
}
