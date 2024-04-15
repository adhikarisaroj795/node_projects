const path = require("path");
const envPath = path.join(__dirname, "config", "config.env");
const connectionDatabase = require("./config/db.config");
require("dotenv").config({ path: envPath });
const app = require("./app");

//setting up routes

///connecting to the database
connectionDatabase();
app.listen(process.env.PORT, () => {
  console.log(
    `server started on port: ${process.env.PORT} in ${process.env.NODE_ENV}`
  );
});
