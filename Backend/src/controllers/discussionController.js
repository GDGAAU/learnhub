const Discussion = require("../models/Discussion");

// Post a comment
exports.postComment = async (req, res) => {
  try {
    const { courseId, message } = req.body;

    const discussion = await Discussion.create({ course: courseId, user: req.user.id, message });
    res.status(201).json(discussion);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get all comments for a course
exports.getComments = async (req, res) => {
  try {
    const comments = await Discussion.find({ course: req.params.courseId }).populate("user", "name");
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
