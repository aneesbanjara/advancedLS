import Margin from "@/components/margin/Margin";
import SubHeader from "@/components/subheader/SubHeader";
import solosImg from "@/public/images/examination/lensmeter/solos.png";
import cl300Img from "@/public/images/examination/lensmeter/cl-300.png";
import lm88cImg from "@/public/images/examination/lensmeter/lm-8-8c.png";
import Product from "@/components/product/Product";

export default function Lensmeter() {
  return (
    <section>
      <SubHeader>Lensmeter</SubHeader>
      <Margin>
        <div className="flex flex-row gap-8 justify-between items-start flex-wrap">
          <Product
            linkTo="/products/examination/lensmeter/solos"
            imgSrc={solosImg}
            imgAlt="SOLOS image"
            productName="SOLOS"
            para="SOLOS is a fully automated lensmeter with a full range spectrometer that detects, measures and marks single vision, progressive and other multifocal lenses glazes in a spectacle fame or as uncut lenses. With a single touch, SOLOS automatically positions each lens, detects the lens type and performs comprehensive measurements."
          />
          <Product
            linkTo="/products/examination/lensmeter/cl-300"
            imgSrc={cl300Img}
            imgAlt="CL-300 image"
            productName="CL-300"
            para="The Topcon CL-300 Computerized Lensmeter combines innovative technology with ease-of-use features including progressive lens measurement, a large color LCD monitor, a green light reading beam that enhances measurement precision and a UV transmittance measurement function."
          />
          <Product
            linkTo="/products/examination/lensmeter/lm-8-8c"
            imgSrc={lm88cImg}
            imgAlt="LM-8/8C image"
            productName="LM-8/8C"
            para="LM-8/8C features a cartridge type marking device and a redesigned eyepiece."
          />
        </div>
      </Margin>
    </section>
  );
}
