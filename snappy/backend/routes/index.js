const express = require("express");
const userRoutes = require("./user.routes");
const messageRoutes = require("./message.routes");
const app = express();

app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/messages", messageRoutes);

module.exports = app;
