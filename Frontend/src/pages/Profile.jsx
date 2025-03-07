import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import { useAuth } from "../context/AuthContext";
import { updateProfile } from "../services/userService";

const Profile = () => {
  const { user } = useAuth();
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setBio(user.bio || "");
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(name, bio);
      alert("Profile updated successfully!");
    } catch (err) {
      console.error("Failed to update profile:", err);
    }
  };

  return (
    <div className="flex flex-col gap-16 items-center font-outfit px-4">

      
      {/* Profile Form */}
      <div className="w-full max-w-md bg-white shadow-lg p-8 rounded-lg mt-12">
        <h2 className="text-3xl font-semibold text-[#5AC5C8] text-center">Profile</h2>
        <p className="text-gray-600 text-center mt-2">Update your profile information.</p>

        <form onSubmit={handleSubmit} className="mt-6">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-lg mb-4"
          />
          <textarea
            placeholder="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full p-3 border rounded-lg mb-4"
            rows="4"
          />
          <button
            type="submit"
            className="w-full bg-[#5AC5C8] text-white p-3 rounded-lg hover:bg-[#4aa9ac] transition-colors duration-300"
          >
            Save Changes
          </button>
        </form>
      </div>

     
    </div>
  );
};

export default Profile;