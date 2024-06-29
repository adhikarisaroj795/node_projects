const express = require("express");
const cmt_ctrl = require("../controllers/commentController");

const router = express.Router();

router.route("/create").post(cmt_ctrl.createComment);

module.exports = router;

// 8 : 38
