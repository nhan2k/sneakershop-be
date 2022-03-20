import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    type: { type: String },
    published: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", categorySchema);
export default Category;
