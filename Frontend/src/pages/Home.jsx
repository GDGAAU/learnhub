import React from "react";
import { NavLink } from "react-router-dom";
import bluebg from "../assets/bluebg.jpg"; // Import your blue background image
import courseImage from "../assets/courseImage.png"; // Replace with an actual course image

const Home = () => {
  return (
    <div className="flex flex-col gap-16 items-center font-outfit">
      {/* Hero Section */}
      <div
        className="w-full h-[400px] flex flex-col justify-center items-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${bluebg})` }}
      >
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Welcome to LearnHub
          </h1>
          <p className="text-lg lg:text-xl mb-8">
            A peer-to-peer learning platform that connects learners with expert mentors and interactive courses. Start your learning journey today!
          </p>
          <NavLink
            to="/register"
            className="inline-block bg-white text-[#2060b7] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#1a4d95] hover:text-white transition-all duration-300"
          >
            Get Started
          </NavLink>
        </div>
      </div>

      {/* Recommended Courses Section */}
      <div className="w-full max-w-screen-xl text-center">
        <h2 className="text-4xl font-semibold text-gray-800">Recommended Courses</h2>
        <p className="text-lg mt-4 text-gray-600">Handpicked courses just for you</p>
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          {[1, 2, 3].map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-6 rounded-lg w-72 sm:w-80 md:w-96 lg:w-96 xl:w-[350px] h-[480px] text-center transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={courseImage}
                alt={`Course ${index + 1}`}
                className="w-full h-[200px] object-cover rounded-lg"
              />
              <h3 className="mt-4 font-semibold">Course {index + 1}: Web Development</h3>
              <p className="text-sm text-gray-600 mt-2">
                Dive into the world of web development with HTML, CSS, JavaScript, and React. Learn how to build interactive and responsive websites from scratch.
              </p>
              <p className="text-sm text-gray-600 mt-2 italic">Duration: 6 Weeks</p>
              <p className="text-sm text-gray-600 mt-2 italic">Level: Beginner to Intermediate</p>
              <div className="mt-auto">
                <button className="bg-[#2060b7] text-white px-4 py-2 rounded-lg hover:bg-[#1a4d95] transition-colors duration-300 w-full">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newly Added Courses Section */}
      <div className="w-full max-w-screen-xl text-center">
        <h2 className="text-4xl font-semibold text-gray-800">Newly Added Courses</h2>
        <p className="text-lg mt-4 text-gray-600">Check out the latest additions</p>
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          {[1, 2, 3].map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-6 rounded-lg w-72 sm:w-80 md:w-96 lg:w-96 xl:w-[350px] h-[480px] text-center transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={courseImage}
                alt={`Course ${index + 1}`}
                className="w-full h-[200px] object-cover rounded-lg"
              />
              <h3 className="mt-4 font-semibold">Course {index + 1}: Machine Learning</h3>
              <p className="text-sm text-gray-600 mt-2">
                Learn the fundamentals of Machine Learning, from supervised learning to neural networks. Gain practical experience with Python libraries like TensorFlow.
              </p>
              <p className="text-sm text-gray-600 mt-2 italic">Duration: 8 Weeks</p>
              <p className="text-sm text-gray-600 mt-2 italic">Level: Intermediate</p>
              <div className="mt-auto">
                <button className="bg-[#2060b7] text-white px-4 py-2 rounded-lg hover:bg-[#1a4d95] transition-colors duration-300 w-full">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Courses Section */}
      <div className="w-full max-w-screen-xl text-center">
        <h2 className="text-4xl font-semibold text-gray-800">Top Courses</h2>
        <p className="text-lg mt-4 text-gray-600">Most popular courses on LearnHub</p>
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          {[1, 2, 3].map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-6 rounded-lg w-72 sm:w-80 md:w-96 lg:w-96 xl:w-[350px] h-[480px] text-center transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={courseImage}
                alt={`Course ${index + 1}`}
                className="w-full h-[200px] object-cover rounded-lg"
              />
              <h3 className="mt-4 font-semibold">Course {index + 1}: Data Science</h3>
              <p className="text-sm text-gray-600 mt-2">
                Get hands-on experience with data analysis, visualization, and statistical modeling. Learn how to work with real-world data using Python and R.
              </p>
              <p className="text-sm text-gray-600 mt-2 italic">Duration: 10 Weeks</p>
              <p className="text-sm text-gray-600 mt-2 italic">Level: Advanced</p>
              <div className="mt-auto">
                <button className="bg-[#2060b7] text-white px-4 py-2 rounded-lg hover:bg-[#1a4d95] transition-colors duration-300 w-full">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="w-full bg-blue-12 py-16 text-center text-blue">
        <h2 className="text-4xl font-semibold mb-6">Ready to Start Learning?</h2>
        <p className="text-lg mb-8">Join thousands of learners and mentors on LearnHub today.</p>
        <NavLink
          to="/register"
          className="inline-block bg-[#2060b7] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#1a4d95] hover:text-white transition-all duration-300"
        >
          Get Started
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
