const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.connect("mongodb://localhost:27017/e-commerce");
  console.log("database connected");
};
connectDB();
