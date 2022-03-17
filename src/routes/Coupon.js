import express from "express";

import {
  getCoupons,
  postCoupon,
  putCoupon,
  deleteCoupon,
  getCoupon,
} from "../controllers/Coupon.js";

const router = express.Router();

// GET ALL COUPONS
router.get("/", getCoupons);

// GET ONE COUPON
router.get("/:id", getCoupon);

// ADD COUPON
router.post("/", postCoupon);

// UPDATE COUPON
router.patch("/:id", putCoupon);

// UPDATE COUPON
router.delete("/:id", deleteCoupon);

export default router;
