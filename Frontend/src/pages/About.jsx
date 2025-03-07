import React from "react";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import bluebg from "../assets/bluebg.jpg"; // Using the same background as Home

const About = () => {
  return (
    <div className="flex flex-col gap-16 items-center font-outfit">
      {/* Hero Section */}
      <div
        className="w-full h-[400px] flex flex-col justify-center items-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${bluebg})` }}
      >
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">About LearnHub</h1>
          <p className="text-lg lg:text-xl">
            Connecting learners with expert mentors for an interactive and community-driven learning experience.
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="w-full max-w-screen-xl text-center">
        <h2 className="text-4xl font-semibold text-gray-800">Who We Are</h2>
        <p className="text-lg text-gray-600 mt-4">
          LearnHub is a peer-to-peer learning platform dedicated to making education accessible to everyone.
        </p>
        <p className="text-lg text-gray-600 mt-4">
          Our mission is to foster a learning community where knowledge is shared, mentors guide learners, and education is interactive and engaging.
        </p>
      </div>

      {/* Our Mission Section */}
      <div className="w-full max-w-screen-xl text-center">
        <h2 className="text-4xl font-semibold text-gray-800">Our Mission</h2>
        <p className="text-lg text-gray-600 mt-4">
          We believe in a world where learning is not confined to traditional classrooms. LearnHub empowers individuals with the tools and mentorship they need to succeed.
        </p>
      </div>

      {/* Call to Action Section */}
      <div className="w-full bg-blue-12 py-16 text-center text-blue">
        <h2 className="text-4xl font-semibold mb-6">Join Our Community</h2>
        <p className="text-lg mb-8">Become a part of the LearnHub family and start your learning journey today.</p>
        <a
          href="/register"
          className="inline-block bg-[#2060b7] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#1a4d95] hover:text-white transition-all duration-300"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default About;
