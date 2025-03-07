import axios from "axios";
import api from "../service/api";

// Fetch all mentors
export const getAllMentors = async () => {
  const response = await api.get("/users/mentors");
  return response.data;
};

// Verify a mentor
export const verifyMentor = async (mentorId) => {
  const response = await axios.put(`/api/users/verify/${mentorId}`);
  return response.data;
};