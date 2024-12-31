import Margin from "@/components/margin/Margin";
import SubHeader from "@/components/subheader/SubHeader";
import kr1wImg from "@/public/images/diagnostics/wavefrontAnalyser/kr-1w.png";
import Product from "@/components/product/Product";

export default function WavefrontAnalyzer() {
  return (
    <section>
      <SubHeader>Wavefront Analyzer</SubHeader>
      <Margin>
        <div className="flex flex-row gap-8 justify-between items-start">
          <Product
            linkTo="/products/diagnostics/wavefront-analyzer/kr-1w"
            imgSrc={kr1wImg}
            imgAlt="KR-1W image"
            productName="KR-1W"
            para="The KR-1W combines aberrometry, topography, keratometry, pupillometry and auto refraction in one unit that is unparalled in terms of functionality and reproducibility."
          />
        </div>
      </Margin>
    </section>
  );
}
