import express from "express";

import {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProduct,
} from "../controllers/Product.js";
import { verifyTokenAndAdmin } from "../middlewares/verifyToken.js";

const router = express.Router();

// GET ALL ProductS
router.get("/", getProducts);

// GET ONE Product
router.get("/:id", getProduct);

// ADD Product
router.post("/", verifyTokenAndAdmin, addProduct);

// UPDATE Product
router.patch("/:id", verifyTokenAndAdmin, updateProduct);

// UPDATE Product
router.delete("/:id", verifyTokenAndAdmin, deleteProduct);

export default router;
