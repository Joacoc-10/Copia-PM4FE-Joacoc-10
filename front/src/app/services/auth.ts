"use server";
import axios from "axios";
import { FormDataRegister } from "../(static)/(auth)/register/components/RegisterFormUI";
import { FormDataLogin } from "../(static)/(auth)/login/components/LoginFormUI";

const axiosApiBack = axios.create({
  baseURL: process.env.API_URL,
});

export const postRegister = async (data: FormDataRegister) => {
  try {
    const res = await axiosApiBack.post("/users/register", data);
    if (!res.data) {
      console.warn("Invalid post register data format", res.data);
      return {
        message: "Error al registrar el usuario",
        errors: res.data,
      };
    }
    return {
      message: "Usuario registrado correctamente",
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.warn("Error fetching post register", error?.message);
    }
    return {
      message: "Error al registrar el usuario",
      errors: (error as Error).message || "Error desconocido",
    };
  }
};


export const postLogin = async (data: FormDataLogin) => {
  try {
    const res = await axiosApiBack.post("/users/login", data);
    if (!res.data) {
      console.warn("Invalid post login data format", res.data);
      return {
        message: "Error al iniciar sesión",
        errors: res.data,
      };
    }
    return {
      message: "Inicio de sesión exitoso",
      data: res.data
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.warn("Error fetching post login", error?.message);
    }
    return {
      message: "Error al iniciar sesión",
      errors: (error as Error).message || "Error desconocido",
    };
  }
};