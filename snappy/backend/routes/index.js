const express = require("express");
const userRoutes = require("./user.routes");
const app = express();

app.use("/api/v1/auth", userRoutes);

module.exports = app;
