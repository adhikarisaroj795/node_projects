const express = require("express");
const cors = require("cors");
require("./db/config");

const Users = require("./db/Users");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {
  try {
    let user = new Users(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/login", async (req, res) => {
  console.log(req.body);
  if (req.body.password && req.body.email) {
    let user = await Users.findOne(req.body).select("-password");
    if (user) {
      res.send(user);
    } else {
      res.send({ result: "no user found" });
    }
  } else {
    res.send({ result: "nno user found" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

//15 sakeyo
