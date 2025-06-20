"use server";
import axios from "axios";
import { CreateOrderPayload } from "../(views)/cart/components/CreateOrderBtn";

const axiosApiBack = axios.create({
  baseURL: process.env.API_URL,
});

export const getOrdersUser = async (token: string) => {
  try{
    const response = await axiosApiBack.get("/users/orders", {
      headers: {
        Authorization: token,               
      },
    });
    return response.data;
  } catch (error){
    console.error("Error accediendo a las ordenes de usuario:", error);
    throw error;
  }
}

export const postOrder = async (data:CreateOrderPayload, token:string): Promise<IOrder> => {
  try{
    const response = await axiosApiBack.post("/orders",data, {
      headers: {
        Authorization: token,                
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al crear la orden:", error);
    throw error;
  }
}
