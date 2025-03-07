import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import api from "../service/api.js"

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on app load
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      fetchUserProfile();
    } else {
      setLoading(false);
    }
  }, []);

  // Fetch user profile
  const fetchUserProfile = async () => {
    try {
      const response = await axios.get("/api/users/profile");
      setUser(response.data);
    } catch (err) {
      console.error("Failed to fetch user profile:", err);
    } finally {
      setLoading(false);
    }
  };

  // Login user
  const login = async (email, password) => {
    try {
      const response = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", response.data.token);
      api.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
      setUser(response.data.user);
    } catch (err) {
      throw new Error(err.response?.data?.error || "Login failed");
    }
  };

  // Register user
  const register = async (name, email, password, role) => {
    try {
      const response = await api.post("/auth/register", { name, email, password, role });
      localStorage.setItem("token", response.data.token);
    api.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
      setUser(response.data.user);
    } catch (err) {
      throw new Error(err.response?.data?.error || "Registration failed");
    }
  };

  // Logout user
  const logout = () => {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);