import Margin from "@/components/margin/Margin";
import SubHeader from "@/components/subheader/SubHeader";
import ca800Img from "@/public/images/examination/topographer/ca-800.png";
import tritonImg from "@/public/images/diagnostics/OCT/triton.png";
import Product from "@/components/product/Product";

export default function Topographer() {
  return (
    <section>
      <SubHeader>Topographer</SubHeader>
      <Margin>
        <div className="flex flex-row gap-8 justify-between items-start flex-wrap">
          <Product
            linkTo="/products/examination/topographer/ca-800"
            imgSrc={ca800Img}
            imgAlt="CA-800 image"
            productName="CA-800"
            para="The Topcon CA-800 Corneal Analyzer is an easy-to-use, comprehensive corneal topography solution allowing for the complete evaluation of the anterior corneal surface. In addition to elevation mapping of the corneal surface, the CA-800 provides robust software features,"
          />
        </div>
      </Margin>
    </section>
  );
}
