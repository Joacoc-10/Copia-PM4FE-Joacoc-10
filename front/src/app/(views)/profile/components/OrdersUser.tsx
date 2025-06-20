"use client";
import { getOrdersUser } from "@/app/services/orders";
import { useAuthContext } from "@/context/authContext";
import { Routes } from "@/routes";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const OrdersUser = () => {
  const router = useRouter();
  const {token} = useAuthContext();
  const [orders, setOrders] = useState<IOrder[] | null> (null);
  

  useEffect(() => {
    const res = async () => {
      try{
        if(!token){
          console.warn("No token found, cannot fetch orders")
          return router.push(Routes.login)
        }
        const response = await getOrdersUser(token)
        setOrders(response);
      } catch (error){
        console.warn("Error fetching orders:", error)
      }
    };
    res();
  },[token,router])
  
  if( orders === null) {
    return <p className="py-4 text-lg text-center text-primary_blue-400">Cargando ordenes...</p>
  }
  
  return (
    <>
      {orders.length > 0 ? (
        <div className="space-y-6">
          {orders.slice().reverse().map((order, index) => (
            <div
              key={order.id}
              className="p-4 border rounded-md shadow-sm bg-light_blue-300 border-light_blue-400"
            >
              <h3 className="mb-2 text-xl font-semibold md:text-2xl text-primary_blue-600">
                Orden #{orders.length - index}
              </h3>
              <p className="mb-1 text-base text-primary_blue-500">
                <strong className="text-accent_blue-500">Estado:</strong>
                <span>{order.status}</span>
              </p>
              <p className="mb-2 text-base text-primary_blue-500">
                <strong className="text-accent_blue-500">Fecha:</strong>
                <span>{new Date(order.date).toLocaleDateString()}</span>
              </p>
              <p className="mb-1 text-base font-semibold text-accent_blue-500">
                Productos:
              </p>
              <ul className="pl-4 space-y-1 list-disc list-inside text-primary_blue-400">
                {order.products.map((product) => (
                  <li key={product.id}>
                    <span className="font-semibold">{product.name}</span>
                    (x1)
                    <span className="font-bold">
                      ${product.price.toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-lg font-bold text-right text-primary_blue-700">
                Total: $
                {order.products
                  .reduce((total, product) => total + product.price, 0)
                  .toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="py-4 text-lg text-center text-primary_blue-400">
          Aún no hay órdenes registradas.
        </p>
      )}
    </>
  );
};

export default OrdersUser;
