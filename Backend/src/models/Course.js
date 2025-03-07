const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, maxlength: 1000 },
    instructor: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    category: { type: String, required: true },
    topics: [{ type: String }], // List of topics covered in the course
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
    createdAt: { type: Date, default: Date.now },
    content: { type: String, required: true},
    embeds: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", CourseSchema);