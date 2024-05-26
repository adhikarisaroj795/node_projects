const express = require("express");
const app = express();
const userRoute = require("./user.routes");
const authRoute = require("./auth.routes");

app.use("/api/v1/", userRoute);
app.use("/api/v1/", authRoute);

module.exports = app;
