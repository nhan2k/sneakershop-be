import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    avatar: { type: String, default: "" },
    firstName: { type: String, minlength: 2 },
    lastName: { type: String, minlength: 2 },
    phone: { type: String, unique: true },
    email: {
      type: String,
      required: true,
      minlength: 12,
      unique: true,
    },
    password: { type: String, required: true, minlength: 8 },
    orderList: [
      {
        orderId: { type: String, minlength: 4 },
        time: { type: Date, default: Date.now },
        shippingAdress: { type: String, minlength: 4 },
        method: { type: String, default: ["Cash"] },
        amount: { type: Number, min: 1000 },
        status: { type: String, default: ["Delivery"] },
      },
    ],
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);
export default User;
