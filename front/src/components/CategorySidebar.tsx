"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { categories } from "@/helpers/categories";
import { Routes } from "@/routes";

interface CategorySidebarProps {
  activeCategory?: string | number;
}

const CategorySidebar: React.FC<CategorySidebarProps> = ({
  activeCategory,
}) => {
  const router = useRouter();

  return (
    <div className="w-1/4 pr-4 border-r border-primary_blue-200">
      <h1 className="mb-6 text-3xl font-extrabold text-gray-800 border-b border-primary_blue-200">Categorías</h1>

      <div
        className={`
          cursor-pointer
          py-3 px-4
          mb-2
          text-lg
          rounded-lg
          border-2
          border-transparent
          hover:bg-secondary_yellow-400
         hover:border-primary_blue-200
          transition-all duration-200
          flex items-center
          justify-center
          text-center
          ${
            activeCategory === "0" || !activeCategory
              ? "font-semibold bg-secondary_yellow-400 border-seconday_yellow-500 text-primary_blue-400"
              : "text-gray-700"
          }
        `}
        onClick={() => {
          router.push(Routes.products + "/0");
        }}
      >
        Todas las categorías
      </div>

      {categories.map((cat) => (
        <div
          key={cat.id}
          className={`
            cursor-pointer
            py-3 px-4
            mb-2
            text-lg
            rounded-lg
            border-2
            border-transparent
            hover:bg-secondary_yellow-400
            hover:border-primary_blue-200
            transition-all duration-200
            flex items-center
            justify-center
            text-center
            ${
              Number(activeCategory) === cat.id
                ? "font-semibold bg-secondary_yellow-400 border-seconday_yellow-500 text-primary_blue-400"
                : "text-gray-700"
            }
          `}
          onClick={() => {
            router.push(Routes.products + `/${cat.id}`);
          }}
        >
          {cat.name}
        </div>
      ))}
    </div>
  );
};

export default CategorySidebar;
