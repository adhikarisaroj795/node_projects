const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("app is working");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
