"use client";

import React, { useEffect, useState } from "react";
import ProductList from "../../(home)/components/ProductList"; 
import { getProducts } from "@/app/services/products"; 
import { useParams } from "next/navigation";
import CategorySidebar from "@/components/CategorySidebar";


const ProductsByCategoryPage = () => {
  const params = useParams();
  const category = params.category as string; 

  const [allProducts, setAllProducts] = useState<IProduct[]>([]);
  const [productsToDisplay, setProductsToDisplay] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAllProducts = async () => {
      setLoading(true); 
      try {
        const products = await getProducts();
        setAllProducts(products as IProduct[]);
      } catch (error) {
        console.error("Error fetching all products for category filter:", error);
        setAllProducts([]);
      } finally {
      }
    };
    fetchAllProducts();
  }, []);

  useEffect(() => {
    if (allProducts.length === 0 && !loading) { 
        setProductsToDisplay([]);
        return;
    }

    setLoading(true); 
    try {
      const categoryId = Number(category); 

      if (isNaN(categoryId) || categoryId === 0) {
      
        setProductsToDisplay(allProducts);
      } else {
        const filtered = allProducts.filter(
          (product) => product.categoryId === categoryId
        );
        setProductsToDisplay(filtered);
      }
    } catch (error) {
      console.error("Error filtering products by category:", error);
      setProductsToDisplay([]);
    } finally {
      setLoading(false); 
    }
  }, [category, allProducts, loading]); 

  return (
    <div className="container flex p-4 mx-auto">
      <CategorySidebar activeCategory={category} />
     
      <div className="w-3/4 pl-4">
        {loading ? (
          <div>Cargando productos de la categoría...</div>
        ) : (
          <ProductList products={productsToDisplay} />
        )}
      </div>
    </div>
  );
};

export default ProductsByCategoryPage;
