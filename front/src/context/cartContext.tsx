"use client";

import React, { createContext, useContext, useEffect } from "react";

type CartContextType = {
  //States
  cart: Partial<IProduct>[];
  total: number;
  priceTotal: number;

  //Actions
  addToCart: (product: Partial<IProduct>) => void;
  removeFromCart: (productId: number) => void;
  isProductInCart: (productId: number) => boolean;
  resetCart: () => void;

};

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_LOCAL_STORAGE_KEY = "cart";
const CART_TOTAL_LOCAL_STORAGE_KEY = "cartTotal";
 
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = React.useState<CartContextType['cart'] | null>(null);
  const [total, setTotal] = React.useState<number>();
  const [priceTotal, setPriceTotal] = React.useState<number>();

  const addToCart = (product: Partial<IProduct>) => {
    setCart((prevCart) => [...(prevCart || []), product]);
    setTotal((prevTotal) => (prevTotal || 0) +1 );

  }

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => {
      if (!prevCart) {
        return [];
      }
      const updateCart = prevCart.filter((item) => item.id !== productId);
      return updateCart;
    });
    setTotal((prevTotal) => {
      if (prevTotal === undefined || prevTotal <= 0) {
        return 0;
      }
      return prevTotal -1;
    })
  }

  const resetCart = () => {
    setCart([]);
    setTotal(0);
    setPriceTotal(0);
    localStorage.removeItem(CART_LOCAL_STORAGE_KEY);
    localStorage.removeItem(CART_TOTAL_LOCAL_STORAGE_KEY);
  }

  

  const isProductInCart = (productId: number) => {
    return cart ? cart.some((item) => item.id === productId) : false;
  }

  useEffect(() => {
    if(!cart){
      return;
    }
    localStorage.setItem(CART_LOCAL_STORAGE_KEY, JSON.stringify(cart));
    localStorage.setItem(CART_TOTAL_LOCAL_STORAGE_KEY, JSON.stringify(total || 0)); 
  }, [cart,total]);

  useEffect(() => {
    const storedCart = localStorage.getItem(CART_LOCAL_STORAGE_KEY);
    const storedTotal = localStorage.getItem(CART_TOTAL_LOCAL_STORAGE_KEY);

    if (!storedCart || !storedTotal){
      setCart([]);
      setTotal(0);
      return;
    }
    setCart(JSON.parse(storedCart));
    setTotal(JSON.parse(storedTotal));

  }, []);


  useEffect(() => {
    if (!cart || cart.length === 0){
      setPriceTotal(0);
      return;
    }
    const totalPrice = cart.reduce((acc,item) => acc + (item.price || 0), 0)
    setPriceTotal(totalPrice);
  }, [cart]);

  return (
    <CartContext.Provider
      value={
        {
          // Aquí puedes definir los valores y funciones que quieres exponer
          cart: cart || [],
          total: total || 0,
          priceTotal: priceTotal || 0,

          addToCart,
          removeFromCart,
          isProductInCart,
          resetCart,
         
        }
      }
    >
      {children}
    </CartContext.Provider>
  );
};

// custom hook
export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartContext debe usarse dentro de un AuthProvider");
  }

  return context;
};






