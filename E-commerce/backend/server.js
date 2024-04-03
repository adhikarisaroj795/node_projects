const express = require("express");
const routes = require("./routes/index");
const errorMiddleware = require("./app/middleware/errormiddleware");
const app = express();
const eventEmitterMiddleware = require("./app/events/event.EmitterMiddleware");

//data parsing
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(eventEmitterMiddleware);
//routes
app.use(routes);

///for no route defined
app.use((req, res, next) => {
  next({
    status_code: 404,
    msg: "Resources not found",
  });
});
app.use(errorMiddleware);

const PORT = 3921;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(`server running on ${PORT}`);
  }
});
