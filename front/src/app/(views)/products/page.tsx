"use client";

import React, { useEffect, useState } from "react";
import ProductList from "../(home)/components/ProductList"; 
import { getProducts } from "@/app/services/products"; 
import CategorySidebar from "@/components/CategorySidebar";



const AllProductsPage = () => {
  const [allProducts, setAllProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAllProducts = async () => {
      setLoading(true);
      try {
      
        const products = await getProducts();
        setAllProducts(products as IProduct[]);
      } catch (error) {
        console.error("Error fetching all products:", error);
        setAllProducts([]); 
      } finally {
        setLoading(false);
      }
    };
    fetchAllProducts();
  }, []); 
  return (
    <div className="container flex p-4 mx-auto">
      <CategorySidebar activeCategory="0" /> 
      <div className="w-3/4 pl-4">
        {loading ? (
          <div>Cargando todos los productos...</div>
        ) : (
          <ProductList products={allProducts} />
        )}
      </div>
    </div>
  );
};

export default AllProductsPage;