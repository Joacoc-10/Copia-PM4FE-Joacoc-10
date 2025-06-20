import { NavbarLinks } from "@/constants/Navbar";
import React from "react";
import NavbarItem from "./NavbarItem";
import Link from "next/link";
import { Routes } from "@/routes";
import AuthNav from "./AuthNav";

const Navbar = () => {
  return (
    <>
      <nav className="top-0 z-20 w-full border-b border-gray-200 bg-primary_blue-500 dark:bg-gray-900 start-0 dark:border-gray-600">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
          <Link
            href={Routes.home}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-[2em] font-semibold whitespace-nowrap text-secondary_yellow-500">
              FuturaTech
            </span>
          </Link>
          <AuthNav/>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-primary_blue-500 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              {NavbarLinks.map((item) => (
                <NavbarItem
                  key={item.label}
                  label={item.label}
                  href={item.href}
                />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
