"use client";
import { useAuthContext } from "@/context/authContext";
import { Routes } from "@/routes";
import { useRouter } from "next/navigation";
import  { useEffect } from "react";

const usePrivate = () => {
  const { isAuth } = useAuthContext();
  const router = useRouter();

  useEffect( () => {
    if (isAuth === false) {
      router.push(Routes.home);
    }
  }, [isAuth, router] );
  return null;

}

export default usePrivate;