import React from "react";
import LoginFormUI from "./components/LoginFormUI";

const LoginPage = () => {
  return (
    <>
      <h1 className="pb-4 mb-8 text-4xl font-extrabold text-center border-b-2 text-secondary_yellow-500 border-secondary_yellow-500">
        Inicio de sesión
      </h1>
      <LoginFormUI />
    </>
  );
};

export default LoginPage;
