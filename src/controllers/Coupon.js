import mongoose from "mongoose";
import Coupon from "../models/Coupon.js";

// READ ALL COUPONS
export const getCoupons = async (req, res) => {
  try {
    const coupons = await Coupon.find();

    res.status(200).json(coupons);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// READ ONE COUPON
export const getCoupon = async (req, res) => {
  const { id } = req.params;

  try {
    const coupon = await Coupon.findById(id);

    res.status(200).json(coupon);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// CREATE COUPON
export const postCoupon = async (req, res) => {
  const { index, name, code, validityTime, percentage, minAmount, type } =
    req.body;

  const newCoupon = new Coupon({
    index,
    name,
    code,
    validityTime,
    percentage,
    minAmount,
    type,
  });

  try {
    await newCoupon.save();
    res.status(200).json(newCoupon);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE COUPON
export const putCoupon = async (req, res) => {
  const { id } = req.params;
  const { name, code, validityTime, percentage, minAmount, type } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updateCoupon = {
    name,
    code,
    validityTime,
    percentage,
    minAmount,
    type,
    _id: id,
  };

  await Coupon.findByIdAndUpdate(id, updateCoupon, { new: true });

  res.status(200).json(updateCoupon);
};

// DELETE COUPON
export const deleteCoupon = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await Coupon.findByIdAndRemove(id);

  res.status(201).json({ message: "Deleted Successfully!" });
};
