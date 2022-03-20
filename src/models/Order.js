import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    time: { type: Date, default: Date.now },
    shippingAddress: { type: String },
    phone: { type: String },
    method: { type: String },
    totalAmount: { type: Number },
    status: { type: String },
    invoice: {
      invoiceNo: { type: Number },
      shippingCost: { type: Number },
      orderDetail: [
        {
          index: { type: Number },
          productName: { type: String },
          quantity: { type: Number },
          itemPrice: { type: Number },
          amount: { type: Number },
        },
      ],
    },
  },

  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
