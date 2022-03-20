import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import couponRoutes from "./routes/Coupon.js";
import userRoutes from "./routes/User.js";
import productRoutes from "./routes/Product.js";
import categoryRoutes from "./routes/Category.js";
import orderRoutes from "./routes/Order.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/coupon", couponRoutes);
app.use("/user", userRoutes);
app.use("/product", productRoutes);
app.use("/category", categoryRoutes);
app.use("/order", orderRoutes);

dotenv.config();

const connect_url = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(connect_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
