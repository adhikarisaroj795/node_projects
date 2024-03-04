const con = require("../db_connection");
const connection = con.getConnection();

connection.connect();
const express = require("express");
const router = express.Router();

router.delete("/", (req, res) => {
  const e_id = req.body.e_id;
  connection.query(
    "DELETE FROM employees WHERE e_id = ?",
    [e_id],
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
