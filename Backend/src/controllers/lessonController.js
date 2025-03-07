const Lesson = require("../models/Lesson");

// Create a new lesson
exports.createLesson = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { name, description, teacher, youtubeUrl, learningObjective, courseDuration, releaseDate, additionalResources } = req.body;

    // Create the lesson
    const lesson = await Lesson.create({
      name,
      description,
      teacher,
      youtubeUrl,
      learningObjective,
      courseDuration,
      releaseDate,
      additionalResources,
      course: courseId,
    });

    res.status(201).json(lesson);
  } catch (err) {
    console.error("Error creating lesson:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// Get lessons for a course
exports.getLessonsByCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const lessons = await Lesson.find({ course: courseId });
    res.json(lessons);
  } catch (err) {
    console.error("Error fetching lessons:", err);
    res.status(500).json({ error: "Server error" });
  }
};