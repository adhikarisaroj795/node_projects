const express = require("express");
const router = express.Router();
const loginCheck = require("../app/middleware/loginmiddleware");

router
  .route("/order")
  .get((req, res, next) => {
    res.json({ msg: "hello-world" });
  })
  .post((req, res, next) => {});

router
  .route("/:id")
  .get(loginCheck, (req, res, next) => {})
  .patch((req, res, next) => {});

module.exports = router;
