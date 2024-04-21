const app = require("./app");
const ConnectDb = require("./config/db.config");

ConnectDb();
const server = app.listen(process.env.PORT, (err) => {
  console.log(`server started at ${process.env.PORT}`);
});
