import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const Sidemenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden">
      {/* Menu Toggle Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-50 p-2 bg-[#5AC5C8] text-white rounded-lg"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#04353D] text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-40`}
      >
        <div className="p-4">
          <div className="flex items-center gap-2 mb-8">
            <img className="w-28 h-12" src={logo} alt="logo" />
          </div>

          <ul className="space-y-4">
            <li>
              <NavLink
                to="/"
                className={`block hover:text-[#5AC5C8] ${
                  location.pathname === "/" ? "text-[#5AC5C8]" : ""
                }`}
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courses"
                className={`block hover:text-[#5AC5C8] ${
                  location.pathname === "/courses" ? "text-[#5AC5C8]" : ""
                }`}
              >
                COURSES
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/instructors"
                className={`block hover:text-[#5AC5C8] ${
                  location.pathname === "/instructors" ? "text-[#5AC5C8]" : ""
                }`}
              >
                INSTRUCTORS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={`block hover:text-[#5AC5C8] ${
                  location.pathname === "/about" ? "text-[#5AC5C8]" : ""
                }`}
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={`block hover:text-[#5AC5C8] ${
                  location.pathname === "/contact" ? "text-[#5AC5C8]" : ""
                }`}
              >
                CONTACT
              </NavLink>
            </li>
          </ul>

          <button className="mt-8 bg-[#5AC5C8] text-white px-6 py-2 rounded-lg w-full">
            <NavLink to="/login">Login</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidemenu;