import React from "react";
import Link from "next/link";
import { Routes } from "@/routes";
import { NavbarLinks } from "@/constants/Navbar";
import NavbarItem from "./NavbarItem"; 
import AuthNav from "./AuthNav"; 
import NavbarResponsive from "./NavbarResposive";

const Navbar = () => {
  return (
    <nav className="top-0 z-20 w-full border-b border-gray-200 bg-primary_blue-500 dark:bg-gray-900 start-0 dark:border-600">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <Link
          href={Routes.home}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-[2em] font-semibold whitespace-nowrap text-secondary_yellow-500">
            FuturaTech
          </span>
        </Link>

        
        <div className="flex items-center justify-end w-full md:w-auto md:flex-1 md:justify-center md:order-1"> 
          <NavbarResponsive>
            {NavbarLinks.map((item) => (
              <NavbarItem
                key={item.label}
                label={item.label}
                href={item.href}
              />
            ))}
          </NavbarResponsive>
        </div>

        <div className="flex items-center md:order-2 md:ml-auto"> 
          <AuthNav/>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
