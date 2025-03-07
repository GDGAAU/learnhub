const User = require("../models/User");

// Get all mentors
exports.getAllMentors = async (req, res) => {
  try {
    const mentors = await User.find({ role: "mentor", credibility: true }).select("-password"); // Fetch only verified mentors
    res.json(mentors);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get user profile
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ error: "User not found" });

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Admin approves credibility
exports.verifyMentor = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, { credibility: true }, { new: true });
    if (!user) return res.status(404).json({ error: "User not found" });

    res.json({ message: "User verified as mentor", user });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
