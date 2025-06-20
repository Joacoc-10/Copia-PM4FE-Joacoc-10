import React from "react";
import RegisterForm from "./components/RegisterFormUI";

const RegisterPage = () => {
  return (
    <>
      <h1 className="pb-4 mb-8 text-4xl font-extrabold text-center border-b-2 text-secondary_yellow-500 border-secondary_yellow-500">
        Registro de usuario
      </h1>
      <RegisterForm />
    </>
  );
};

export default RegisterPage;
