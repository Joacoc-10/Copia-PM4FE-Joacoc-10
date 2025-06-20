import React from "react";
import DataUser from "./components/DataUser";
import OrdersUser from "./components/OrdersUser";

const ProfilePage = () => {

  return (
    <>
      <div className="flex items-center justify-center min-h-screen p-4 bg-primary_blue-100">
        <div className="w-full max-w-4xl p-6 mx-auto border rounded-lg shadow-2xl bg-light_blue-100 border-light_blue-30 md:p-8">
          <h1 className="mb-8 text-4xl font-extrabold text-center md:text-5xl text-primary_blue-700">
            Perfil de Usuario
          </h1>

          <div className="p-6 mb-10 border rounded-lg shadow-inner bg-light_blue-200 border-light_blue-300">
            <h3 className="pb-3 mb-6 text-2xl font-bold border-b md:text-3xl text-primary_blue-500 border-light_blue-400">
              Información del Usuario
            </h3>
            <div className="space-y-3 text-lg text-primary_blue-400">
             <DataUser/>
            </div>
          </div>

          <div className="p-6 border rounded-lg shadow-inner bg-light_blue-200 border-light_blue-300">
            <h2 className="pb-3 mb-6 text-2xl font-bold border-b md:text-3xl text-primary_blue-500 border-light_blue-400">
              Órdenes Realizadas
            </h2>
           <OrdersUser/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
