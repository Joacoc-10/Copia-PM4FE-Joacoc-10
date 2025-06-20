"use client";

import { postLogin } from "@/app/services/auth";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useAuthContext } from "@/context/authContext";
import usePublic from "@/hooks/usePublic";
import { Routes } from "@/routes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

export interface FormDataLogin {
  email: string;
  password: string;
}
const LoginFormUI = () => {
  usePublic();
  const router = useRouter();
  const { saveUserData } = useAuthContext();

  const [formData, setFormData] = useState<FormDataLogin>({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState<FormDataLogin>({
    email: "",
    password: "",
  });
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((state) => ({
      ...state,
      [name]: value,
    }));
    if (hasBeenSubmitted) {
      validate();
    }
  };

  const validate = () => {
    const emailPattern = /^[^\s@]+[^\s@]+\.[^\s@]+$/;
    const errors: FormDataLogin = { email: "", password: "" };

    if (!emailPattern.test(formData.email)) {
      return errors.email = "Ingrese un correo electrónico valido.";
    }
    if (formData.password.length < 8) {
     return  errors.password = "La contraseña debe de tener al menos 8 caracteres.";
    }

    setFormErrors(errors);

    return !errors.email && !errors.password;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHasBeenSubmitted(true);
    validate();

    try {
        setLoading(true)
      const res = await postLogin(formData);
      if (res.errors) {
        console.log("error", res);
        return toast.error("Error al iniciar sesión");
      }
      const {user, ...data} = res.data;
      const { ...rest } = user;
      saveUserData({...data , user: rest});
      toast.success("Haz iniciado seión correctamente");
      setTimeout(() => {
        router.push(Routes.home);
      }, 2100);
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(`Ocurrió un error al iniciar sesión: ${error.message}`);
        console.warn("Login error:", error); 
      } else {
        toast.error("Ocurrió un error al iniciar sesión.");
        console.warn("Error desconocido durante el login:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <Input
            type="text"
            name="email"
            id="email"
            label="Correo electronico"
            autoComplete="email"
            value={formData.email}
            onChange={onChange}
            required
            classNameContainer="mb-8 w-full"
            inputClassName="bg-light_blue-300 py-2 px-4"
            labelClassName="text-lg font-extrabold text-secondary_yellow-500"
          />
          {formErrors.email && (
            <p className="mb-2 text-sm text-red-500">{formErrors.email}</p>
          )}
          <Input
            id="paswword"
            label="Contraseña"
            type="password"
            name="password"
            value={formData.password}
            onChange={onChange}
            required
            classNameContainer="mb-8 w-full"
            inputClassName="bg-light_blue-300 py-2 px-4"
            labelClassName="text-lg font-extrabold text-secondary_yellow-500"
          />
          <div>
            <Button
              type="submit"
              className="w-full mt-auto text-lg font-extrabold hover:bg-accent_blue-600"
              label="Iniciar sesion"
              loading={loading}
            ></Button>
          </div>
          <div className="flex justify-center mt-6">
            <Link
              href={Routes.register}
              className="text-primary_blue-400 hover:text-secondary_yellow-500"
            >
              ¿Aún no te has registrado? Registrate!
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginFormUI;
