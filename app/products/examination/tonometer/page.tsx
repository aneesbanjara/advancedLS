import Margin from "@/components/margin/Margin";
import SubHeader from "@/components/subheader/SubHeader";
import ct800seriesImg from "@/public/images/examination/tonometer/ct-800series.png";
import ct11pImg from "@/public/images/examination/tonometer/ct_1_1p.png";
import trk2pImg from "@/public/images/examination/tonometer/trk-2p.png";
import Product from "@/components/product/Product";

export default function Tonometer() {
  return (
    <section>
      <SubHeader>Tonometer</SubHeader>
      <Margin>
        <div className="flex flex-row gap-8 justify-between items-start flex-wrap">
          <Product
            linkTo="/products/examination/tonometer/ct-800series"
            imgSrc={ct800seriesImg}
            imgAlt="CT-800/CT-800A image"
            productName="CT-800/CT-800A"
            para="CT-800A offers enhanced efficiency and easier operation to improve day to day examination workflow in a practice."
          />
          <Product
            linkTo="/products/examination/tonometer/trk-2p"
            imgSrc={trk2pImg}
            imgAlt="TRK-2P image"
            productName="TRK-2P"
            para="The TRK-2P features a complete Auto-Alignment system, combined with Auto-Refractometer, Keratometer, Non-Contact Tonometer and Pachymeter in one instrument."
          />
          <Product
            linkTo="/products/examination/tonometer/ct-1-1p"
            imgSrc={ct11pImg}
            imgAlt="CT-1/CT-1P image"
            productName="CT-1/CT-1P"
            para="The CT-1/CT-1P provides an innovative operation experience and eliminates the need for a control lever. You will save space in your examination room. The air-puff mechanism ensures a soft air-puff and reduces the maintenance and cleaning."
          />
        </div>
      </Margin>
    </section>
  );
}
