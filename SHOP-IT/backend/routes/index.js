const express = require("express");
const productRoutes = require("./product.route");
const userAuthRoute = require("../routes/authUser.route");

const app = express();

app.use("/api/v1", productRoutes);
app.use("/api/v1/auth", userAuthRoute);

module.exports = app;
