const path = require("path");
const envPath = path.join(__dirname, "config", "config.env");
require("dotenv").config({ path: envPath });
const connectionDatabase = require("./config/db.config");
const app = require("./app");

//* handle the uncaught exception
process.on("uncaughtException", (err) => {
  console.log("ERROR:", err.stack);
  console.log("Shutting down due to uncaught exception");
  process.exit(1);
});

///connecting to the database
connectionDatabase();
const server = app.listen(process.env.PORT, () => {
  console.log(
    `server started on port: ${process.env.PORT} in ${process.env.NODE_ENV}`
  );
});

//* handle unhandled promise rejections

process.on("unhandledRejection", (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log("shutting down server due to unhandled promise rejection");
  server.close(() => {
    process.exit(1);
  });
});
