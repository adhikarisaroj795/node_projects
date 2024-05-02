const express = require("express");
const routes = require("./api/routes/index");
const app = express();
const cors = require("cors");
const errorMiddleware = require("./api/middleware/error.middleware");
require("dotenv").config();

//handling cors policy
const corsOptions = {
  origin: ["http://127.0.0.1:3000", "http://localhost:3000"],
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

app.use(routes);

//error-middleware
app.use(errorMiddleware);

module.exports = app;
