"use client";

import React, { FC } from "react";
import Link from "next/link";
import cs from "classnames";
import { usePathname } from "next/navigation";

export interface NavbarItemProps {
  label: string;
  href?: string;
  isActive?: boolean;
}

const NavbarItem: FC<NavbarItemProps> = ({
  label,
  href = "#",
  isActive = false,
}) => {
  const pathname = usePathname();
  const isCurrentPage = pathname === href;

  return (
    <>
      <li>
        <Link
          href={href}
          className={cs(
            "block py-2 px-3 text-secondary_yellow-500 rounded-sm hover:bg-primary_blue-400 md:hover:bg-transparent md:hover:text-light_blue-500 md:p-0",
            (isActive || isCurrentPage) &&
              "block py-2 px-3 text-secondary_yellow-600 rounded-sm"
          )}
        >
          {label}
        </Link>
      </li>
    </>
  );
};

export default NavbarItem;
