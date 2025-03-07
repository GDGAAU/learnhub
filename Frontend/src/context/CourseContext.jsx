import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import api from "../service/api";

const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  // Fetch all courses
  const fetchCourses = async () => {
    try {
      const response = await api.get("/courses");
      setCourses(response.data);
    } catch (err) {
      console.error("Failed to fetch courses:", err);
    }
  };

  // Enroll in a course
  const enrollInCourse = async (courseId) => {
    try {
      const response = await api.post("/enrollments/enroll", { courseId });
      setEnrolledCourses((prev) => [...prev, response.data]);
    } catch (err) {
      throw new Error(err.response?.data?.error || "Enrollment failed");
    }
  };

  // Update course progress
  const updateProgress = async (enrollmentId, progress) => {
    try {
      const response = await api.put("/enrollments/progress", { enrollmentId, progress });
      setEnrolledCourses((prev) =>
        prev.map((enrollment) =>
          enrollment._id === enrollmentId ? response.data : enrollment
        )
      );
    } catch (err) {
      throw new Error(err.response?.data?.error || "Progress update failed");
    }
  };

  return (
    <CourseContext.Provider
      value={{ courses, enrolledCourses, fetchCourses, enrollInCourse, updateProgress }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = () => useContext(CourseContext);