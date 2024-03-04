const express = require("express");
const PostController = require("../controllers/post.controller");
const postController = require("../controllers/post.controller");

const router = express.Router();

router.post("/", postController.save);
router.get("/:id", postController.show);

module.exports = router;
