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
        orderId: { type: String, default: "" },
        time: { type: Date, default: "" },
        shippingAdress: { type: String, default: "" },
        method: { type: String, default: "" },
        amount: { type: Number, default: "" },
        status: { type: String, default: "" },
      },
      { default: [] },
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
