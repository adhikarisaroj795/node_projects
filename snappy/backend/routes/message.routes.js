const express = require("express");
const router = express.Router();
const MessageController = require("../api/controllers/message.controller");
const msg_ctrl = new MessageController();

router.route("/addmessage").post(msg_ctrl.addMessage);
router.route("/getmessage").post(msg_ctrl.getAllMessage);

module.exports = router;
