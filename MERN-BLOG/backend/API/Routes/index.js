const express = require("express");
const app = express();
const userRoute = require("./user.routes");
const authRoute = require("./auth.routes");
const postRoute = require("./post.routes");

app.use("/api/v1/", userRoute);
app.use("/api/v1/", authRoute);

app.use("/api/v1/", postRoute);

module.exports = app;
