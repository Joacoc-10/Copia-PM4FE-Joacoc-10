"use client"; 
import React, { useState } from "react";

interface MobileMenuButtonProps {
  children: React.ReactNode; 
}

const NavbarResponsive: React.FC<MobileMenuButtonProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      
      <button
        onClick={toggleMenu}
        type="button"
        className="inline-flex items-center justify-center w-10 h-10 p-2 rounded-lg text-secondary_yellow-500 md:hidden hover:bg-primary_blue-400 focus:outline-none focus:ring-2 focus:ring-secondary_yellow-500 dark:text-secondary_yellow-500 dark:hover:bg-primary_blue-400 dark:focus:ring-secondary_yellow-500"
        aria-controls="navbar-sticky"
        aria-expanded={isMenuOpen ? "true" : "false"}
      >
        <span className="sr-only">Abrir menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } items-center justify-between w-full md:flex md:w-auto md:order-1`}
        id="navbar-sticky"
      >
        <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-primary_blue-500 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
          {children} 
        </ul>
      </div>
    </>
  );
};

export default NavbarResponsive;