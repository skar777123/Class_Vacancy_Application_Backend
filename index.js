import express from "express";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

import cookieParser from "cookie-parser";
app.use(cors());

import cors from "cors";
app.use(cookieParser());

import userRouter from "./routes/userRoutes.js";
app.use("/user", userRouter);

import adminRouter from "./routes/adminRoutes.js";
app.use("/admin", adminRouter);

app.listen(process.env.PORT, () => {
  mongoose.connect(process.env.DB).then(() => {
    console.log("Connected to MongoDB");
    console.log(`Server is running on port ${process.env.PORT}`);
  });
});
