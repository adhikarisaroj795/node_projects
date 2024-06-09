const connectDb = require("./api/utils/db.config");
const app = require("./app");

app.get("/test", (req, res) => {
  res.json("test passed");
});

connectDb();
app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log("error, while connecting to the server", err);
    return;
  } else {
    console.log(
      `Server connected to the ${process.env.PORT} on ${process.env.NODE_ENV}`
    );
  }
});
