const express = require("express");
const app = express();
const userRoute = require("./user.routes");
const authRoute = require("./auth.routes");
const postRoute = require("./post.routes");
const commentRoute = require("./comment.routes");

app.use("/api/v1/", userRoute);
app.use("/api/v1/", authRoute);

app.use("/api/v1/", postRoute);
app.use("/api/v1/", commentRoute);

module.exports = app;
