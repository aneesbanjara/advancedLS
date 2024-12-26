import { Dropdown } from "antd";
import type { MenuProps } from "antd";
import Link from "next/link";

export default function Products() {
  const items: MenuProps["items"] = [
    {
      key: "8",
      label: "OPTHALMOLOGY",
      disabled: true,
    },
    {
      type: "divider",
    },
    {
      key: "1",
      label: (
        <Link href="/products/opthalmology/oct" className="">
          OPTICAL COHERENCE TOMOGRAPHY
        </Link>
      ),
      children: [
        {
          key: "1-0",
          label: "O C T",
          disabled: true,
        },
        {
          type: "divider",
        },
        {
          key: "1-1",
          label: (
            <Link href="/products/opthalmology/oct/maestro2" className="">
              Maestro2
            </Link>
          ),
        },
        {
          key: "1-2",
          label: (
            <Link href="/products/opthalmology/oct/triton" className="">
              Triton
            </Link>
          ),
        },
      ],
    },
    {
      key: "2",
      label: (
        <Link href="/products/opthalmology/slitlamps" className="">
          SLIT LAMPS
        </Link>
      ),
      children: [
        {
          key: "2-0",
          label: "SLIT LAMPS",
          disabled: true,
        },
        {
          type: "divider",
        },
        {
          key: "2-1",
          label: (
            <Link href="/products/opthalmology/sld301" className="">
              SL-D301
            </Link>
          ),
        },
        {
          key: "2-2",
          label: (
            <Link href="/products/opthalmology/sld2" className="">
              SL-D2
            </Link>
          ),
        },
        {
          key: "2-3",
          label: (
            <Link href="/products/opthalmology/sld701" className="">
              SL-D701
            </Link>
          ),
        },
        {
          key: "2-4",
          label: (
            <Link href="/products/opthalmology/sl2g" className="">
              SL-2G
            </Link>
          ),
        },
        {
          key: "2-5",
          label: (
            <Link href="/products/opthalmology/sl2gled" className="">
              SL-2G LED
            </Link>
          ),
        },
        {
          key: "2-6",
          label: (
            <Link href="/products/opthalmology/dc4" className="">
              DC-4
            </Link>
          ),
        },
      ],
    },
    {
      key: "3",
      label: (
        <Link href="/products/opthalmology/perimeters" className="">
          PERIMETERS
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link href="/products/opthalmology/axiallength" className="">
          AXIAL LENGTH
        </Link>
      ),
    },
    {
      key: "5",
      label: (
        <Link href="/products/opthalmology/biometer" className="">
          BIOMETER{" "}
        </Link>
      ),
    },
    {
      key: "6",
      label: (
        <Link href="/products/opthalmology/webfrontanalyser" className="">
          WEBFRONT ANALYSER{" "}
        </Link>
      ),
    },
    {
      key: "7",
      label: (
        <Link href="/products/opthalmology/funduscameras" className="">
          FUNDUS CAMERAS{" "}
        </Link>
      ),
    },
  ];
  return (
    <Dropdown
      menu={{ items }}
      overlayStyle={{ width: 500, borderRadius: 0 }}
      placement="bottom"
    >
      <Link href="/products" onClick={(e) => e.preventDefault()}>
        PRODUCTS
      </Link>
    </Dropdown>
  );
}
