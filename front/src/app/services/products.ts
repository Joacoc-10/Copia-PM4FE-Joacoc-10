/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axios from "axios";

//llamado con Axios
const axiosApiBack = axios.create({
  baseURL: process.env.API_URL,
});

export const getProducts = async () => {
  try {
    // llamado con Fetch
    // const res = await fetch("http://localhost:3003" + "/products");
    // const products = await res.json();
    // return products;

    //Axios
    const res = await axiosApiBack.get("/products");
    if (!res.data || !Array.isArray(res.data)) {
      console.warn("Invalid products data format", res.data);
      return [];
    }
    return res.data;
  } catch (error: any) {
    console.warn("Error fetching product list", error?.message);
    return [];
  }
};

export const getProductById = async (id: string) => {
  try {
    const res = await axiosApiBack.get(`/products/${id}`);

    if (!res.data || typeof res.data !== "object") {
      console.warn("Invalid product data format", res.data);
      return null;
    }
    return res.data;
  } catch (error: any) {
    console.warn(`Error fetching product by ID (${id}):`, error?.message);
    return null;
  }
};
