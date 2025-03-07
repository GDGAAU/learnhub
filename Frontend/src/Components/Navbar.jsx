import React, { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const decodeJWT = (token) => {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error("Failed to decode JWT:", error);
    return null;
  }
};

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  // Check if the user is logged in by checking for a JWT in localStorage
  const token = localStorage.getItem("token");
  const isLoggedIn = !!token; // Convert token to boolean (true if token exists, false otherwise)

  // Decode the JWT to get user information (optional)
  const user = token ? decodeJWT(token) : null;

  // Dummy data for registered courses (replace with actual data from your backend)
  const registeredCourses = ["Course 1", "Course 2", "Course 3"];

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the JWT from storage
    window.location.reload(); // Refresh the page to update the UI
  };

  return (
    <div>
      <div className="flex justify-between items-center mx-4 sm:mx-[10%] mt-5 font-outfit">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img className="w-40 h-15" src={logo} alt="logo" />
        </div>

        {/* NavLinks */}
        <div className="hidden lg:block">
          <ul className="flex gap-8 font-medium text-[15px]">
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/courses">COURSES</NavLink>
            </li>
            <li>
              <NavLink to="/mentors">MENTORS</NavLink>
            </li>
            <li>
              <NavLink to="/about">ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="/contact">CONTACT</NavLink>
            </li>
          </ul>
        </div>

        {/* User Profile or Login Button */}
        <div className="relative">
          {isLoggedIn ? (
            <div
              className="cursor-pointer"
              onMouseEnter={() => setShowDropdown(true)} // Show dropdown on hover
              onMouseLeave={() => setShowDropdown(false)} // Hide dropdown when not hovering
            >
              {/* SVG Icon for Logged-In User */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#2060b7]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
          ) : (
            <NavLink
              to="/login"
              className="rounded-3xl bg-[#2060b7] text-white w-36 h-12 flex items-center justify-center hover:bg-[#1a4d95] transition-colors duration-300"
            >
              Login
            </NavLink>
          )}

          {/* Dropdown Menu */}
          {showDropdown && isLoggedIn && (
            <div
              className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50"
              onMouseEnter={() => setShowDropdown(true)} // Keep dropdown open when hovering over it
              onMouseLeave={() => setShowDropdown(false)} // Hide dropdown when not hovering
            >
              {/* Display User Info (Optional) */}
              {user && (
                <div className="px-4 py-2 text-gray-700 font-semibold">
                  Welcome, {user.username}!
                </div>
              )}

              {/* Registered Courses */}
              <div className="px-4 py-2 text-gray-700 font-semibold">
                My Courses
              </div>
              {registeredCourses.map((course, index) => (
                <div
                  key={index}
                  className="block px-4 py-2 text-gray-700 hover:bg-[#2060b7] hover:text-white"
                >
                  {course}
                </div>
              ))}

              {/* Logout Option */}
              <button
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-[#2060b7] hover:text-white"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Divider Line */}
      <hr className="mx-[10%] h-[1.5px] mt-4 bg-[#909293]" />
    </div>
  );
};

export default Navbar;