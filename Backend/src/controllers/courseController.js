const Course = require("../models/Course");
const User = require("../models/User");

// Create a new course
exports.createCourse = async (req, res) => {
  try {
    const { title, description, category, topics } = req.body;
    const instructor = req.user.id; // Get the logged-in user's ID

    console.log("instructor", instructor);
    const course = await Course.create({ title, description, instructor, category, topics });

    console.log("course", course._id);
    await User.findByIdAndUpdate(instructor, { $push: { createdCourses: course._id } });


    res.status(201).json(course);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get all courses
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate("instructor", "name");
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get a single course by ID
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate("instructor", "name");
    if (!course) return res.status(404).json({ error: "Course not found" });
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};