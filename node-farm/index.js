const { error } = require("console");
const fs = require("fs"); //modules or package

const http = require("http");
const url = require("url");
const replaceTemplate = require("./modules/replaceTemplate");
////////////////////////////////////////
////File

//Blocking synchronous was
// const textIn = fs.readFileSync("./starter/txt/input.txt", "utf-8");
// console.log(textIn);

// const textOutput = `this is what we know know about the avacado ${textIn}.\nCreated on ${Date.now()} `;

// fs.writeFileSync("./starter/txt/output.txt", textOutput);
// console.log("file is written");

// non Blocking asynchronous way

// fs.readFile("./starter/txt/start.txt", "utf-8", (err, data1) => {
//   if (err) {
//     return console.log("Error in the house");
//   }
//   fs.readFile(`./starter/txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile("./starter/txt/append.txt", "utf-8", (err, data3) => {
//       console.log(data3);

//       fs.writeFile(
//         "./starter/txt/final.txt",
//         `${data2}\n ${data3}`,
//         "utf-8",
//         (error) => {
//           console.log("your file has been written😂😂");
//         }
//       );
//     });
//   });
// });
// console.log("will read this");

/////////////////////////////////
//SERVER

const data = fs.readFileSync(
  `${__dirname}/starter/dev-data/data.json`,
  "utf-8"
);
const templateOverView = fs.readFileSync(
  `${__dirname}/starter/templates/template-overview.html`,
  "utf-8"
);
const tempCard = fs.readFileSync(
  `${__dirname}/starter/templates/template-card.html`,
  "utf-8"
);
const templateProduct = fs.readFileSync(
  `${__dirname}/starter/templates/template-product.html`,
  "utf-8"
);
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  //overview page

  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, {
      "content-type": "text/html",
    });

    const cardsHtml = dataObj
      .map((el) => replaceTemplate(tempCard, el))
      .join("");
    const outPut = templateOverView.replace("{%PRODUCT_CARD%}", cardsHtml);
    res.end(outPut);

    //product page
  } else if (pathname === "/product") {
    // console.log(query);
    res.writeHead(200, {
      "content-type": "text/html",
    });
    const product = dataObj[query.id];
    const outPut = replaceTemplate(templateProduct, product);
    res.end(outPut);
  }
  //APi
  else if (pathname === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(data);
  }
  //not found
  else {
    res.writeHead(404, {
      "content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>page not foundd</html>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listining to request on port 8000");
});
