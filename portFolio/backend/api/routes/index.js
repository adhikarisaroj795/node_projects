const express = require("express");
const contactMeRoutes = require("./contactMe.routes");
const app = express();

app.use("/api/v1/contactme", contactMeRoutes);

module.exports = app;
