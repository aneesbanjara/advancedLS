import Margin from "@/components/margin/Margin";
import SubHeader from "@/components/subheader/SubHeader";
import oms800seriesImg from "@/public/images/treatment/operationMicroscopes/oms-800series.png";
import oms90Img from "@/public/images/treatment/operationMicroscopes/oms-90.png";
import Product from "@/components/product/Product";

export default function OperationMicroscopes() {
  return (
    <section>
      <SubHeader>Operation Microscope</SubHeader>
      <Margin>
        <div className="flex flex-row gap-8 justify-between items-start flex-wrap">
          <Product
            linkTo="/products/treatment/operation-microscopes/oms-800series"
            imgSrc={oms800seriesImg}
            imgAlt="OMS-800 series image"
            productName="OMS-800 series"
            para="Topcon’s pursuit for perfection is reflected in its continuing development of the OMS-800 range of operating microscopes, adapting them to meet the needs of modern ophthalmic procedures while maintaining the high quality and durability that made Topcon the World Leader in Ophthalmic Equipment."
          />
          <Product
            linkTo="/products/treatment/operation-microscopes/oms-90"
            imgSrc={oms90Img}
            imgAlt="OMS-90 image"
            productName="OMS-90"
            para="It features a water-repellent coated objective lens, coaxial illumination, a PD adjustment knob, and five-step magnification."
          />
        </div>
      </Margin>
    </section>
  );
}
