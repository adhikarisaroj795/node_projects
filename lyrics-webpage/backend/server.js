const app = require("./app");
const connectDb = require("./config/databaseConfig");

app.get("/test", (req, res) => {
  try {
    console.log("server hit");
    res.json("test passed");
  } catch (error) {
    console.log(error);
  }
});

connectDb();
app.listen(process.env.PORT, (err) => {
  if (err) {
    console.error("Error while connecting to the server", err);
    return;
  } else {
    console.log(
      `server connected to the PORT ${process.env.PORT} on ${process.env.NODE_ENV}`
    );
  }
});
