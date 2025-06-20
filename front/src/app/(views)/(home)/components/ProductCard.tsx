import React, { FC } from "react";
import Image from "next/image";
import { Routes } from "@/routes";
import Link from "next/link";
import CartAddBtn from "@/components/CartAddBtn";

const ProductCard: FC<Partial<IProduct>> = (product) => {
  const {
    name,
    description,
    price,
    stock,
    image,
    id,
  } = product;
  const generateUrl = (id: string | number) => {
    return `${Routes.product_detail}/${id}/${name
      ?.toLowerCase()
      .replace(/\s+/g, "-")}`;
  };
  return (
    <>
      <div className="flex w-[70vw] mx-auto bg-light_blue-300 border border-gray-200 rounded-lg shadow-md overflow-hidden">
        <div className="w-1/3 h-auto ">
          <Link
            href={generateUrl(id || "default-id")}
            className="relative block w-full h-full"
          >
            <Image
              fill
              src={
                image ||
                "https://ik.imagekit.io/i1pxujmp5t/Proyecto%20M4%20Henry/Apple%20watch%20serie%206.jpg?updatedAt=1749331032602"
              }
              alt={name || "Imagen del Producto"}
              className="object-cover"
              // sizes="(max-width: 768px) 100vw, 33vw"
            />
          </Link>
        </div>

        <div className="flex flex-col justify-between w-2/3 p-5">
          <div>
            <Link href={generateUrl(name || "default-id")}>
              <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {name || "Nombre del Producto"}
              </h5>
            </Link>
            <p className="mb-4 text-sm text-gray-500 line-clamp-3">
              {description || "Descripcion no disponible"}
            </p>
            <div className="mb-4">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm">
                {stock ? `${stock} en stock` : "Agotado"}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2">
          
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {price ? `$${price}` : "Precio no disponible"}
            </span>
            <CartAddBtn product={product}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
