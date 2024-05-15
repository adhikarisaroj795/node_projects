const app = require("./app");
const connectDb = require("./config/Db.config");

connectDb();
app.listen(process.env.PORT, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(
    `server started on ${process.env.PORT}  in ${process.env.NODE_ENV}`
  );
});
