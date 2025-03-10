const express = require("express");
const { addReview, getReviews } = require("../controllers/reviewController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Reviews and ratings
router.post("/", protect, addReview);
router.get("/:courseId", getReviews);

module.exports = router;
