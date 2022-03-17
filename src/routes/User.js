import express from "express";
import {
  getUsers,
  deleteUser,
  getUser,
  updateAdmin,
} from "../controllers/User.js";
import { registerUser, login } from "../controllers/auth.js";
import {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from "../middlewares/verifyToken.js";

const router = express.Router();

// GET ALL Users
router.get("/", verifyTokenAndAuthorization, getUsers);

// GET ONE User
router.get("/:id", verifyTokenAndAdmin, getUser);

// Update Admin
router.patch("/update/:id", verifyTokenAndAdmin, updateAdmin);

// Register User
router.post("/register", registerUser);

// LOGIN
router.post("/login", login);

// DELETE User
router.delete("/:id", verifyTokenAndAdmin, deleteUser);

export default router;
