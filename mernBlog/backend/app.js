const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const route = require("./API/Routes/index");

const corsOptions = {
  origin: ["http: //127.0.0.1:3000", "http://localhost:3000"],
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use(route);

module.exports = app;
