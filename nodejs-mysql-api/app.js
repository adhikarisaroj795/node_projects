const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const postController = require("./controllers/post.controller");

app.use("/posts", require("./routes/posts"));

app.use(bodyParser.json());

app.use("/posts", postController.save);

module.exports = app;
