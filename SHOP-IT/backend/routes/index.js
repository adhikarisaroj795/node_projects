const express = require("express");
const productRoutes = require("./product.route");

const app = express();

app.use("/api/v1", productRoutes);

module.exports = app;
