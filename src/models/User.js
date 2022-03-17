import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    avatar: { type: String },
    name: { type: String },
    phone: { type: String, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    orderList: [
      {
        orderId: { type: String },
        time: { type: Date },
        shippingAdress: { type: String },
        method: { type: String },
        amount: { type: Number },
        status: { type: String },
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
