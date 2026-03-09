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
import { RxHamburgerMenu } from "react-icons/rx";

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
  isMobileMenuOpen: boolean;
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
    isMobileMenuOpen: false,
  });

  const toggleMobileMenu = () => {
    setNavSubMenu((prev) => {
      return {
        ...prev,
        isProductsMenuOpen: false,
        isDiagnosticssSubMenuOpen: false,
        isExaminationSubMenuOpen: false,
        isTreatmentOrSurgicalSubMenuOpen: false,
        isCompanyMenuOpen: false,
        isSupportMenuOpen: false,
        isNewsAndEventsMenuOpen: false,
        isMobileMenuOpen: !prev.isMobileMenuOpen,
      };
    });
  };
  const toggleHomeMenu = () => {
    setNavSubMenu((prev) => {
      return {
        ...prev,
        isProductsMenuOpen: false,
        isDiagnosticssSubMenuOpen: false,
        isExaminationSubMenuOpen: false,
        isTreatmentOrSurgicalSubMenuOpen: false,
        isCompanyMenuOpen: false,
        isSupportMenuOpen: false,
        isNewsAndEventsMenuOpen: false,
        isMobileMenuOpen: false,
      };
    });
  };

  // products open with diagnostics default
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
        isMobileMenuOpen: false,
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
        isMobileMenuOpen: false,
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
        isMobileMenuOpen: false,
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
        isMobileMenuOpen: false,
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
        isMobileMenuOpen: false,
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
        isMobileMenuOpen: false,
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
        isMobileMenuOpen: false,
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
        isMobileMenuOpen: false,
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
        isMobileMenuOpen: false,
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
        isMobileMenuOpen: false,
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
    <nav className="sticky top-0 z-100">
      <div className=" w-full">
        <div className="flex justify-between items-center bg-gradient-to-r from-[#6b21a8] to-[#0d9488] text-white px-6 md:px-24 py-2 md:py-4 shadow-md">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-1 bg-white/50 rounded"></div>
            <div className="flex flex-col justify-center">
              <div className="text-2xl font-semibold text-white tracking-wide">
                Advanced
              </div>
              <div className="text-xs font-medium text-white/70 uppercase">
                Lifescience Technologies
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => toggleMobileMenu()}>
              <RxHamburgerMenu />
            </button>
          </div>

          <div className="hidden md:flex flex-row gap-6 text-base md:text-lg font-medium tracking-wide items-center">
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
        {navSubMenu.isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-gradient-to-r from-[#6b21a8] to-[#0d9488] flex flex-col items-start px-8 py-4 md:hidden z-50">
            {/* You can reuse the same nav items here */}
            <Link
              href="/"
              className="py-2 text-white w-full hover:underline"
              onClick={() => toggleHomeMenu()}
            >
              HOME
            </Link>
            <div
              onClick={() => toggleProductsMenu()}
              className="py-2 text-white w-full cursor-pointer"
            >
              PRODUCTS
            </div>
            <div
              onClick={() => toggleCompanyMenu()}
              className="py-2 text-white w-full cursor-pointer"
            >
              ORGANIZATION
            </div>
            <div
              onClick={() => toggleSupportMenu()}
              className="py-2 text-white w-full cursor-pointer"
            >
              SUPPORT
            </div>
            <div
              onClick={() => toggleNewsAndEventsMenu()}
              className="py-2 text-white w-full cursor-pointer"
            >
              MEDIA CENTER
            </div>
          </div>
        )}
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
