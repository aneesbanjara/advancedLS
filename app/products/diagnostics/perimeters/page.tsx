import Margin from "@/components/margin/Margin";
import SubHeader from "@/components/subheader/SubHeader";
import Product from "@/components/product/Product";
import henson9000Img from "@/public/images/diagnostics/perimeters/henson9000.png";

export default function Perimeters() {
  return (
    <section>
      <SubHeader>Perimeters</SubHeader>
      <Margin>
        <div className="flex flex-row gap-8 justify-between items-start">
          <Product
            linkTo="/products/diagnostics/perimeters/henson-9000"
            imgSrc={henson9000Img}
            imgAlt="Henson-9000 image"
            productName="Henson 9000"
            para="The Henson 9000 is a compact, easy-to-use perimeter for glaucoma detection and management. It features innovative tests that improve speed and diagnostic accuracy while enhancing the patient experience and practice efficiency. A full suite of analytical tools enables the long-term management of glaucoma patients."
          />
        </div>
      </Margin>
    </section>
  );
}
