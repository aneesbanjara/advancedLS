import Margin from "@/components/margin/Margin";
import SubHeader from "@/components/subheader/SubHeader";
import acp8Img from "@/public/images/examination/visualAcuityChart/acp-8.png";
import mc55sImg from "@/public/images/examination/visualAcuityChart/mc-5-5s.png";
import pc50seriesImg from "@/public/images/examination/visualAcuityChart/pc-50series.png";
import Product from "@/components/product/Product";

export default function VisualAcuityChart() {
  return (
    <section>
      <SubHeader>Visual Acuity Chart</SubHeader>
      <Margin>
        <div className="flex flex-row gap-8 justify-between items-start flex-wrap">
          <Product
            linkTo="/products/examination/visual-acuity-chart/acp-8"
            imgSrc={acp8Img}
            imgAlt="ACP-8 image"
            productName="ACP-8"
            para="The ACP-8R Automatic Chart Projector features 30 AO compatible Snellen charts, the fastest chart rotation on the market and fully programmable chart selections."
          />
          <Product
            linkTo="/products/examination/visual-acuity-chart/mc-5-5s"
            imgSrc={mc55sImg}
            imgAlt="MC-5/MC-5S image"
            productName="MC-5/MC-5S"
            para="The MC-5/MC-5S are the mirror-incorporated LCD visual acuity chart for offering the space-saving and sophisticated VA test."
          />
          <Product
            linkTo="/products/examination/visual-acuity-chart/pc-50series"
            imgSrc={pc50seriesImg}
            imgAlt="PC-50 series image"
            productName="PC-50 series"
            para="The PC-50 series is a high resolution LCD visual acuity chart that is optimized for the CV-5000PRO. It features a comprehensive range of optotypes and tests. Videos and photos can also be added and viewed on the system."
          />
        </div>
      </Margin>
    </section>
  );
}
