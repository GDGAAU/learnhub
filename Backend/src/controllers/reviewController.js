const Review = require("../models/Review");

// Add a review
exports.addReview = async (req, res) => {
  try {
    const { courseId, rating, comment } = req.body;

    const review = await Review.create({
      student: req.user.id,
      course: courseId,
      rating,
      comment,
    });

    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get all reviews for a course
exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ course: req.params.courseId }).populate("student", "name");
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
