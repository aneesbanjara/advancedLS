import Margin from "@/components/margin/Margin";
import SubHeader from "@/components/subheader/SubHeader";
import chronosImg from "@/public/images/examination/refractionSystem/chronos.png";
import Product from "@/components/product/Product";

export default function RefractionSystem() {
  return (
    <section>
      <SubHeader>Refraction System</SubHeader>
      <Margin>
        <div className="flex flex-row gap-8 justify-between items-start flex-wrap">
          <Product
            linkTo="/products/examination/refraction-system/chronos"
            imgSrc={chronosImg}
            imgAlt="Chronos image"
            productName="Chronos"
            para="Chronos combines autorefraction, keratometry and subjective refraction in a single device that takes up less than 4 feet of space."
          />
        </div>
      </Margin>
    </section>
  );
}
