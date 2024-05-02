const connectDb = require("./api/utils/db.config");
const app = require("./app");

connectDb();
app.listen(process.env.PORT, (err) => {
  if (err) {
    console.err(err);
    return;
  }
  console.log(
    `Server started on ${process.env.PORT} in ${process.env.NODE_ENV}`
  );
});
