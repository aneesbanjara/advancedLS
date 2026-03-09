import Link from "next/link";
type TreatmentAndSurgicalProps = {
  toggleProductsMenu: () => void;
};

export default function TreatmentAndSurgical({
  toggleProductsMenu,
}: TreatmentAndSurgicalProps) {
  return (
    <div className="diagnostics ">
      <div className="flex justify-between flex-wrap my-4 p-4 w-full">
        <div className="w-full sm:w-[30%] px-1 py-2 ">
          <div className="text-sm font-bold text-[#4169E1] border-black-500">
            <Link
              href="/products/treatment/photocoagulator"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              PHOTOCOAGULATOR
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/treatment/photocoagulator/pascal-synthesis"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              PASCAL Synthesis Series
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/treatment/photocoagulator/hud-1"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              HUD-1
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/treatment/photocoagulator/endpoint-management"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              Endpoint Management
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/treatment/photocoagulator/pattern-scanning-laser-trabeculoplasty"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              Pattern Scanning Laser Trabeculoplasty
            </Link>
          </div>
        </div>
        <div className="w-full sm:w-[30%] px-1 py-2">
          <div className="text-sm font-bold text-[#4169E1] border-black-500">
            <Link
              href="/products/treatment/operation-microscopes"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              OPERATION MICROSCOPE
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/treatment/operation-microscopes/oms-800series"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              OMS-800 series
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/treatment/operation-microscopes/oms-90"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              OMS-90
            </Link>
          </div>
        </div>
        <div className="w-full sm:w-[30%] px-1 py-2">
          <div className="text-sm font-bold text-[#4169E1] border-black-500">
            <Link
              href="/products/treatment/iridex-products"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              IRIDEX PRODUCTS
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/treatment/iridex-products/iridex-PASCAL"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              Iridex PASCAL®
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/treatment/iridex-products/PASCAL-synthesis-twinstar"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              PASCAL® Synthesis TwinStar
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/treatment/iridex-products/oculight-series"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              OcuLight® Series
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/treatment/iridex-products/IQ532"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              IQ532®
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/treatment/iridex-products/IQ577"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              IQ577®
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/treatment/iridex-products/cyclo-G6"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              Cyclo G6®
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
