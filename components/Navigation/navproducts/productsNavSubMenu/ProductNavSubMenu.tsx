import { IoMdClose } from "react-icons/io";

type ProductNavSubMenuProps = {
  toggleProductsDiagnosticsMenu: () => void;
  toggleProductsExaminationMenu: () => void;
  toggleProductsSoftwareMenu: () => void;
  toggleProductsDataManagementMenu: () => void;
  toggleProductsTreatmentAndSurgicalMenu: () => void;
  toggleProductsMenu: () => void;
  navSubMenu: {
    isDiagnosticssSubMenuOpen: boolean;
    isExaminationSubMenuOpen: boolean;
    isSoftwareSubMenuOpen: boolean;
    isDataManagementSubMenuOpen: boolean;
    isTreatmentOrSurgicalSubMenuOpen: boolean;
  };
};

export default function ProductNavSubMenu({
  toggleProductsDiagnosticsMenu,
  toggleProductsExaminationMenu,
  toggleProductsSoftwareMenu,
  toggleProductsDataManagementMenu,
  toggleProductsTreatmentAndSurgicalMenu,
  toggleProductsMenu,
  navSubMenu,
}: ProductNavSubMenuProps) {
  return (
    <>
      <div
        className={`${
          navSubMenu.isDiagnosticssSubMenuOpen ? "headingUnderline" : ""
        } font-bold text-lg text-[#00008B] cursor-pointer`}
        onClick={() => toggleProductsDiagnosticsMenu()}
      >
        DIAGNOSTICS
      </div>

      <div
        className={`${
          navSubMenu.isExaminationSubMenuOpen ? "headingUnderline" : ""
        } font-bold text-lg text-[#00008B] cursor-pointer`}
        onClick={() => toggleProductsExaminationMenu()}
      >
        EXAMINATION
      </div>
      <div
        className={`${
          navSubMenu.isSoftwareSubMenuOpen ? "headingUnderline" : ""
        } font-bold text-lg text-[#00008B] cursor-pointer`}
        onClick={() => toggleProductsSoftwareMenu()}
      >
        SOFTWARE
      </div>
      <div
        className={`${
          navSubMenu.isDataManagementSubMenuOpen ? "headingUnderline" : ""
        } font-bold text-lg text-[#00008B] cursor-pointer`}
        onClick={() => toggleProductsDataManagementMenu()}
      >
        DATA MANAGEMENT
      </div>
      <div
        className={`${
          navSubMenu.isTreatmentOrSurgicalSubMenuOpen ? "headingUnderline" : ""
        } font-bold text-lg text-[#00008B] cursor-pointer`}
        onClick={() => toggleProductsTreatmentAndSurgicalMenu()}
      >
        TREATMENT/SURGICAL
      </div>
      <div
        className="rounded-full padding-4 cursor-pointer hover:text-[#E77723]"
        onClick={() => toggleProductsMenu()}
      >
        <IoMdClose size={30} />
      </div>
    </>
  );
}
