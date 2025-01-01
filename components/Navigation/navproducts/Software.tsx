import Link from "next/link";

type SoftwareProps = {
  toggleProductsMenu: () => void;
};

export default function Software({ toggleProductsMenu }: SoftwareProps) {
  return (
    <div className="diagnostics ">
      <div className="flex justify-between flex-wrap my-4 p-4 w-full">
        <div className="w-[30%] px-1 py-2 ">
          <div className="text-sm font-bold text-[#4169E1] border-black-500">
            <Link
              href="/products/software/imagenet-6"
              className="hover:text-[#E77723]"
              onClick={() => toggleProductsMenu()}
            >
              IMAGENET 6
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
