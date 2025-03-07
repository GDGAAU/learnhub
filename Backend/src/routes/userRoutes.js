const express = require("express");
const { getProfile, verifyMentor } = require("../controllers/userController");
const { protect, adminOnly } = require("../middleware/authMiddleware");
const { getAllMentors } = require("../controllers/userController");

const router = express.Router();

// Protected routes
router.get("/profile", protect, getProfile);
router.put("/verify/:id", protect,  verifyMentor); // Admin approval required
router.get("/mentors", getAllMentors);

module.exports = router;
