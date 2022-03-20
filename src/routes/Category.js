import express from "express";

import {
  getCategories,
  addCategory,
  updateCategory,
  deleteCategory,
  getCategory,
} from "../controllers/Category.js";
import { verifyTokenAndAdmin } from "../middlewares/verifyToken.js";

const router = express.Router();

// GET ALL CategoryS
router.get("/", getCategories);

// GET ONE Category
router.get("/:id", getCategory);

// ADD Category
router.post("/", verifyTokenAndAdmin, addCategory);

// UPDATE Category
router.patch("/:id", verifyTokenAndAdmin, updateCategory);

// UPDATE Category
router.delete("/:id", verifyTokenAndAdmin, deleteCategory);

export default router;
