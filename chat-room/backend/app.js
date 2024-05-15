const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./api/routes/index");
const errorMiddleware = require("./api/middleware/error.middleware");
const cookieParser = require("cookie-parser");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use(routes);
app.use(errorMiddleware);
module.exports = app;
