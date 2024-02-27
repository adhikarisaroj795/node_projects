const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("There was a new sale");
});

myEmitter.on("newSale", () => {
  console.log("customer name: jones");
});

myEmitter.on("newSale", (stock) => {
  console.log(`there are now ${stock} items left in the stock`);
});
myEmitter.emit("newSale", 9);

///////////////
//

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("request received");
  console.log(req.url);
  res.end("hello world");
});

server.on("request", (req, res) => {
  console.log("another request");
});

server.on("close", () => {
  console.log("server - closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("waiting for request...");
});
