const express = require("express");
const router = express.Router();
const contactController = require("../controller/contactme.controller");
const contact_ctrl = new contactController();

router.route("/").post(contact_ctrl.addContactMsg);

module.exports = router;
