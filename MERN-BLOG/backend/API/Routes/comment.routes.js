const express = require("express");
const cmt_ctrl = require("../controllers/commentController");
const { isAuthenticated } = require("../middleware/auth.middleware");

const router = express.Router();

router.route("/comment/create").post(isAuthenticated, cmt_ctrl.createComment);

module.exports = router;

// 8 : 38
