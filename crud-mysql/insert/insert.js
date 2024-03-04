const con = require("../db_connection");
const connection = con.getConnection();
connection.connect();
const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  const e_id = req.body.e_id;
  const e_name = req.body.e_name;
  const e_Sal = req.body.e_sal;

  console.log(e_id);

  connection.query(
    "INSERT INTO employees VALUES (?, ?, ?)",
    [e_id, e_name, e_Sal],
    (err, result) => {
      if (err) {
        res.status(500).send({ insert: "faile" });
      } else {
        res.send({ insert: "sucess" });
      }
    }
  );
});

module.exports = router;
