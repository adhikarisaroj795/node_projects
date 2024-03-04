const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/add", (req, res) => {
  res.end("hello there");
});

app.post("/add", (req, res) => {
  res.end("this is for posting");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
