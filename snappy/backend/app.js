const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const routes = require("./routes/index");
const errorMiddleware = require("./api/middlewares/error.middleware");

app.use(cors());
app.use(express.json());

//mounting all routes
app.use(routes);

//middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
