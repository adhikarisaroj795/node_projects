const fs = require("fs");

const crypto = require("crypto");

const start = Date.now();
// process.env.UV_THREADPOOL_SIZE = 1;// changing thread pool size

setImmediate(() => console.log("immediate 1 finished"));
setTimeout(() => console.log("timer 1 finished"), 0);
fs.readFile(`${__dirname}/starter/test-file.txt`, () => {
  console.log("I/O finnished");

  setTimeout(() => console.log("timer 2 finished"), 0);
  setTimeout(() => console.log("timer 3 finished"), 3000);
  setImmediate(() => console.log("immediate 2 finished"));

  process.nextTick(() => {
    console.log("process . next tick");
  });

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted");
  });
});

console.log("hello from the top level code");
