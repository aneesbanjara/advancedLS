"use client";
import Products from "./Products";
import Company from "./Company";
import Support from "./Support";
import NewsAndEvents from "./NewsAndEvents";
import Link from "next/link";
import { useState } from "react";
import Diagnostics from "./navproducts/Diagnostics";
import EXAMINATION from "./navproducts/Examination";
import TreatmentAndSurgical from "./navproducts/TreatmentAndSurgical";
import Software from "./navproducts/Software";
import DataManagement from "./navproducts/DataManagement";
import { IoMdClose } from "react-icons/io";

type navSubMenuItem = {
  isProductsMenuOpen: boolean;
  isCompanyMenuOpen: boolean;
  isSupportMenuOpen: boolean;
  isNewsAndEventsMenuOpen: boolean;
  isDiagnosticssSubMenuOpen: boolean;
  isExaminationSubMenuOpen: boolean;
  isSoftwareSubMenuOpen: boolean;
  isDataManagementSubMenuOpen: boolean;
  isTreatmentOrSurgicalSubMenuOpen: boolean;
};

export default function NavigationMenu() {
  const [navSubMenu, setNavSubMenu] = useState<navSubMenuItem>({
    isProductsMenuOpen: false,
    isCompanyMenuOpen: false,
    isSupportMenuOpen: false,
    isNewsAndEventsMenuOpen: false,
    isDiagnosticssSubMenuOpen: false,
    isExaminationSubMenuOpen: false,
    isSoftwareSubMenuOpen: false,
    isDataManagementSubMenuOpen: false,
    isTreatmentOrSurgicalSubMenuOpen: false,
  });

  // products open with diagnostics defult
  const toggleProductsMenu = () => {
    setNavSubMenu((prev) => {
      return {
        ...prev,
        isProductsMenuOpen: !prev.isProductsMenuOpen,
        isDiagnosticssSubMenuOpen: true,
        isExaminationSubMenuOpen: false,
        isSoftwareSubMenuOpen: false,
        isDataManagementSubMenuOpen: false,
        isTreatmentOrSurgicalSubMenuOpen: false,
      };
    });
  };

  // company menu toggle
  const toggleCompanyMenu = () => {
    setNavSubMenu((prev) => {
      return {
        ...prev,
        isProductsMenuOpen: false,
        isCompanyMenuOpen: !prev.isCompanyMenuOpen,
        isDiagnosticssSubMenuOpen: false,
        isExaminationSubMenuOpen: false,
        isSoftwareSubMenuOpen: false,
        isDataManagementSubMenuOpen: false,
        isTreatmentOrSurgicalSubMenuOpen: false,
      };
    });
  };

  // support menu toggle
  const toggleSupportMenu = () => {
    setNavSubMenu((prev) => {
      return {
        ...prev,
        isSupportMenuOpen: !prev.isSupportMenuOpen,
        isDiagnosticssSubMenuOpen: false,
        isExaminationSubMenuOpen: false,
        isSoftwareSubMenuOpen: false,
        isDataManagementSubMenuOpen: false,
        isTreatmentOrSurgicalSubMenuOpen: false,
      };
    });
  };

  // news and events menu toggle
  const toggleNewsAndEventsMenu = () => {
    setNavSubMenu((prev) => {
      return {
        ...prev,
        isNewsAndEventsMenuOpen: !prev.isNewsAndEventsMenuOpen,
        isDiagnosticssSubMenuOpen: false,
        isExaminationSubMenuOpen: false,
        isSoftwareSubMenuOpen: false,
        isDataManagementSubMenuOpen: false,
        isTreatmentOrSurgicalSubMenuOpen: false,
      };
    });
  };

  // products diagnostics menu toggle
  const toggleProductsDiagnosticsMenu = () => {
    setNavSubMenu((prev) => {
      return {
        ...prev,
        isDiagnosticssSubMenuOpen: true,
        isExaminationSubMenuOpen: false,
        isSoftwareSubMenuOpen: false,
        isDataManagementSubMenuOpen: false,
        isTreatmentOrSurgicalSubMenuOpen: false,
      };
    });
  };
  // products examination menu toggle
  const toggleProductsExaminationMenu = () => {
    setNavSubMenu((prev) => {
      return {
        ...prev,
        isDiagnosticssSubMenuOpen: false,
        isExaminationSubMenuOpen: true,
        isSoftwareSubMenuOpen: false,
        isDataManagementSubMenuOpen: false,
        isTreatmentOrSurgicalSubMenuOpen: false,
      };
    });
  };
  // products software menu toggle
  const toggleProductsSoftwareMenu = () => {
    setNavSubMenu((prev) => {
      return {
        ...prev,
        isDiagnosticssSubMenuOpen: false,
        isExaminationSubMenuOpen: false,
        isSoftwareSubMenuOpen: true,
        isDataManagementSubMenuOpen: false,
        isTreatmentOrSurgicalSubMenuOpen: false,
      };
    });
  };
  // products data management menu toggle
  const toggleProductsDataManagementMenu = () => {
    setNavSubMenu((prev) => {
      return {
        ...prev,
        isDiagnosticssSubMenuOpen: false,
        isExaminationSubMenuOpen: false,
        isSoftwareSubMenuOpen: false,
        isDataManagementSubMenuOpen: true,
        isTreatmentOrSurgicalSubMenuOpen: false,
      };
    });
  };
  // products treatment and surgical menu toggle
  const toggleProductsTreatmentAndSurgicalMenu = () => {
    setNavSubMenu((prev) => {
      return {
        ...prev,
        isDiagnosticssSubMenuOpen: false,
        isExaminationSubMenuOpen: false,
        isSoftwareSubMenuOpen: false,
        isDataManagementSubMenuOpen: false,
        isTreatmentOrSurgicalSubMenuOpen: true,
      };
    });
  };

  return (
    <nav className="sticky top-0">
      <div className=" w-full">
        <div className="flex flex-row justify-between gap-4 bg-gradient-to-r from-[#ADD8E6] to-[#00008B] text-white px-36 py-8 shadow-md ">
          <div className="text-3xl">
            Advanced <span className="font-thin">Lifescience</span>
          </div>
          <div className="flex flex-row gap-6 text-base font-medium">
            <div className="px-2">
              <Link href="/">HOME</Link>
            </div>

            <div className="px-2" onClick={() => toggleProductsMenu()}>
              <Products />
            </div>
            <div className="px-2" onClick={() => toggleCompanyMenu()}>
              <Company />
            </div>
            <div className="px-2" onClick={() => toggleSupportMenu()}>
              <Support />
            </div>
            <div className="px-2" onClick={() => toggleNewsAndEventsMenu()}>
              <NewsAndEvents />
            </div>
          </div>
        </div>
        {navSubMenu.isProductsMenuOpen && (
          <div className="navSubMenu absolute z-50 w-full bg-[#dfdfdf] px-5 py-2 ">
            <div className="flex justify-between items-start ">
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
                  navSubMenu.isDataManagementSubMenuOpen
                    ? "headingUnderline"
                    : ""
                } font-bold text-lg text-[#00008B] cursor-pointer`}
                onClick={() => toggleProductsDataManagementMenu()}
              >
                DATA MANAGEMENT
              </div>
              <div
                className={`${
                  navSubMenu.isTreatmentOrSurgicalSubMenuOpen
                    ? "headingUnderline"
                    : ""
                } font-bold text-lg text-[#00008B] cursor-pointer`}
                onClick={() => toggleProductsTreatmentAndSurgicalMenu()}
              >
                TREATMENT/SURGICAL
              </div>
              <div
                className="rounded-full padding-4 cursor-pointer"
                onClick={() => toggleProductsMenu()}
              >
                <IoMdClose size={30} />
              </div>
            </div>
            {navSubMenu.isDiagnosticssSubMenuOpen && (
              <Diagnostics toggleProductsMenu={toggleProductsMenu} />
            )}
            {navSubMenu.isExaminationSubMenuOpen && (
              <EXAMINATION toggleProductsMenu={toggleProductsMenu} />
            )}
            {navSubMenu.isSoftwareSubMenuOpen && (
              <Software toggleProductsMenu={toggleProductsMenu} />
            )}
            {navSubMenu.isDataManagementSubMenuOpen && (
              <DataManagement toggleProductsMenu={toggleProductsMenu} />
            )}
            {navSubMenu.isTreatmentOrSurgicalSubMenuOpen && (
              <TreatmentAndSurgical toggleProductsMenu={toggleProductsMenu} />
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
