import User from "../models/User.js";
import CryptoJS from "crypto-js";

// READ ALL Users
export const getUsers = async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(1)
      : await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

// READ ONE User
export const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE ADMIN
export const updateAdmin = async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

// DELETE User
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndRemove(id);

    res.status(201).json({ message: "Deleted Successfully!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
