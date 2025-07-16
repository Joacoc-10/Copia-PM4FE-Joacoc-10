"use client";
import React from "react";
import Button from "../Button";
import Link from "next/link";
import { Routes } from "@/routes";
import { useAuthContext } from "@/context/authContext";
import { FiLogOut } from "react-icons/fi";
import { IoCart } from "react-icons/io5";
import { useCartContext } from "@/context/cartContext";
import Loader from "../Loader/Loader";

const AuthNav = () => {
  const { user, isAuth, resetUserData } = useAuthContext();
  const { total, resetCart } = useCartContext();
  console.log("user", user);

  const logout = () => {
    resetUserData();
    resetCart();
    location.href = Routes.home;
  };

  if (isAuth === null) {
    return <Loader/>;
  }

  if (isAuth) {
    return (
      <div className="flex items-center justify-end space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
        <Link href={Routes.cart}>
          <div className="relative">
            <IoCart className="mr-4 text-xl text-secondary_yellow-500" />
            {Boolean(total) && (
              <span className="absolute text-xs font-bold -top-3 left-4 text-secondary_yellow-500">
                {total}
              </span>
            )}
          </div>
        </Link>
        <Link href={Routes.profile}>
          <span className="self-center mr-4 text-extrabold text-[1.5em] text-secondary_yellow-500">
            {user?.name || "Nombre de Usuario"}
          </span>
        </Link>
        <button onClick={logout} className="text-xl text-secondary_yellow-500">
          {" "}
          <FiLogOut />{" "}
        </button>
      </div>
    );
  }

  return (
    <div className="flex justify-end space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
      <Link href={Routes.register}>
        <Button label="Registrarse"></Button>
      </Link>
      <Link href={Routes.login}>
        <Button label="Iniciar sesión"></Button>
      </Link>
    </div>
  );
};

export default AuthNav;
