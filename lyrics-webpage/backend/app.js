const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const app = express();
const cors = require("cors");

const corsOptions = {
  origin: ["http://127.0.0.1:5173", "http://localhost:5173"],
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser);

module.exports = app;
