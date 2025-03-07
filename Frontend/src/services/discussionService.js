import axios from "axios";

// Post a comment
export const postComment = async (courseId, message) => {
  const response = await axios.post("/api/discussions", { courseId, message });
  return response.data;
};

// Fetch comments for a course
export const getComments = async (courseId) => {
  const response = await axios.get(`/api/discussions/${courseId}`);
  return response.data;
};