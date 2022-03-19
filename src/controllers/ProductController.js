import mongoose from "mongoose";
import Coupon from "../models/Product.js";

// READ ALL
export const getAllProducts = async (req, res) => {
    try {
        const product = await Product.find();
        res.status(200).json(product);
  
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};

// READ ONE
export const getProduct = async (req, res) => {
    const { id } = req.params;
  
    try {
      const product = await Product.findById(id);
  
      res.status(200).json(product);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};

// CREATE 
export const postProduct = async (req, res) => {
    let time = new Date();
    time.setDate(time.getDate() + req.body.validityTime);
    const { index, name, code, percentage, minAmount, type } = req.body;
  
    const newProduct = new Product({
      index,
      name,
      code,
      validityTime: time,
      percentage,
      minAmount,
      type,
    });
  
    try {
      await newProduct.save();
      res.status(200).json(newCoupon);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};
    
// UPDATE 
export const putProduct = async (req, res) => {
    const { id } = req.params;
    if (req.body.validityTime) {
      var time = new Date();
      time.setDate(time.getDate() + req.body.validityTime);
    }
    const { name, code, percentage, minAmount, type } = req.body;
  
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);
  
    const updateProduct = {
      name,
      code,
      validityTime: time,
      percentage,
      minAmount,
      type,
      _id: id,
    };
  
    await Product.findByIdAndUpdate(id, updateProduct, { new: true });
  
    res.status(200).json(updateProduct);
};

// DELETE COUPON
export const deleteProduct = async (req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);
  
    await Product.findByIdAndRemove(id);
  
    res.status(201).json({ message: "Deleted Successfully!" });
};

