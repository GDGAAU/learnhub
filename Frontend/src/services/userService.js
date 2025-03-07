import axios from "axios";

// Fetch user profile
export const getProfile = async () => {
  const response = await axios.get("/api/users/profile");
  return response.data;
};

// Update user profile
export const updateProfile = async (name, bio) => {
  const response = await axios.put("/api/users/profile", { name, bio });
  return response.data;
};