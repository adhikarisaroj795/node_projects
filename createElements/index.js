const fs = require("fs");
const http = require("http");
const url = require("url");

//////////////
//server

const data = fs.readFileSync(`${__dirname}/data.json`, "utf-8");
console.log(data);

const indexOverview = fs.readFileSync(`${__dirname}/index.html`, "utf-8");
const styles = fs.readFileSync(`${__dirname}/styles.css`, "utf-8");
const template = fs.readFileSync(`${__dirname}/template.html`, "utf-8");

const dataObj = JSON.parse(data);

const replaceTemplate = (temp, product) => {
  let output = temp.replace(/{%NAME%}/g, product.name);
  output = output.replace(/{%STUDENTID%}/g, product.stdid);
  output = output.replace(/{%ADDRESS%}/g, product.address);
  output = output.replace(/{%PHONENO%}/g, product.phone);
  return output;
};

const server = http.createServer((req, res) => {
  const { pathName, query } = url.parse(req.url, true);

  const cardhtml = dataObj.map((el) => replaceTemplate(template, el)).join("");
  const output = indexOverview.replace("{%TEMPLATE%}", cardhtml);

  res.end(output + styles);
});

server.listen(8000, "127.0.0.1", () => {
  console.log("server is listinig");
});
