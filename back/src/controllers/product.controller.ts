import { Request, Response } from "express";
import { catchedController } from "../utils/catchedController";
import {
  getProductByIdService,
  getProductsService,
} from "../services/products.service";

export const getProducts = catchedController(
  async (req: Request, res: Response) => {
    const products = await getProductsService();
    res.json(products);
  }
);

export const getProductById = catchedController(
  async (req: Request, res: Response) => {
    const productId = req.params.id;
    if (!productId) {
      return res.status(400).json({ error: "Product ID is required" });
    }
    const product = await getProductByIdService(productId);
    res.json(product);
  }
);
