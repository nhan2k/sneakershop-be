import mongoose from "mongoose";
import slug from "mongoose-slug-generator";

const productSchema = new mongoose.Schema(
  {
    sku: { type: String },
    name: { type: String, required: true, unique: true },
    price: {
      base: { type: Number },
      current: { type: Number },
      discount: { type: Number },
    },
    slug: { type: String, slug: "name", unique: true },
    option: {
      color: [{ type: String }],
      size: [{ type: String }],
    },
    gender: { type: Boolean },
    description: { type: String, maxLength: 600 },
    category: Category._id,
    stock: { type: Number },
    status: { type: Boolean },
    published: { type: Boolean },
    image: { type: String },
    country: { type: String },
  },
  { timestamps: true }
);

// Add plugins
mongoose.plugin(slug);

const Product = mongoose.model("Product", productSchema);
export default Product;
