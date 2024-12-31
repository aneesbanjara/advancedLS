import Link from "next/link";

export default function Diagnostics() {
  return (
    <div className="diagnostics ">
      <div className="flex justify-between flex-wrap my-4 p-4 w-full">
        <div className="w-[30%] px-1 py-2 ">
          <div className="text-sm font-bold text-[#4169E1] border-black-500">
            <Link
              href="/products/diagnostics/oct"
              className="hover:text-[#E77723]"
            >
              OPTICAL COHERENCE TOMOGRAPHY
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/diagnostics/oct/maestro2"
              className="hover:text-[#E77723]"
            >
              Maestro2
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/diagnostics/oct/triton"
              className="hover:text-[#E77723]"
            >
              Triton
            </Link>
          </div>
        </div>
        <div className="w-[30%] px-1 py-2">
          <div className="text-sm font-bold text-[#4169E1] border-black-500">
            <Link
              href="/products/diagnostics/perimeters"
              className="hover:text-[#E77723]"
            >
              PERIMETERS
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/diagnostics/perimeters/henson-9000"
              className="hover:text-[#E77723]"
            >
              Henson 9000
            </Link>
          </div>
        </div>
        <div className="w-[30%] px-1 py-2">
          <div className="text-sm font-bold text-[#4169E1] border-black-500">
            <Link
              href="/products/diagnostics/axiallength"
              className="hover:text-[#E77723]"
            >
              AXIAL LENGTH
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/diagnostics/axiallength/myah"
              className="hover:text-[#E77723]"
            >
              MYAH
            </Link>
          </div>
        </div>
        <div className="w-[30%] px-1 py-2">
          <div className="text-sm font-bold text-[#4169E1] border-black-500">
            <Link
              href="/products/diagnostics/biometer"
              className="hover:text-[#E77723]"
            >
              BIOMETER
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/diagnostics/biometer/aladdin"
              className="hover:text-[#E77723]"
            >
              ALADDIN
            </Link>
          </div>
        </div>
        <div className="w-[30%] px-1 py-2">
          <div className="text-sm font-bold text-[#4169E1] border-black-500">
            <Link
              href="/products/diagnostics/slit-lamps"
              className="hover:text-[#E77723]"
            >
              SLIT LAMPS
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/diagnostics/slit-lamps/sl-d301"
              className="hover:text-[#E77723]"
            >
              SL-D301
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/diagnostics/slit-lamps/sl-d2"
              className="hover:text-[#E77723]"
            >
              SL-D2
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/diagnostics/slit-lamps/sl-d701"
              className="hover:text-[#E77723]"
            >
              SL-D701
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/diagnostics/slit-lamps/sl-2g"
              className="hover:text-[#E77723]"
            >
              SL-2G
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/diagnostics/slit-lamps/sl-d4"
              className="hover:text-[#E77723]"
            >
              SL-D4 LED
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/diagnostics/slit-lamps/dc-4"
              className="hover:text-[#E77723]"
            >
              DC-4
            </Link>
          </div>
        </div>
        <div className="w-[30%] px-1 py-2">
          <div className="text-sm font-bold text-[#4169E1] border-black-500">
            <Link
              href="/products/diagnostics/wavefront-analyzer"
              className="hover:text-[#E77723]"
            >
              WAVEFRONT ANALYSER
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/diagnostics/wavefront-analyzer/kr-1w"
              className="hover:text-[#E77723]"
            >
              KR-1W
            </Link>
          </div>
        </div>
        <div className="w-[30%] px-1 py-2">
          <div className="text-sm font-bold text-[#4169E1] border-black-500">
            <Link
              href="/products/diagnostics/fundus-cameras"
              className="hover:text-[#E77723]"
            >
              FUNDUS CAMERAS
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/diagnostics/fundus-cameras/nw500"
              className="hover:text-[#E77723]"
            >
              NW500
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/diagnostics/fundus-cameras/trc-nw400"
              className="hover:text-[#E77723]"
            >
              TRC-NW400
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/diagnostics/fundus-cameras/trc-nw8series"
              className="hover:text-[#E77723]"
            >
              TRC-NW8 Series
            </Link>
          </div>
          <div className="text-sm font-bold text-[#555]">
            <Link
              href="/products/diagnostics/fundus-cameras/trc-50dx"
              className="hover:text-[#E77723]"
            >
              TRC-50DX
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
