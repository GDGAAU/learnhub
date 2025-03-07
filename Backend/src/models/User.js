const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, minlength: 6 },
    role: { type: String, enum: ["student", "mentor"], default: "student" },
    credibility: { type: Boolean, default: false }, // Admin-approved mentors
    bio: { type: String, maxlength: 500 },
    skills: [{ type: String }], // List of skills
    createdCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }], // Courses created by the user
    enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Enrollment" }],
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// Hash password before saving
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model("User", UserSchema);