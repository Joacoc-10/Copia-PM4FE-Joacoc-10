"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button";
import { useAuthContext } from "@/context/authContext"; 
import { useCartContext } from "@/context/cartContext"; 
import usePrivate from "@/hooks/usePrivate"; 
import Swal from "sweetalert2";
import { postOrder } from "@/app/services/orders";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";


export interface CreateOrderPayload {
  products: number[];
  userId: number;
}

const CreateOrderBtn: React.FC = () => {
  const router = useRouter();
  usePrivate(); 
  const { user, token } = useAuthContext(); 
  const { cart, resetCart } = useCartContext(); 

  const [isCreatingOrder, setIsCreatingOrder] = useState(false);

  const handleCreateOrder = async () => {
    setIsCreatingOrder(true);

    const payload: CreateOrderPayload = {
      userId: user?.id as number, 
      products: cart.map((item) => item.id as number),
    };

    if (cart.length === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Carrito vacío',
        text: 'Agrega productos a tu carrito antes de completar la orden.',
      });
      setIsCreatingOrder(false); 
      return; 
    }
    
    const result = await Swal.fire({
      title: '¿Estás seguro de completar la orden?',
      text: "¡No podrás revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, ¡finalizar compra!',
      cancelButtonText: 'Cancelar',
      allowOutsideClick: false, 
      allowEscapeKey: false,     
    });

    if (result.isConfirmed) {
      try {
        const orderResponse = await postOrder(payload, token as string); 

        console.log("Orden creada exitosamente:", orderResponse);

        Swal.fire({
          title: '¡Compra Exitosa!',
          text: 'Tu pedido ha sido procesado con éxito. ¡Gracias por tu compra!',
          icon: 'success',
          confirmButtonText: 'Ok'
        });

        resetCart(); 

        router.push(`/profile`);

      } catch (error: unknown) { 
        if (error instanceof AxiosError) {
          console.error("Error de Axios al crear la orden:", error.response?.data || error.message);
          Swal.fire({
            icon: 'error',
            title: 'Error al procesar la compra',
            text: error.response?.data?.message || 'Hubo un problema al crear tu orden. Por favor, inténtalo de nuevo.',
          });
        } else if (error instanceof Error) {
          console.error("Error al crear la orden:", error.message);
          Swal.fire({
            icon: 'error',
            title: 'Error al procesar la compra',
            text: `Hubo un problema al crear tu orden: ${error.message}. Por favor, inténtalo de nuevo.`,
          });
        } 
      } finally {
        setIsCreatingOrder(false);
      }
    } else {
      Swal.fire(
        'Compra Cancelada',
        'Tu pedido no ha sido completado.',
        'info'
      );
      setIsCreatingOrder(false); 
    }
  };

  return (
    <Button
      variant="light"
      label={isCreatingOrder ? "Procesando..." : "Completar orden"}
      className="px-10 py-4"
      onClick={handleCreateOrder}
      disabled={isCreatingOrder || cart.length === 0} 
      loading={isCreatingOrder} 
    />
  );
}

export default CreateOrderBtn;