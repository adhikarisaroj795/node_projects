const express = require("express");
const mongoose = require("mongoose");
const app = express();
const connectDB = async () => {
  mongoose.connect("mongodb://locolhost:27017");
};

app.get("/", (req, res) => {
  res.send("app is working");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
