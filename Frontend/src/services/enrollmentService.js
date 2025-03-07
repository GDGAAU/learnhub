import axios from "axios";

// Update course progress
export const updateProgress = async (enrollmentId, progress) => {
  const response = await axios.put("/api/enrollments/progress", { enrollmentId, progress });
  return response.data;
};