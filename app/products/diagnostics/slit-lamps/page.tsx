import Margin from "@/components/margin/Margin";
import SubHeader from "@/components/subheader/SubHeader";
import sl2gImg from "@/public/images/diagnostics//slitLamps/sl-2g.png";
import sld2Img from "@/public/images/diagnostics//slitLamps/sl-d2.png";
import sld4Img from "@/public/images/diagnostics//slitLamps/sl-d4.png";
import sld301Img from "@/public/images/diagnostics/slitLamps/sl-d301.png";
import sld701Img from "@/public/images/diagnostics//slitLamps/sl-d701.png";
import dc4Img from "@/public/images/diagnostics//slitLamps/dc-4.png";
import Product from "@/components/product/Product";

export default function SlitLamps() {
  return (
    <section>
      <SubHeader>Slit Lamps</SubHeader>
      <Margin>
        <div className="flex flex-row gap-8 justify-between items-start flex-wrap">
          <Product
            linkTo="/products/diagnostics/slit-lamps/sl-2g"
            imgSrc={sl2gImg}
            imgAlt="SL-2G image"
            productName="SL-2G"
            para="Basic, economical and environmentally friendly, the SL-2G meets all the needs for a clinical exam."
          />
          <Product
            linkTo="/products/diagnostics/slit-lamps/sl-d2"
            imgSrc={sld2Img}
            imgAlt="SL-D2 image"
            productName="SL-D2"
            para="High performance on an entry level slit lamp with tower style illumination and digital capture option."
          />
          <Product
            linkTo="/products/diagnostics/slit-lamps/sl-d4"
            imgSrc={sld4Img}
            imgAlt="SL-D4 LED image"
            productName="SL-D4 LED"
            para="A complete Slit Lamp with an expanded magnification range, quality optics and LED illumination."
          />
          <Product
            linkTo="/products/diagnostics/slit-lamps/sl-d301"
            imgSrc={sld301Img}
            imgAlt="SL-D301 image"
            productName="SL-D301"
            para="The SL-D2 is part of Topcon’s D-Series Digital Slit Lamps. It can be used as a conventional examination instrument or with the optional DC-4 integrated digital camera for high resolution imaging."
          />
          <Product
            linkTo="/products/diagnostics/slit-lamps/sl-d701"
            imgSrc={sld701Img}
            imgAlt="SL-D701 image"
            productName="SL-D701"
            para="A complete Slit Lamp with expanded magnification range, digital ready, LED illumination and infra red capability."
          />
          <Product
            linkTo="/products/diagnostics/slit-lamps/dc-4"
            imgSrc={dc4Img}
            imgAlt="DC-4 image"
            productName="DC-4"
            para="The DC-4 Digital Camera can be easily mounted on any of the “D” series of Topcon Slit Lamps converting them into an ophthalmic imaging instrument."
          />
        </div>
      </Margin>
    </section>
  );
}
