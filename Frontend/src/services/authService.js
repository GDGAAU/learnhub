import axios from "axios";

// Register a new user
export const register = async (name, email, password, role) => {
  const response = await axios.post("/api/auth/register", { name, email, password, role });
  return response.data;
};

// Login user
export const login = async (email, password) => {
  const response = await axios.post("/api/auth/login", { email, password });
  return response.data;
};

// Logout user
export const logout = () => {
  localStorage.removeItem("token");
  delete axios.defaults.headers.common["Authorization"];
};