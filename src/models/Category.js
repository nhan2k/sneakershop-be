const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const Schema = mongoose.Schema;
const AutoIncrement = require("mongoose-sequence")(mongoose);
const Product = require("./Product");

const Category = new Schema(
  {
    _id: { type: Number },
    icon: { type: String },
    type: { type: String },
    published: { type: Boolean },
    products: [Product],
  },
  {
    _id: false,
    timestamps: true,
  }
);

// Add plugins
mongoose.plugin(slug);

Category.plugin(AutoIncrement);
Course.plugin(mongooseDelete, {
  overrideMethods: "all",
  deletedAt: true,
});

module.exports = mongoose.model("Category", Category);
