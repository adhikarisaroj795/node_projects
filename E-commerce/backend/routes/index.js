const express = require("express");
const user_routes = require("./user");
const product_routes = require("./product");
const order_routes = require("./order");
const label_routes = require("./label");
const category_routes = require("./category");
const auth_routes = require("./auth");

const app = express();

app.use("/users", user_routes);
app.use("/auth", auth_routes);
app.use("/category", category_routes);
app.use("/product", product_routes);
app.use("/order", order_routes);
app.use("/label", label_routes);

module.exports = app;
