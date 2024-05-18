const express = require("express");
const app = express();
const userAuthRoute = require("./userAuth.Route");

console.log("hello1");
app.use("/api/v1/", userAuthRoute);

module.exports = app;
