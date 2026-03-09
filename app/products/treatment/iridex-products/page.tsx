import Margin from "@/components/margin/Margin";
import SubHeader from "@/components/subheader/SubHeader";
import iridexImg from "@/public/images/treatment/iridex-products/Iridex_Corporate_Logo_Horizontal.png";
import Product from "@/components/product/Product";

export default function OperationMicroscopes() {
  return (
    <section>
      <SubHeader>Iridex</SubHeader>
      <Margin>
        <div className="flex flex-row gap-8 justify-between items-start flex-wrap">
          <Product
            linkTo="/products/treatment/iridex-products/iridex-PASCAL"
            imgSrc={iridexImg}
            imgAlt="Iridex image"
            productName="Iridex"
            para="A worldwide leader in developing, manufacturing, and marketing innovative and versatile laser-based medical systems, delivery devices and consumable instrumentation"
          />
        </div>
      </Margin>
    </section>
  );
}
