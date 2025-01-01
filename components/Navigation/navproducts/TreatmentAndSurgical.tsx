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
        <div className="w-[30%] px-1 py-2 ">
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
        <div className="w-[30%] px-1 py-2">
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
        <div className="w-[30%] px-1 py-2">
          <div className="text-sm font-bold text-[#4169E1] border-black-500">
            <Link
              href="/products/treatment/specular-microscope"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              SPECULAR MICROSCOPE
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/treatment/specular-microscope/sp-1p"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              SP-1P
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
