const express = require("express");
const app = express();
const userAuthRoute = require("./userAuth.Route");

app.use("/api/v1/", userAuthRoute);

module.exports = app;
