import Margin from "@/components/margin/Margin";
import SubHeader from "@/components/subheader/SubHeader";
import kr1Img from "@/public/images/examination/autoRefractometer/kr-1.png";
import kr800seriesImg from "@/public/images/examination/autoRefractometer/kr-800series.png";
import rm1Img from "@/public/images/examination/autoRefractometer/rm-1.png";
import rm800Img from "@/public/images/examination/autoRefractometer/rm-800.png";
import kr1wImg from "@/public/images/examination/autoRefractometer/kr-1w.png";
import trk2pImg from "@/public/images/examination/tonometer/trk-2p.png";
import Product from "@/components/product/Product";

export default function AutoRefractometer() {
  return (
    <section>
      <SubHeader>Auto Refractometer</SubHeader>
      <Margin>
        <div className="flex flex-row gap-8 justify-between items-start flex-wrap">
          <Product
            linkTo="/products/examination/auto-refractometer/kr-1"
            imgSrc={kr1Img}
            imgAlt="KR-1 image"
            productName="KR-1"
            para="The Topcon KR-1 is a modern, automated and robotic easy-to use keratometer-refractometer controlled by a color touch screen with Topcon’s Rotary Prism technology."
          />
          <Product
            linkTo="/products/examination/auto-refractometer/kr-800series"
            imgSrc={kr800seriesImg}
            imgAlt="KR-800 series image"
            productName="KR-800 series"
            para="The Topcon KR-800 Series has a full line up of Auto kerato-refractometers each with unique functions: KR-800PA/KR-800A/KR-800S/KR-800"
          />
          <Product
            linkTo="/products/examination/auto-refractometer/rm-1"
            imgSrc={rm1Img}
            imgAlt="RM-800 image"
            productName="RM-800"
            para="The RM-800 Auto Refractometer incorporates the very latest in design technology and ergonomics. The RM-800 features a bright, new 8.5 inch color touchscreen panel to control the main functions and an improved joystick operation due to a 23% reduction in weight from the previous models."
          />
          <Product
            linkTo="/products/examination/auto-refractometer/rm-800"
            imgSrc={rm800Img}
            imgAlt="KR-800 series image"
            productName="KR-800 series"
            para="The Topcon KR-800 Series has a full line up of Auto kerato-refractometers each with unique functions: KR-800PA/KR-800A/KR-800S/KR-800"
          />
          <Product
            linkTo="/products/examination/auto-refractometer/kr-1w"
            imgSrc={kr1wImg}
            imgAlt="KR-1W image"
            productName="KR-1W"
            para="The KR-1W combines aberrometry, topography, keratometry, pupillometry and auto refraction in one unit that is unparalleled in terms of functionality and reproducibility."
          />
          <Product
            linkTo="/products/examination/auto-refractometer/trk-2p"
            imgSrc={trk2pImg}
            imgAlt="TRK-2P image"
            productName="TRK-2P"
            para="The TRK-2P features a complete Auto-Alignment system, combined with Auto-Refractometer, Keratometer, Non-Contact Tonometer and Pachymeter in one instrument."
          />
        </div>
      </Margin>
    </section>
  );
}
