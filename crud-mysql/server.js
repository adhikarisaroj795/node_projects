const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

const fetch = require("./fetch/fetch");
app.use("/fetch", fetch);
const insert = require("./insert/insert");
app.use("/insert", insert);
const update = require("./update/update");
app.use("/update", update);
const dlt = require("./delete/delete");
app.use("/delete", dlt);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`server listining on ${PORT}`);
});
