const express = require("express");
const app = express();
const authRoute = require("./auth.routes");
const blogRoutes = require("./blogs.routes");
const categoriesRoutes = require("../routes/category.routes");
const videoCompressRoutes = require("./videoCompress.routes");

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/blogs", blogRoutes);
app.use("/api/v1/categories", categoriesRoutes);
app.use("/api/v1", videoCompressRoutes);

module.exports = app;
