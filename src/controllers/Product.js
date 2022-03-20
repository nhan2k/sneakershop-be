import Product from "../models/Product.js";

// READ ALL Products
export const getProducts = async (req, res) => {
  const query = req.query.new;
  try {
    const products = query
      ? await Product.find().sort({ _id: -1 }).limit(1)
      : await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
};

// READ ONE Product
export const getProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);

    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE Pruduct
export const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
};

// DELETE Product
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndRemove(id);

    res.status(201).json({ message: "Deleted Successfully!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const addProduct = async (req, res) => {
  const {
    sku,
    name,
    price,
    color,
    size,
    gender,
    description,
    category,
    stock,
    image,
    country,
  } = req.body;

  const newProduct = new Product({
    sku,
    name,
    price,
    option: {
      color,
      size,
    },
    gender,
    description,
    category,
    stock,
    image,
    country,
  });
  try {
    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
