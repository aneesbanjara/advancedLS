"use client";
import Products from "./Products";
import Company from "./Company";
import Support from "./Support";
import NewsAndEvents from "./NewsAndEvents";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Diagnostics from "./navproducts/Diagnostics";
import EXAMINATION from "./navproducts/Examination";
import TreatmentAndSurgical from "./navproducts/TreatmentAndSurgical";
import Software from "./navproducts/Software";
import DataManagement from "./navproducts/DataManagement";
import ProductNavSubMenu from "./navproducts/productsNavSubMenu/ProductNavSubMenu";
import CompanyNavSubMenu from "./navproducts/companyNavSubMenu/CompanyNavSubMenu";
import SupportNavSubMenu from "./navproducts/supportNavSubMenu/supportNavSubMenu";
import NewsAndEventsNavSubMenu from "./navproducts/newsAndEventsNavSubMenu/NewsAndEventsNavSubMenu";

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
        isCompanyMenuOpen: false,
        isSupportMenuOpen: false,
        isNewsAndEventsMenuOpen: false,
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
        isSupportMenuOpen: false,
        isNewsAndEventsMenuOpen: false,
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
        isProductsMenuOpen: false,
        isCompanyMenuOpen: false,
        isNewsAndEventsMenuOpen: false,
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
        isProductsMenuOpen: false,
        isCompanyMenuOpen: false,
        isSupportMenuOpen: false,
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

  const productsMenuRef = useRef<HTMLDivElement | null>(null);
  const companyMenuRef = useRef<HTMLDivElement | null>(null);
  const supportMenuRef = useRef<HTMLDivElement | null>(null);
  const newsAndEventsMenuRef = useRef<HTMLDivElement | null>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      productsMenuRef.current &&
      !productsMenuRef.current.contains(event.target as Node) &&
      companyMenuRef.current &&
      !companyMenuRef.current.contains(event.target as Node) &&
      supportMenuRef.current &&
      !supportMenuRef.current.contains(event.target as Node) &&
      newsAndEventsMenuRef.current &&
      !newsAndEventsMenuRef.current.contains(event.target as Node)
    ) {
      setNavSubMenu((prev) => ({
        ...prev,
        isProductsMenuOpen: false,
        isCompanyMenuOpen: false,
        isSupportMenuOpen: false,
        isNewsAndEventsMenuOpen: false,
      }));
    }
  };

  useEffect(() => {
    if (
      navSubMenu.isProductsMenuOpen ||
      navSubMenu.isCompanyMenuOpen ||
      navSubMenu.isSupportMenuOpen ||
      navSubMenu.isNewsAndEventsMenuOpen
    ) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [
    navSubMenu.isProductsMenuOpen,
    navSubMenu.isCompanyMenuOpen,
    navSubMenu.isSupportMenuOpen,
    navSubMenu.isNewsAndEventsMenuOpen,
  ]);

  return (
    <nav className="sticky top-0">
      <div className=" w-full">
        <div className="flex flex-row justify-between gap-4 bg-gradient-to-r from-[#0044cc] to-[#0088ff] text-white px-36 py-8 shadow-md ">
          <div className="text-3xl">
            Advanced <span className="font-thin">Lifescience</span>
          </div>
          <div className="flex flex-row gap-6 text-base font-medium">
            <div className="px-2">
              <Link href="/">HOME</Link>
            </div>

            <div
              className="px-2"
              onClick={(e) => {
                e.stopPropagation();
                toggleProductsMenu();
              }}
            >
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
        <div
          ref={productsMenuRef}
          className={`navSubMenu ${
            navSubMenu.isProductsMenuOpen ? "navSubMenuOpen" : ""
          } absolute z-50 w-full bg-[#f5f8fa] px-5 py-2`}
        >
          <div className="flex justify-between items-start ">
            <ProductNavSubMenu
              navSubMenu={navSubMenu}
              toggleProductsDiagnosticsMenu={toggleProductsDiagnosticsMenu}
              toggleProductsExaminationMenu={toggleProductsExaminationMenu}
              toggleProductsSoftwareMenu={toggleProductsSoftwareMenu}
              toggleProductsDataManagementMenu={
                toggleProductsDataManagementMenu
              }
              toggleProductsTreatmentAndSurgicalMenu={
                toggleProductsTreatmentAndSurgicalMenu
              }
              toggleProductsMenu={toggleProductsMenu}
            />
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
        <div
          ref={companyMenuRef}
          className={`navSubMenu ${
            navSubMenu.isCompanyMenuOpen ? "navSubMenuOpen" : ""
          } absolute z-50 w-full bg-[#f5f8fa] px-5 py-2`}
        >
          <CompanyNavSubMenu toggleCompanyMenu={toggleCompanyMenu} />
        </div>
        <div
          ref={supportMenuRef}
          className={`navSubMenu ${
            navSubMenu.isSupportMenuOpen ? "navSubMenuOpen" : ""
          } absolute z-50 w-full bg-[#f5f8fa] px-5 py-2`}
        >
          <SupportNavSubMenu toggleSupportMenu={toggleSupportMenu} />
        </div>
        <div
          ref={newsAndEventsMenuRef}
          className={`navSubMenu ${
            navSubMenu.isNewsAndEventsMenuOpen ? "navSubMenuOpen" : ""
          } absolute z-50 w-full bg-[#f5f8fa] px-5 py-2`}
        >
          <NewsAndEventsNavSubMenu
            toggleNewsAndEventsMenu={toggleNewsAndEventsMenu}
          />
        </div>
      </div>
    </nav>
  );
}
