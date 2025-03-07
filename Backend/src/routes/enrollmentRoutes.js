const express = require("express");
const { enrollInCourse, getEnrollmentsByCourse } = require("../controllers/enrollmentController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Enroll in a course
router.post("/enroll", protect, enrollInCourse);

// Get enrollments for a course
router.get("/:courseId", protect, getEnrollmentsByCourse);

module.exports = router;