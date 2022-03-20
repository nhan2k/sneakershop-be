import mongoose from "mongoose";
import slug from "mongoose-slug-generator";

const productSchema = new mongoose.Schema(
  {
    sku: { type: String, unique: true },
    name: { type: String, required: true, unique: true },
    price: { type: Number },
    slug: { type: String, slug: "name", unique: true },
    option: {
      color: [{ type: String }],
      size: [{ type: String }],
    },
    gender: { type: Boolean },
    description: { type: String, maxLength: 600 },
    category: { type: String },
    stock: { type: Number },
    status: { type: String, default: true },
    published: { type: Boolean, default: true },
    image: { type: String, unique: true },
    country: { type: String },
  },
  { timestamps: true }
);

// Add plugins
mongoose.plugin(slug);

const Product = mongoose.model("Product", productSchema);
export default Product;
