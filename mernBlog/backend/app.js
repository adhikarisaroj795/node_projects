const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const route = require("./API/Routes/index");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./API/Middleware/error.middleware");

const corsOptions = {
  origin: ["http://127.0.0.1:5173", "http://localhost:5173"],
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use(route);
app.use(errorMiddleware);

module.exports = app;
