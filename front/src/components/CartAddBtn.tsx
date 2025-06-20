"use client";
import React from "react";
import Button from "./ui/Button";
import { useAuthContext } from "@/context/authContext";
import Swal from "sweetalert2";
import { Routes } from "@/routes";
import { useCartContext } from "@/context/cartContext";


const CartAddBtn = ({product}: {product: Partial<IProduct>
}) => {

  const { isAuth } = useAuthContext();
  const {addToCart, isProductInCart} = useCartContext();
  
  const onAddClick = () => {
    
    
    if (isAuth === null) {
      Swal.fire({
        icon: "info",
        title: "Cargando...",
        text: "Verificando tu estado de sesión, por favor espera.",
        showConfirmButton: false,
        timer: 1500 
      });
      return; 
    }
    
    if (!isAuth) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Debes iniciar sesión para agregar el elemento al carrito",
        footer: `<a href="${Routes.login}" style="color: #007bff; text-decoration: underline;">Iniciar sesión!</a>`,
        allowOutsideClick: true,
        allowEscapeKey: true,    
      });
    } else {
      addToCart(product);
      Swal.fire({
        icon: "success",
        title: "¡Producto añadido!",
        text: "El producto se ha agregado a tu carrito.",
        showConfirmButton: false,
        timer: 1500 
      });
      
    }  
  }
  
  return(
    <>
    <Button label="Añadir al carrito" className="w-full" onClick={onAddClick} disabled={isProductInCart(product.id || 0)}></Button>
    </>
  )
}

export default CartAddBtn;