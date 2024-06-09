const express = require("express");
const app = express();
const authRoute = require("./auth.routes");
const blogRoutes = require("./blogs.routes");
const categoriesRoutes = require("../routes/category.routes");

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/blogs", blogRoutes);
app.use("/api/v1/categories", categoriesRoutes);

module.exports = app;
