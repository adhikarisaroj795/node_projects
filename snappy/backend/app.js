const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const routes = require("./routes/index");

app.use(cors());
app.use(express.json());
app.use(routes);

module.exports = app;
