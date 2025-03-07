import axios from "axios";

// Add a review
export const addReview = async (courseId, rating, comment) => {
  const response = await axios.post("/api/reviews", { courseId, rating, comment });
  return response.data;
};

// Fetch reviews for a course
export const getReviews = async (courseId) => {
  const response = await axios.get(`/api/reviews/${courseId}`);
  return response.data;
};