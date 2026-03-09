import Link from "next/link";
import { FaFacebook, FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <section className="bg-[#DBDBDB] w-full p-4 sm:p-[90px] bottom-0">
      <div className="flex flex-row flex-wrap justify-between m-2 w-full">
        {/* Column 1 */}
        <div className="flex flex-col flex-wrap w-full sm:w-[30%]">
          {/* Diagnostics */}
          <div className="m-2">
            <div className="font-bold text-lg m-2">DIAGNOSTICS</div>
            <div className="text-base m-2 gap-1 flex flex-col">
              {[
                {
                  text: "OPTICAL COHERENCE TOMOGRAPHY",
                  href: "/products/diagnostics/oct",
                },
                {
                  text: "PERIMETERS",
                  href: "/products/diagnostics/perimeters",
                },
                {
                  text: "AXIAL LENGTH",
                  href: "/products/diagnostics/axiallength",
                },
                { text: "BIOMETER", href: "/products/diagnostics/biometer" },
                {
                  text: "SLIT LAMPS",
                  href: "/products/diagnostics/slit-lamps",
                },
                {
                  text: "WAVEFRONT ANALYSER",
                  href: "/products/diagnostics/wavefront-analyzer",
                },
                {
                  text: "FUNDUS CAMERAS",
                  href: "/products/diagnostics/fundus-cameras",
                },
              ].map(({ text, href }) => (
                <Link key={text} href={href} className="hover:text-[#E77723]">
                  {text}
                </Link>
              ))}
            </div>
          </div>

          {/* Examination */}
          <div className="m-2">
            <div className="font-bold text-lg m-2">EXAMINATION</div>
            <div className="text-base m-2 gap-1 flex flex-col">
              {[
                {
                  text: "AUTO REFRACTOMETER",
                  href: "/products/examination/auto-refractometer",
                },
                { text: "LENSMETER", href: "/products/examination/lensmeter" },
                {
                  text: "REFRACTION SYSTEM",
                  href: "/products/examination/refraction-system",
                },
                {
                  text: "TOPOGRAPHER",
                  href: "/products/examination/topographer",
                },
                { text: "TONOMETER", href: "/products/examination/tonometer" },
                {
                  text: "VISION TESTER",
                  href: "/products/examination/vision-tester",
                },
                {
                  text: "VISUAL ACUITY CHART",
                  href: "/products/examination/visual-acuity-chart",
                },
              ].map(({ text, href }) => (
                <Link key={text} href={href} className="hover:text-[#E77723]">
                  {text}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col flex-wrap w-full sm:w-[30%]">
          {/* Treatment / Surgical */}
          <div className="m-2">
            <div className="font-bold text-lg m-2">TREATMENT / SURGICAL</div>
            <div className="text-base m-2 gap-1 flex flex-col">
              <Link
                href="/products/treatment/photocoagulator"
                className="hover:text-[#E77723]"
              >
                PHOTOCOAGULATOR
              </Link>
              <Link
                href="/products/treatment/operation-microscopes"
                className="hover:text-[#E77723]"
              >
                OPERATION MICROSCOPE
              </Link>
              <Link
                href="/products/diagnostics/specular-microscope"
                className="hover:text-[#E77723]"
              >
                SPECULAR MICROSCOPE
              </Link>
            </div>
          </div>

          {/* Software */}
          <div className="m-2">
            <div className="font-bold text-lg m-2">SOFTWARE</div>
            <div className="text-base m-2 gap-1 flex flex-col">
              <Link
                href="/products/software/imagenet-6"
                className="hover:text-[#E77723]"
              >
                IMAGENET 6
              </Link>
            </div>
          </div>

          {/* Data Management */}
          <div className="m-2">
            <div className="font-bold text-lg m-2">DATA MANAGEMENT</div>
            <div className="text-base m-2 gap-1 flex flex-col">
              <Link
                href="/products/data-management/harmony"
                className="hover:text-[#E77723]"
              >
                HARMONY
              </Link>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col flex-wrap w-full sm:w-[30%]">
          {/* Social */}
          <div className="m-2">
            <div className="font-bold text-lg m-2">Find us at:</div>
            <div className="flex justify-start items-center gap-3 m-2">
              <Link
                href="https://www.facebook.com/profile.php?id=61575543342148"
                target="_blank"
              >
                <FaFacebook fontSize={30} />
              </Link>
              <Link href="https://x.com/ALTPLtd" target="_blank">
                <FaSquareXTwitter fontSize={30} />
              </Link>
              <Link href="https://x.com/ALTPLtd" target="_blank">
                <FaLinkedin fontSize={30} />
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="m-2">
            <div className="font-bold text-lg m-2">COMPANY</div>
            <div className="text-base m-2 gap-1 flex flex-col">
              {[
                { text: "ABOUT US", href: "/company/aboutus" },
                { text: "CAREERS", href: "/company/careers" },
                { text: "INQUIRY", href: "/company/inquiry" },
                { text: "FEEDBACK", href: "/company/feedback" },
                { text: "PRIVACY & POLICY", href: "/company/privacy" },
              ].map(({ text, href }) => (
                <Link key={text} href={href} className="hover:text-[#E77723]">
                  {text}
                </Link>
              ))}
            </div>
          </div>

          {/* Others */}
          <div className="m-2">
            <Link
              href="/support/personalizedsupport"
              className="font-bold text-lg m-2 hover:text-[#E77723]"
            >
              PERSONALIZED SUPPORT
            </Link>
          </div>
          <div className="m-2">
            <Link
              href="/support/service"
              className="font-bold text-lg m-2 hover:text-[#E77723]"
            >
              SERVICE AND REPAIRS
            </Link>
          </div>
          <div className="m-2">
            <Link
              href="/news/gallery"
              className="font-bold text-lg m-2 hover:text-[#E77723]"
            >
              GALLERY
            </Link>
          </div>
          <div className="m-2">
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
