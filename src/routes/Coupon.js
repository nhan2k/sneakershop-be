import express from "express";

import {
  getCoupons,
  postCoupon,
  putCoupon,
  deleteCoupon,
  getCoupon,
} from "../controllers/Coupon.js";
import { verifyTokenAndAdmin } from "../middlewares/verifyToken.js";
import { endDateCheck } from "../middlewares/Coupon.js";

const router = express.Router();

// GET ALL COUPONS
router.get("/", getCoupons);

// GET ONE COUPON
router.get("/:id", getCoupon);

// ADD COUPON
router.post("/", endDateCheck, verifyTokenAndAdmin, postCoupon);

// UPDATE COUPON
router.patch("/:id", endDateCheck, verifyTokenAndAdmin, putCoupon);

// UPDATE COUPON
router.delete("/:id", verifyTokenAndAdmin, deleteCoupon);

export default router;
