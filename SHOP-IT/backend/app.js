const express = require("express");
const routes = require("./routes/index");
const errorMiddleware = require("./middlewares/error.middleware");

const app = express();

app.use(express.json());

//*mounting all routes
app.use(routes);

//* Middleware to handle error
app.use(errorMiddleware);

module.exports = app;
