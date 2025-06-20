"use client";

import Input from "@/components/ui/Input";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import FormErrorMsg from "@/components/ui/FormErrorMsg";
import Button from "@/components/ui/Button";
import { postRegister } from "@/app/services/auth";
import { toast } from "react-toastify";
import { Routes } from "@/routes";
import { useRouter } from "next/navigation";
import usePublic from "@/hooks/usePublic";
import { AxiosError } from "axios";

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email invalido")
    .required("El correo electronico es requerido."),
  password: Yup.string()
    .min(8, "La contraseña debe de tener al menos 8 caracteres.")
    .required("La contraseña es requerida."),
  name: Yup.string().required("El nombre es requerido."),
  address: Yup.string().required("La direccion es requerida."),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "La contraseña no coincide.")
    .required("Debe confrimar la contraseña."),
  phone: Yup.string()
    .min(8, "El número de teléfono debe tener al menos 8 dígitos")
    .max(12, "El número de teléfono no debe exceder los 12 dígitos")
    .matches(/^[0-9]+$/, "El número de teléfono solo debe contener dígitos")
    .required("El número de teléfono es requerido"),
});

export interface FormDataRegister {
  name: string;
  password: string;
  address: string;
  phone: string;
  email: string;
}

const RegisterForm = () => {
  usePublic();
 const router =  useRouter();
  
  return (
  <Formik
    initialValues={{
      email: "",
      password: "",
      name: "",
      address: "",
      phone: "",
      confirmPassword: "",
    }}
    validationSchema={SignupSchema}
    onSubmit={ async (values) => {
      const {  ...data } = values;
      
     try{
      const res = await postRegister(data);
      if(res.errors){
        return toast.error("Error al intentar registrar el usuario");
      } toast.success ("El usuario se creo correctamente")
        setTimeout(() => {
          router.replace(Routes.login)
        }, 2100)
     } catch ( error: unknown) {
      if (error instanceof AxiosError) {
        const serverMessage = error.response?.data?.message || "Error de red o del servidor";
        console.error("Error de Axios al registrar:", error.response?.data || error.message);
        toast.error(`Error al registrar: ${serverMessage}`);
      } 
     } finally {
      console.log("Usuario registrad correctamente:", data);
      
     }
      
    }}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
    }) => (
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-between w-full h-full"
      >
        <div className="flex flex-wrap mb-4 -mx-2">
          <div className="w-full px-2 md:w-1/2">
            <Input
              id="name"
              label="Nombre"
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              classNameContainer="mb-8 w-full"
              inputClassName="bg-light_blue-300"
              labelClassName="text-lg font-extrabold text-secondary_yellow-500"
            />
            {errors.name && touched.name && <FormErrorMsg msg={errors.name} />}
            <Input
              id="email"
              label="Email"
              type="text"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              classNameContainer="mb-8 w-full"
              inputClassName="bg-light_blue-300"
              labelClassName="text-lg font-extrabold text-secondary_yellow-500"
            />
            {errors.email && touched.email && (
              <FormErrorMsg msg={errors.email} />
            )}
          </div>
          <div className="w-full px-2 md:w-1/2">
            <Input
              id="phone"
              label="Telefono"
              type="text"
              name="phone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
              classNameContainer="mb-8 w-full"
              inputClassName="bg-light_blue-300"
              labelClassName="text-lg font-extrabold text-secondary_yellow-500"
            />
            {errors.phone && touched.phone && (
              <FormErrorMsg msg={errors.phone} />
            )}
            <Input
              id="address"
              label="Direccion"
              type="text"
              name="address"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address}
              classNameContainer="mb-8 w-full"
              inputClassName="bg-light_blue-300"
              labelClassName="text-lg font-extrabold text-secondary_yellow-500"
            />
            {errors.address && touched.address && (
              <FormErrorMsg msg={errors.address} />
            )}
          </div>
          <div className="w-full px-2 md:w-1/2">
            <Input
              id="paswword"
              label="Contraseña"
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              classNameContainer="mb-8 w-full"
              inputClassName="bg-light_blue-300"
              labelClassName="text-lg font-extrabold text-secondary_yellow-500"
            />
            {errors.password && touched.password && (
              <FormErrorMsg msg={errors.password} />
            )}
          </div>

          <div className="w-full px-2 md:w-1/2">
            <Input
              id="confirmPassword"
              label="Confirmar contraseña"
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
              classNameContainer="mb-8 w-full"
              inputClassName="bg-light_blue-300"
              labelClassName="text-lg font-extrabold text-secondary_yellow-500"
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <FormErrorMsg msg={errors.confirmPassword} />
            )}
          </div>
        </div>
        <Button
          variant="default"
          type="submit"
          label="Registrarse"
          disabled={isSubmitting}
          className="w-full mt-auto text-lg font-extrabold hover:bg-accent_blue-600"
        ></Button>
      </form>
    )}
  </Formik>
)
}

export default RegisterForm;
