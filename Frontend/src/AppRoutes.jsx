import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import CourseDetails from "./pages/CourseDetails";
import Profile from "./pages/Profile";
import Courses from "./pages/Courses";
import Mentors from "./pages/Mentors";
import AdminDashboard from "./pages/AdminDashboard";
import MentorApproval from "./pages/MentorApproval";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Layout from "./Components/Layout";
import Lessons from "./pages/Lessons";
import DiscussionForum from "./pages/DiscussionForum";

const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/mentors" element={<Mentors />} />

          {/* User-Only Routes */}
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/course/:courseId" element={<CourseDetails />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/course/:courseId/lessons" element={<Lessons />} />
          <Route path="/course/:courseId/discussion" element={<DiscussionForum />} />

          {/* Admin-Only Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/mentor-approval" element={<MentorApproval />} />

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoutes;