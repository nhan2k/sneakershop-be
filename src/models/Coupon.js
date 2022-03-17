import mongoose from "mongoose";

const couponSchema = new mongoose.Schema(
  {
    index: { type: String },
    name: { type: String },
    code: { type: String },
    validityTime: { type: Date },
    percentage: { type: Number },
    minAmount: { type: Number },
    type: { type: String },
  },
  { timestamps: true }
);

const Coupon = mongoose.model("Coupon", couponSchema);
export default Coupon;
