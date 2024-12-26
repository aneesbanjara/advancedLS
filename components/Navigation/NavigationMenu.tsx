"use client";
import Products from "./Products";
import Company from "./Company";
import Support from "./Support";
import NewsAndEvents from "./NewsAndEvents";
import Link from "next/link";

export default function NavigationMenu() {
  return (
    <nav className="sticky top-0">
      <div className="flex flex-row justify-between gap-4 bg-gradient-to-r from-[#ADD8E6] to-[#00008B] text-white px-36 py-8 shadow-md">
        <div className="text-3xl">
          Advanced <span className="font-thin">Lifescience</span>
        </div>
        <div className="flex flex-row gap-6 text-base font-medium">
          <div className="px-2">
            <Link href="/">HOME</Link>
          </div>

          <div className="px-2">
            <Products />
          </div>
          <div className="px-2">
            <Company />
          </div>
          <div className="px-2">
            <Support />
          </div>
          <div className="px-2">
            <NewsAndEvents />
          </div>
        </div>
      </div>
    </nav>
  );
}
