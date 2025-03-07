import axios from "axios";
import api from "./api";

// Fetch all courses
export const getAllCourses = async () => {
  const response = await api.get("/courses");
  return response.data;
};

// Fetch course details
export const getCourseDetails = async (courseId) => {
  const response = await api.get(`/courses/${courseId}`);
  return response.data;
};

// Enroll in a course
export const enrollInCourse = async (courseId) => {
  const response = await api.post("/enrollments/enroll", { courseId });
  return response.data;
};