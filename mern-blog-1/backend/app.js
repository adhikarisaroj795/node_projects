const express = require("express");
const routes = require("./api/routes/index");
const errorMiddleware = require("./api/middlewares/error.Middleware");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();

app.use(cookieParser());
app.use(express.json());

// API Routes
app.use(routes);
//ErrorMiddleware
app.use(errorMiddleware);
module.exports = app;
