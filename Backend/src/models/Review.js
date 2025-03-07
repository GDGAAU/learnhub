const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    course: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
    student: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    comment: { type: String, maxlength: 500 },
  },
  { timestamps: true }
);

// Prevent duplicate reviews per student per course
ReviewSchema.index({ student: 1, course: 1 }, { unique: true });

module.exports = mongoose.model("Review", ReviewSchema);
