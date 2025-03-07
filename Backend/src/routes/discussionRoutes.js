const express = require("express");
const { postComment, getComments } = require("../controllers/discussionController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Course discussions
router.post("/", protect, postComment);
router.get("/:courseId", getComments);

module.exports = router;
