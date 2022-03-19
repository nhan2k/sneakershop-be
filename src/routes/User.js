import express from "express";
import {
  getUsers,
  deleteUser,
  getUser,
  updateAdmin,
  addOrder,
} from "../controllers/User.js";
import { registerUser, login } from "../controllers/auth.js";
import { verifyTokenAndAdmin } from "../middlewares/verifyToken.js";
import { registerValidate, loginValidate } from "../middlewares/User.js";

const router = express.Router();

// GET ALL Users
router.get("/", verifyTokenAndAdmin, getUsers);

// GET ONE User
router.get("/:id", verifyTokenAndAdmin, getUser);

// Update Admin
router.patch("/update/:id", verifyTokenAndAdmin, updateAdmin);

// Register User
router.post("/register", registerValidate, registerUser);

// LOGIN
router.post("/login", loginValidate, login);

// Add Order to User
router.post("/order/:id", addOrder);

// DELETE User
router.delete("/:id", verifyTokenAndAdmin, deleteUser);

export default router;
