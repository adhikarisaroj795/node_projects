const express = require("express");
const router = express.Router();
const loginCheck = require("../app/middleware/loginmiddleware");
const isAdmin = require("../app/middleware/rbac.middlwware");
const LabelController = require("../app/controller/label.controller");
const lableCtrl = new LabelController();

router
  .route("/")
  .get((req, res, next) => {
    res.json({ msg: "hello-world" });
  })
  .post(loginCheck, isAdmin, lableCtrl.store);

router
  .route("/:id")
  .get(loginCheck, (req, res, next) => {})
  .patch((req, res, next) => {});

module.exports = router;
