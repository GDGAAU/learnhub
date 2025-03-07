import React, { useState } from "react";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add contact form submission logic here
  };

  return (
    <div className="flex flex-col gap-16 items-center font-outfit px-4">
      {/* Contact Form */}
      <div className="w-full max-w-md bg-white shadow-lg p-8 rounded-lg mt-12">
        <h2 className="text-3xl font-semibold text-[#2060b7] text-center">Contact Us</h2>
        <p className="text-gray-600 text-center mt-2">We'd love to hear from you!</p>

        <form onSubmit={handleSubmit} className="mt-6">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-lg mb-4"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg mb-4"
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 border rounded-lg mb-4"
            rows="4"
          />
          <button
            type="submit"
            className="w-full bg-[#2060b7] text-white p-3 rounded-lg hover:bg-[#1a4d95] transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
