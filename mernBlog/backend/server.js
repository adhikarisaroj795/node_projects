const app = require("./app");

app.get("/test", (req, res) => {
  res.json("test passed");
});

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log(
      `Server started on ${process.env.PORT} in ${process.env.NODE_ENV}`
    );
  }
});
