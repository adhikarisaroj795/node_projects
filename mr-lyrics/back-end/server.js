require("dotenv").config();
const cors = require("cors");
const express = require("express");
const routes = require("./routes/index");
const connectDb = require("./config/db.config");
const errorMiddleware = require("./App/middleware/error.middleware");
const app = express();

//handling cors policy
const corsOptions = {
  origin: ["http://127.0.0.1:5173", "http://localhost:5173"],
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};
app.use(cors(corsOptions));
//data parsing
app.use(express.json());
app.use(routes);

app.use(errorMiddleware);
PORT = "9999";
connectDb().then(() => {
  app.listen(PORT, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`server is running on ${PORT}`);
    }
  });
});
