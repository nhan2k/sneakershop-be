import express from "express";

import {
  getOrder,
  getOrders,
  addOrder,
  updateOrder,
  deleteOrder,
  addInvoice,
} from "../controllers/Order.js";
import { verifyTokenAndAuthorization } from "../middlewares/verifyToken.js";

const router = express.Router();

// GET ALL OrderS
router.get("/", getOrders);

// GET ONE Order
router.get("/:id", getOrder);

// ADD Order
router.post("/", verifyTokenAndAuthorization, addOrder);

// ADD Invoice
router.post("/invoice/:id", addInvoice);

// UPDATE Order
router.patch("/:id", verifyTokenAndAuthorization, updateOrder);

// UPDATE Order
router.delete("/:id", verifyTokenAndAuthorization, deleteOrder);

export default router;
