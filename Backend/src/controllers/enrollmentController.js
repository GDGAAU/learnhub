const Enrollment = require("../models/Enrollment");

// Enroll in a course
exports.enrollInCourse = async (req, res) => {
  try {
    const { courseId } = req.body;
    const studentId = req.user.id;

    // Check if the user is already enrolled
    const existingEnrollment = await Enrollment.findOne({ student: studentId, course: courseId });
    if (existingEnrollment) {
      return res.status(400).json({ error: "Already enrolled in this course." });
    }

    // Create a new enrollment
    const enrollment = await Enrollment.create({ student: studentId, course: courseId });
    res.status(201).json(enrollment);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get enrollments for a course
exports.getEnrollmentsByCourse = async (req, res) => {
  try {
    const enrollments = await Enrollment.find({ course: req.params.courseId }).populate(
      "student",
      "name"
    );
    res.json(enrollments);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};