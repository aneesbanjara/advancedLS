import Link from "next/link";
import { FaFacebook, FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <section className="bg-[#DBDBDB] w-full p-[90px] bottom-0">
      <div className="flex flex-wrap justify-between m-2 w-full">
        <div className="flex flex-col w-[30%]">
          <div className="flex flex-col justify-start items-start flex-wrap m-2">
            <div className="flex flex-col justify-start items-start font-bold text-lg m-2">
              DIAGNOSTICS
            </div>
            <div className="flex flex-col justify-start items-start text-base m-2 gap-1">
              <Link
                className="hover:text-[#E77723]"
                href="/products/diagnostics/oct"
              >
                OPTICAL COHERENCE TOMOGRAPHY
              </Link>
              <Link
                className="hover:text-[#E77723]"
                href="/products/diagnostics/perimeters"
              >
                PERIMETERS
              </Link>
              <Link
                className="hover:text-[#E77723]"
                href="/products/diagnostics/axiallength"
              >
                AXIAL LENGTH
              </Link>
              <Link
                className="hover:text-[#E77723]"
                href="/products/diagnostics/biometer"
              >
                BIOMETER
              </Link>
              <Link
                className="hover:text-[#E77723]"
                href="/products/diagnostics/slit-lamps"
              >
                SLIT LAMPS
              </Link>
              <Link
                className="hover:text-[#E77723]"
                href="/products/diagnostics/wavefront-analyzer"
              >
                WAVEFRONT ANALYSER
              </Link>
              <Link
                className="hover:text-[#E77723]"
                href="/products/diagnostics/fundus-cameras"
              >
                FUNDUS CAMERAS
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start flex-wrap m-2">
            <div className="flex flex-col justify-start items-start font-bold text-lg m-2">
              EXAMINATION
            </div>
            <div className="flex flex-col justify-start items-start text-base m-2 gap-1">
              <Link
                className="hover:text-[#E77723]"
                href="/products/examination/auto-refractometer"
              >
                AUTO REFRACTOMETER
              </Link>
              <Link
                className="hover:text-[#E77723]"
                href="/products/examination/lensmeter"
              >
                LENSMETER
              </Link>
              <Link
                className="hover:text-[#E77723]"
                href="/products/examination/refraction-system"
              >
                REFRACTION SYSTEM
              </Link>
              <Link
                className="hover:text-[#E77723]"
                href="/products/examination/topographer"
              >
                TOPOGRAPHER
              </Link>
              <Link
                className="hover:text-[#E77723]"
                href="/products/examination/tonometer"
              >
                TONOMETER
              </Link>
              <Link
                className="hover:text-[#E77723]"
                href="/products/examination/vision-tester"
              >
                VISION TESTER
              </Link>
              <Link
                className="hover:text-[#E77723]"
                href="/products/examination/visual-acuity-chart"
              >
                VISUAL ACUITY CHART
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[30%]">
          <div className="flex flex-col justify-start items-start flex-wrap m-2">
            <div className="flex flex-col justify-start items-start font-bold text-lg m-2">
              TREATMENT / SURGICAL
            </div>
            <div className="flex flex-col justify-start items-start text-base m-2 gap-1">
              <Link
                className="hover:text-[#E77723]"
                href="/products/treatment/photocoagulator"
              >
                PHOTOCOAGULATOR
              </Link>
              <Link
                className="hover:text-[#E77723]"
                href="/products/treatment/operation-microscopes"
              >
                OPERATION MICROSCOPE
              </Link>
              <Link
                className="hover:text-[#E77723]"
                href="/products/treatment/specular-microscope"
              >
                SPECULAR MICROSCOPE
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start flex-wrap m-2">
            <div className="flex flex-col justify-start items-start font-bold text-lg m-2">
              SOFTWARE
            </div>
            <div className="flex flex-col justify-start items-start text-base m-2 gap-1">
              <Link
                className="hover:text-[#E77723]"
                href="/products/software/imagenet-6"
              >
                IMAGENET 6
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start flex-wrap m-2">
            <div className="flex flex-col justify-start items-start font-bold text-lg m-2">
              DATA MANAGEMENT
            </div>
            <div className="flex flex-col justify-start items-start text-base m-2 gap-1">
              <Link
                className="hover:text-[#E77723]"
                href="/products/data-management/harmony"
              >
                HARMONY
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[30%]">
          <div className="flex flex-col justify-start items-start flex-wrap m-2">
            <div className="flex justify-center items-center font-bold text-lg m-2">
              Find us at:
            </div>
            <div className="flex justify-center items-center gap-3">
              <FaFacebook fontSize={30} />
              <FaSquareXTwitter fontSize={30} />
              <FaLinkedin fontSize={30} />
            </div>
          </div>
          <div className="flex flex-col justify-start items-start flex-wrap m-2">
            <div className="flex flex-col justify-start items-start font-bold text-lg m-2">
              COMPANY
            </div>
            <div className="flex flex-col justify-start items-start text-base m-2 gap-1">
              <Link className="hover:text-[#E77723]" href="/company/aboutus">
                ABOUT US
              </Link>
              <Link className="hover:text-[#E77723]" href="/company/careers">
                CAREERS
              </Link>
              <Link className="hover:text-[#E77723]" href="/company/inquiry">
                INQUIRY
              </Link>
              <Link className="hover:text-[#E77723]" href="/company/feedback">
                FEEDBACK
              </Link>
              <Link className="hover:text-[#E77723]" href="/company/privacy">
                PRIVACY & POLICY
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start flex-wrap m-2">
            <Link
              href="/support/personalizedsupport"
              className="font-bold text-lg m-2 hover:text-[#E77723]"
            >
              PERSONALIZED SUPPORT
            </Link>
          </div>
          <div className="flex flex-col justify-start items-start flex-wrap m-2">
            <Link
              href="/support/service"
              className="font-bold text-lg m-2 hover:text-[#E77723]"
            >
              SERVICE AND REPAIRS
            </Link>
          </div>
          <div className="flex flex-col justify-start items-start flex-wrap m-2">
            <Link
              href="/news/gallery"
              className="font-bold text-lg m-2 hover:text-[#E77723]"
            >
              GALLERY
            </Link>
          </div>
          <div className="flex flex-col justify-start items-start flex-wrap m-2">
            <Link
              href="/news/conferences"
              className="font-bold text-lg m-2 hover:text-[#E77723]"
            >
              CONFERENCES
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
