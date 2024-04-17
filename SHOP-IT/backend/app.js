const express = require("express");
const routes = require("./routes/index");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middlewares/error.middleware");

const app = express();

app.use(express.json());
app.use(cookieParser());

//*mounting all routes
app.use(routes);

//* Middleware to handle error
app.use(errorMiddleware);

module.exports = app;
