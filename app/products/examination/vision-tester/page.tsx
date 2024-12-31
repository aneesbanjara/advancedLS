import Margin from "@/components/margin/Margin";
import SubHeader from "@/components/subheader/SubHeader";
import cv5000seriesProImg from "@/public/images/examination/visionTester/cv-5000series-pro.png";
import vt10Img from "@/public/images/examination/visionTester/vt-10.png";
import Product from "@/components/product/Product";

export default function VisionTester() {
  return (
    <section>
      <SubHeader>Vision Tester</SubHeader>
      <Margin>
        <div className="flex flex-row gap-8 justify-between items-start flex-wrap">
          <Product
            linkTo="/products/examination/vision-tester/cv-5000series-pro"
            imgSrc={cv5000seriesProImg}
            imgAlt="CV-5000S/PRO image"
            productName="CV-5000S/PRO"
            para="The CV-5000S Automated Vision Tester sets new quality standards. The fast lens rotation provides comfort for both user and patient while the compact and contemporary design enhances the doctor’s professional image."
          />
          <Product
            linkTo="/products/examination/vision-tester/vt-10"
            imgSrc={vt10Img}
            imgAlt="VT-10 image"
            productName="VT-10"
            para="The VT-10 Vision Tester provides exceptional quality and value, featuring quick, easy and accurate refractions."
          />
        </div>
      </Margin>
    </section>
  );
}
