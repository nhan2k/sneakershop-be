import Category from "../models/Category.js";

// READ ALL Categorys
export const getCategories = async (req, res) => {
  const query = req.query.new;
  try {
    const category = query
      ? await Category.find().sort({ _id: -1 }).limit(1)
      : await Category.find();
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json(error);
  }
};

// READ ONE Category
export const getCategory = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await Category.findById(id);

    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE Category
export const updateCategory = async (req, res) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500).json(error);
  }
};

// DELETE Category
export const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    await Category.findByIdAndRemove(id);

    res.status(201).json({ message: "Deleted Successfully!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const addCategory = async (req, res) => {
  const { type } = req.body;

  const newCategory = new Category({
    type,
  });
  try {
    await newCategory.save();

    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
