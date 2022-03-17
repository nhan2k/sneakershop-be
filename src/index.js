import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import couponRoutes from "./routes/Coupon.js";
import userRoutes from "./routes/User.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/coupon", couponRoutes);
app.use("/user", userRoutes);

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
