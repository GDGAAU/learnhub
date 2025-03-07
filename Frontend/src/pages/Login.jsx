import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/dashboard"); // Redirect to dashboard
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="flex flex-col gap-16 items-center font-outfit px-4">
      {/* Login Form */}
      <div className="w-full max-w-md bg-white shadow-lg p-8 rounded-lg mt-12">
        <h2 className="text-3xl font-semibold text-[#2060b7] text-center">Login</h2>
        <p className="text-gray-600 text-center mt-2">Welcome back! Please log in to continue.</p>

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}

        <form onSubmit={handleSubmit} className="mt-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-lg mb-4"
          />
          <button
            type="submit"
            className="w-full bg-[#2060b7] text-white p-3 rounded-lg hover:bg-[#1a4d95] transition-colors duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-gray-600 text-center mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-[#2060b7] hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
