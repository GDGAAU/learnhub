const express = require("express");
const { createLesson, getLessonsByCourse } = require("../controllers/lessonController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Create a lesson
router.post("/:courseId/lessons", protect, createLesson);

// Get lessons for a course
router.get("/:courseId/lessons", protect, getLessonsByCourse);

module.exports = router;