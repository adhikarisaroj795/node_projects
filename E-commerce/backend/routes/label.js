const express = require("express");
const router = express.Router();
const loginCheck = require("../app/middleware/loginmiddleware");
const isAdmin = require("../app/middleware/rbac.middlwware");
const LabelController = require("../app/controller/label.controller");
const uploder = require("../app/middleware/uploader.middleware");
const lableCtrl = new LabelController();

router
  .route("/")
  .get(lableCtrl.getAllLabels)
  .post(loginCheck, isAdmin, uploder.single("image"), lableCtrl.store);

router
  .route("/:id")
  .get(loginCheck, (req, res, next) => {})
  .put(loginCheck, isAdmin, uploder.single("image"), lableCtrl.update)
  .delete(loginCheck, isAdmin, lableCtrl.deleteLabelById);

module.exports = router;
