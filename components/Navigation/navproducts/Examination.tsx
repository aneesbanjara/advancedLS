import Link from "next/link";

type EXAMINATIONProps = {
  toggleProductsMenu: () => void;
};

export default function EXAMINATION({ toggleProductsMenu }: EXAMINATIONProps) {
  return (
    <div className="diagnostics ">
      <div className="flex justify-between flex-wrap my-4 p-4 w-full">
        <div className="w-[30%] px-1 py-2 ">
          <div className="text-sm font-bold text-[#4169E1] border-black-500">
            <Link
              href="/products/examination/auto-refractometer"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              AUTO REFRACTOMETER
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/examination/auto-refractometer/kr-1"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              KR-1
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/examination/auto-refractometer/kr-800series"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              KR-800 series
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/examination/auto-refractometer/rm-1"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              RM-1
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/examination/auto-refractometer/rm-800"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              RM-800
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/examination/auto-refractometer/kr-1w"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              KR-1W
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/examination/auto-refractometer/trk-2p"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              TRK-2P
            </Link>
          </div>
        </div>
        <div className="w-[30%] px-1 py-2">
          <div className="text-sm font-bold text-[#4169E1] border-black-500">
            <Link
              href="/products/examination/lensmeter"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              LENSMETER
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/examination/lensmeter/solos"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              SOLOS
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/examination/lensmeter/cl-300"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              CL-300
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/examination/lensmeter/lm-8-8c"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              LM-8/8C
            </Link>
          </div>
        </div>
        <div className="w-[30%] px-1 py-2">
          <div className="text-sm font-bold text-[#4169E1] border-black-500">
            <Link
              href="/products/examination/refraction-system"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              REFRACTION SYSTEM
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/examination/refraction-system/chronos"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              Chronos
            </Link>
          </div>
        </div>
        <div className="w-[30%] px-1 py-2">
          <div className="text-sm font-bold text-[#4169E1] border-black-500">
            <Link
              href="/products/examination/topographer"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              TOPOGRAPHER
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/examination/topographer/ca-800"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              CA-800
            </Link>
          </div>
        </div>
        <div className="w-[30%] px-1 py-2">
          <div className="text-sm font-bold text-[#4169E1] border-black-500">
            <Link
              href="/products/examination/tonometer"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              TONOMETER
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/examination/tonometer/ct-800series"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              CT-800/CT-800A
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/examination/tonometer/ct-1-1p"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              CT-1/CT-1P
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/examination/tonometer/trk-2p"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              TRK-2P
            </Link>
          </div>
        </div>
        <div className="w-[30%] px-1 py-2">
          <div className="text-sm font-bold text-[#4169E1] border-black-500">
            <Link
              href="/products/examination/vision-tester"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              VISION TESTER
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/examination/vision-tester/cv-5000series-pro"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              CV-5000S/PRO{" "}
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/examination/vision-tester/vt-10"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              VT-10
            </Link>
          </div>
        </div>
        <div className="w-[30%] px-1 py-2">
          <div className="text-sm font-bold text-[#4169E1] border-black-500">
            <Link
              href="/products/examination/visual-acuity-chart"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              VISUAL ACUITY CHART
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/examination/visual-acuity-chart/acp-8"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              ACP-8
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/examination/visual-acuity-chart/mc-5-5s"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              MC-5/MC-5S
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/examination/visual-acuity-chart/pc-50series"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              PC-50 Series
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
