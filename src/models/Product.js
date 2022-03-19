import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    index: { type: String, minlength: 4 },
    name: { type: String, minlength: 4 },
    price: { type: Number, min: 1000 },
    description: { type: String, maxLength: 600 },
    stock: { type: Number },
    image: { type: String },
  },
  { timestamps: true }
);

const Coupon = mongoose.model("Product", productSchema);
export default Product;