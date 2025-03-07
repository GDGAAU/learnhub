import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import { getAllMentors, verifyMentor } from "../services/mentorService";

const MentorApproval = () => {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const data = await getAllMentors();
        setMentors(data);
      } catch (err) {
        console.error("Failed to fetch mentors:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMentors();
  }, []);

  const handleVerify = async (mentorId) => {
    try {
      await verifyMentor(mentorId);
      setMentors((prev) =>
        prev.map((mentor) =>
          mentor._id === mentorId ? { ...mentor, credibility: true } : mentor
        )
      );
    } catch (err) {
      console.error("Failed to verify mentor:", err);
    }
  };

  return (
    <div className="flex flex-col gap-16 items-center font-outfit px-4">
   
      
      {/* Mentor Approval Content */}
      <div className="w-full max-w-screen-xl">
        <h2 className="text-4xl font-semibold text-[#5AC5C8] text-center">Mentor Approval</h2>
        <p className="text-lg text-gray-600 text-center mt-4">Review and approve mentor applications.</p>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor) => (
              <div key={mentor._id} className="bg-white shadow-lg p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold">{mentor.name}</h3>
                <p className="text-sm text-gray-600 mt-2">{mentor.bio}</p>
                {!mentor.credibility && (
                  <button
                    onClick={() => handleVerify(mentor._id)}
                    className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg"
                  >
                    Approve Mentor
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      
    </div>
  );
};

export default MentorApproval;