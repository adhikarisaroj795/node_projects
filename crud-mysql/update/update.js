const con = require("../db_connection");
const connection = con.getConnection();
connection.connect();
const express = require("express");
const router = express.Router();

router.patch("/", (req, res) => {
  const e_id = req.body.e_id;
  const e_name = req.body.e_name;
  const e_sal = req.body.e_sal;

  connection.query(
    "UPDATE employees SET e_name = ?, e_sal = ? WHERE e_id = ?",
    [e_name, e_sal, e_id],
    (err, result) => {
      if (err) {
        console.error("Error ", err);
        res.status(500).send({ update: "failed" });
      } else {
        console.log("sucess");
        res.send({ update: "sucess" });
      }
    }
  );
});

module.exports = router;
