const mongoose = require("mongoose");

const LessonSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    teacher: { type: String, required: true },
    youtubeUrl: { type: String, required: true },
    learningObjective: { type: String, required: true },
    courseDuration: { type: String, required: true },
    releaseDate: { type: String, required: true },
    additionalResources: { type: String, default: "" },
    course: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lesson", LessonSchema);