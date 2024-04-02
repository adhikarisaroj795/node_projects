const express = require("express");
const router = express.Router();

router
  .route("/product")
  .get((req, res, next) => {})
  .post((req, res, next) => {});

router
  .route("/:id")
  .get((req, res, next) => {})
  .patch((req, res, next) => {});

module.exports = router;
