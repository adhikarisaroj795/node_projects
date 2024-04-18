const express = require("express");
const productRoutes = require("./product.route");
const userAuthRoute = require("../routes/authUser.route");
const adminRoutes = require("../routes/admin.route");
const orderRoutes = require("./order.route");

const app = express();

app.use("/api/v1", productRoutes);
app.use("/api/v1/auth", userAuthRoute);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/", orderRoutes);

module.exports = app;
