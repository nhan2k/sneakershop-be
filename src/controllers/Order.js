import Order from "../models/Order.js";

// READ ALL Orders
export const getOrders = async (req, res) => {
  const query = req.query.new;
  try {
    const order = query
      ? await Order.find().sort({ _id: -1 }).limit(1)
      : await Order.find();
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json(error);
  }
};

// READ ONE Order
export const getOrder = async (req, res) => {
  const { id } = req.params;

  try {
    const order = await Order.findById(id);

    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE Order
export const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json(error);
  }
};

// DELETE Order
export const deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    await Order.findByIdAndRemove(id);

    res.status(201).json({ message: "Deleted Successfully!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const addOrder = async (req, res) => {
  const {
    shippingAddress,
    phone,
    method,
    totalAmount,
    status,
    invoiceNo,
    shippingCost,
  } = req.body;

  const newOrder = new Order({
    shippingAddress,
    phone,
    method,
    totalAmount,
    status,
    invoice: {
      invoiceNo,
      shippingCost,
    },
  });
  try {
    await newOrder.save();

    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const addInvoice = async (req, res) => {
  const { id } = req.params;
  const { index, productName, quantity, itemPrice, amount } = req.body;

  const newOrder = {
    index,
    productName,
    quantity,
    itemPrice,
    amount,
  };

  try {
    const order = await Order.findById(id);
    await order.invoice["orderDetail"].push(newOrder);
    await order.save();

    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
