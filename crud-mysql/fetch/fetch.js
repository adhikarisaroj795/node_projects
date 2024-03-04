const con = require("../db_connection");

const connection = con.getConnection();

connection.connect();
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  connection.query("select * from employees", (err, array, feilds) => {
    res.send(array);
  });
});

module.exports = router;
