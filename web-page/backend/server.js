const app = require("./app");

app.listen(PORT, (err) => {
  if (err) {
    console.error(0);
  } else {
    console.log(`server is running on ${PORT}`);
  }
});
