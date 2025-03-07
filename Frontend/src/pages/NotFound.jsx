import React from "react";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col gap-16 items-center font-outfit px-4">
     
      
      {/* 404 Content */}
      <div className="w-full max-w-screen-xl text-center">
        <h2 className="text-4xl font-semibold text-[#5AC5C8]">404 - Page Not Found</h2>
        <p className="text-lg text-gray-600 mt-4">The page you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="mt-6 bg-[#5AC5C8] text-white px-6 py-3 rounded-lg inline-block hover:bg-[#4aa9ac] transition-colors duration-300"
        >
          Go Home
        </Link>
      </div>

     
    </div>
  );
};

export default NotFound;