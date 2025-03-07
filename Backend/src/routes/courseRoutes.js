const express = require("express");
const { createCourse, getAllCourses, getCourseById } = require("../controllers/courseController");
const { createLesson, getLessonsByCourse } = require("../controllers/lessonController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Protected routes (require authentication)
router.post("/", protect, createCourse); // Create a new course

// Public routes
router.get("/", getAllCourses); // Get all courses



router.get("/:id", getCourseById); // Get a single course by ID

// Create a lesson
router.post("/:courseID/lesson", protect, createLesson);

// Get lessons for a course
router.get("/:courseID/lessons", protect, getLessonsByCourse);


module.exports = router;