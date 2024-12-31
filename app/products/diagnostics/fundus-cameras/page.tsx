import Margin from "@/components/margin/Margin";
import SubHeader from "@/components/subheader/SubHeader";
import nw500Img from "@/public/images/diagnostics/fundusCameras/nw500.png";
import trcnw400Img from "@/public/images/diagnostics/fundusCameras/trc-nw400.png";
import trcnw8Img from "@/public/images/diagnostics/fundusCameras/trc-nw8series.png";
import trc50dxImg from "@/public/images/diagnostics/fundusCameras/trc-50dx.png";
import Product from "@/components/product/Product";

export default function FundusCameras() {
  return (
    <section>
      <SubHeader>Fundus Cameras</SubHeader>
      <Margin>
        <div className="flex flex-row gap-8 justify-between items-start flex-wrap">
          <Product
            linkTo="/products/diagnostics/fundus-cameras/nw500"
            imgSrc={nw500Img}
            imgAlt="NW500 image"
            productName="NW500"
            para="The NW500 acquires excellent quality retinal images with a pupil size 2.0mm or more*. The NW500 delivers exclusive slit scan technology that enables the capture of sharp-quality images in lighted settings, with more consistency, even when imaging small pupils. It also offers a wide variety of connectivity options such as DICOM, shared folder, and USB/ HDD."
          />
          <Product
            linkTo="/products/diagnostics/fundus-cameras/trc-nw400"
            imgSrc={trcnw400Img}
            imgAlt="TRC-NW400 image"
            productName="TRC-NW400"
            para="The TRC-NW400 is an automated and robotic fundus camera that performs true color photography. By incorporating the 360° rotating touch panel monitor, operator is able to acquire the image rapidly and easily by simple finger touch. It makes your workflow efficient."
          />
          <Product
            linkTo="/products/diagnostics/fundus-cameras/trc-nw8series"
            imgSrc={trcnw8Img}
            imgAlt="TRC-NW8 image"
            productName="TRC-NW8 Series"
            para="With the TRC-NW8 series, it is possible to capture not only Color, Red-free but also Fluorescein angiography to answer your needs."
          />
          <Product
            linkTo="/products/diagnostics/fundus-cameras/trc-50dx"
            imgSrc={trc50dxImg}
            imgAlt="TRC-50DX image"
            productName="TRC-50DX"
            para="The TRC-50DX series of mydriatic retinal cameras incorporate color, red free, fluorescein angiography, fundus auto fluorescein and indocyanine green angiography."
          />
        </div>
      </Margin>
    </section>
  );
}
