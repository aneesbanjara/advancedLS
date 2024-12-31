import Margin from "@/components/margin/Margin";
import SubHeader from "@/components/subheader/SubHeader";
import pascalSynthesisImg from "@/public/images/treatment/photocoagulator/pascalSynthesis.png";
import hud1Img from "@/public/images/treatment/photocoagulator/hud-1.png";
import endpointManagementImg from "@/public/images/treatment/photocoagulator/endpoint-management.png";
import patternScanningLaserTrabeculoplastyImg from "@/public/images/treatment/photocoagulator/pattern-scanning-laser-trabeculoplasty.png";
import Product from "@/components/product/Product";

export default function Photocoagulator() {
  return (
    <section>
      <SubHeader>Photocoagulator</SubHeader>
      <Margin>
        <div className="flex flex-row gap-8 justify-between items-start flex-wrap">
          <Product
            linkTo="/products/treatment/photocoagulator/pascal-synthesis"
            imgSrc={pascalSynthesisImg}
            imgAlt="PASCAL Synthesis Series image"
            productName="PASCAL Synthesis Series"
            para="PASCAL® scanning laser technology revolutionized laser therapy. The PASCAL® Synthesis™ with new patterns, an improved interface, a 3D controller and a versatile ergonomic table, once again redefines pattern laser therapy."
          />
          <Product
            linkTo="/products/treatment/photocoagulator/hud-1"
            imgSrc={hud1Img}
            imgAlt="HUD-1 image"
            productName="HUD-1"
            para="The HUD-1 lets you compare the target area of treatment with a side-by-side view of a reference image previously obtained from the patient’s fundus for location and assessment."
          />
          <Product
            linkTo="/products/treatment/photocoagulator/endpoint-management"
            imgSrc={endpointManagementImg}
            imgAlt="Endpoint Management image"
            productName="Endpoint Management"
            para=""
          />
          <Product
            linkTo="/products/treatment/photocoagulator/pattern-scanning-laser-trabeculoplasty"
            imgSrc={patternScanningLaserTrabeculoplastyImg}
            imgAlt="Pattern Scanning Laser Trabeculoplasty image"
            productName="Pattern Scanning Laser Trabeculoplasty"
            para=""
          />
        </div>
      </Margin>
    </section>
  );
}
