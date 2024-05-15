const express = require("express");
const registerRoutes = require("./userRoutes");

const app = express();

app.use("/api/v1/auth", registerRoutes);

module.exports = app;
