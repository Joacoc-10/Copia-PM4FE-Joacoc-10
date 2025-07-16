import React from "react";
import Container from "@/components/ui/Container";
import CreateOrderBtn from "./components/CreateOrderBtn";
import RenderProducts from "./components/RenderProducts";

const CartPage = () => {
  return (
    <>
      <Container>
        <div className="max-w-6xl p-4 mx-auto mt-16 border rounded-lg shadow-2xl md:p-8 animate-bg-color-change">
          <h1 className="mb-8 text-4xl font-extrabold text-center md:text-5xl text-light_black-500">
            Carrito de Compras
          </h1>

          <div className="p-6 mb-10 border rounded-lg shadow-inner bg-secondary_yellow-300 border-primary_blue-200">
            <h2 className="mb-6 text-2xl font-bold md:text-3xl text-primary_blue-500">
              Productos en tu Carrito:
            </h2>
            <RenderProducts />
          </div>

          <div className="p-6 border rounded-lg shadow-inner bg-secondary_yellow-400 border-primary_blue-200">
            <h2 className="mb-6 text-2xl font-bold border-b-2 border-primary_blue-100 md:text-3xl text-light_black-500">
              Resumen de orden
            </h2>

            <div id="total-container"/>

            <div className="flex justify-end">
              <CreateOrderBtn />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CartPage;
