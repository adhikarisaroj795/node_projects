const app = require("./app");
const ConnectDb = require("./config/db.config");

ConnectDb();
const server = app.listen(process.env.PORT, (err) => {
  console.log(
    `Server started on ${process.env.PORT} in ${process.env.NODE_ENV}`
  );
});

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down server due to unhandled promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
