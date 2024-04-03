const events = require("events");
const myEvents = new events.EventEmitter();

const eventEmitterMiddleware = (req, res, next) => {
  req.myEvents = myEvents;
  next();
};

//event listen
myEvents.on("register", (data) => {
  console.log(data);
  console.log("register triggerd");
});

module.exports = eventEmitterMiddleware;
