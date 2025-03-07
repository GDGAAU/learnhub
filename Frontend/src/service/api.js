import axios from "axios";

const API_BASE_URL =  "http://localhost:5000/api";



// Axios instance for global config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// **Auth API**
export const loginUser = async (credentials) => {
  return api.post("/auth/login", credentials);
};

export const registerUser = async (userData) => {
    return api.post("/auth/register", userData);
  };
  
// **User API**
export const fetchUserProfile = async (userId) => {
  return api.get(`/users/${userId}`);
};

// **Courses API**
export const fetchCourses = async () => {
  return api.get("/courses");
};

export const fetchCourseById = async (courseId) => {
  return api.get(`/courses/${courseId}`);
};

export const enrollInCourse = async (userId, courseId) => {
  return api.post(`/enrollments`, { userId, courseId });
};

// **Reviews API**
export const addReview = async (courseId, reviewData) => {
  return api.post(`/reviews/${courseId}`, reviewData);
};

// **Discussions API**
export const fetchDiscussions = async (courseId) => {
  return api.get(`/discussions/${courseId}`);
};

// **Exports**
export default api;
