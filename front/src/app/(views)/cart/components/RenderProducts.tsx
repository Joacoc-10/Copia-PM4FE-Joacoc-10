"use client";

import GenericPortal from "@/components/GenericPortal";
import { useCartContext } from "@/context/cartContext";
import Image from "next/image";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const RenderProducts = () => {
  const { cart, removeFromCart,priceTotal } = useCartContext();
  const showCartItems = cart && cart.length > 0;

  // const calculateTotal = (items: Partial<IProduct>[]) => {
  //   return items.reduce(
  //     (total: number, item: Partial<IProduct>) => total + (item.price || 0),
  //     0
  //   );
  // };

  const onDelete = (crrP: Partial<IProduct>) => {
    if (crrP.id) {
      removeFromCart(crrP.id);
    }
    toast.success(`${crrP.name} eliminado del carrito`);
  };
  
  return (
    <>
      {showCartItems ? (
        <div className="space-y-6">
          {cart.map((product) => (
            <div
              key={product.id}
              className="relative flex flex-col items-center p-4 border rounded-md shadow-md md:flex-row bg-secondary_yellow-400 border-primary_blue-200"
            >
              <div className="relative flex-shrink-0 w-32 h-32 mr-4 overflow-hidden rounded-md shadow-sm md:w-24 md:h-24">
                <Image
                  fill
                  src={product.image || "/docs/images/products/apple-watch.png"}
                  alt={product.name || "Imagen del Producto"}
                  className="object-cover"
                />
              </div>
              <div className="flex-grow mt-4 text-center md:text-left md:mt-0">
                <h3 className="mb-1 text-xl font-semibold md:text-2xl text-primary_blue-500">
                  {product.name}
                </h3>
                <p className="mb-1 text-base text-primary_blue-400">
                  <strong>Precio:</strong>
                  <span className="font-bold text-primary_blue-800">
                    ${product.price}
                  </span>
                </p>
                <p className="text-sm italic text-primary_blue-400">
                  <strong>Descripción:</strong>
                  {product.description}
                </p>
              </div>
              <FaTrashAlt
                onClick={() => onDelete(product)}
                className="absolute p-1 text-2xl rounded text-primary_blue-500 top-2 right-2 hover:text-primary_blue-700 hover:bg-primary_blue-100"
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="py-4 text-lg text-center text-primary_blue-400">
          Parece que tu carrito está vacío. ¡Explora nuestros productos!
        </p>
      )}

      <GenericPortal containerId="total-container">
        <div className="mt-10 mb-4 text-2xl font-semibold text-center md:text-3xl text-primary_blue-800 md:text-center">
          Total:
          <p className="font-extrabold text-accent_blue-500">
            ${priceTotal.toFixed(2)}
          </p>
        </div>
      </GenericPortal>
    </>
  );
};

export default RenderProducts;
