const app = require("./app");
const connectDb = require("./API/utils/db.config");

app.get("/test", (req, res) => {
  res.json("test passed");
});

connectDb();
app.listen(process.env.PORT, (err) => {
  if (err) {
    console.error("error while connecting to server", err);
    return;
  } else {
    console.log(
      `Server connected to the PORT ${process.env.PORT} on ${process.env.NODE_ENV}`
    );
  }
});
