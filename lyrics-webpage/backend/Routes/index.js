const express = require("express");
const app = express();
const authRoutes = require("./auth.routes");

app.use("/api/v1", authRoutes);

module.exports = app;
