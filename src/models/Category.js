import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    type: { type: String },
    published: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", categorySchema);
export default Category;
