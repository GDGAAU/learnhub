import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import { getAllMentors } from "../services/mentorService";

const Mentors = () => {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        // Fake data for the mentors
        const data = [
          {
            _id: "1",
            name: "John Doe",
            bio: "Expert in Web Development with 10+ years of experience.",
            rating: 4.5,
            reviews: [
              { id: 1, content: "Great mentor! Helped me a lot with React.", reviewer: "Alice" },
              { id: 2, content: "Very knowledgeable and patient.", reviewer: "Bob" },
            ],
            verified: true,
          },
          {
            _id: "2",
            name: "Jane Smith",
            bio: "Passionate about AI and Machine Learning, with a focus on neural networks.",
            rating: 4.8,
            reviews: [
              { id: 1, content: "Amazing insights into ML concepts!", reviewer: "Charlie" },
              { id: 2, content: "Great teacher with clear explanations.", reviewer: "David" },
            ],
            verified: false,
          },
          // Add more mentors here...
        ];

        setMentors(data);
      } catch (err) {
        console.error("Failed to fetch mentors:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMentors();
  }, []);

  return (
    <div className="flex flex-col gap-16 items-center font-outfit px-4">
      {/* Mentors List */}
      <div className="w-full max-w-screen-xl">
        <h2 className="text-4xl font-semibold text-[#2060b7] text-center">Our Mentors</h2>
        <p className="text-lg text-gray-600 text-center mt-4">Meet the experts guiding your learning journey.</p>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.length > 0 &&
              mentors?.map((mentor) => (
                <div key={mentor._id} className="bg-white shadow-lg p-6 rounded-lg text-center">
                  <h3 className="text-xl font-semibold">{mentor.name}</h3>
                  <div className="flex justify-center items-center mt-2">
                    <span
                      className={`text-sm font-medium ${
                        mentor.verified ? "text-green-500" : "text-gray-500"
                      }`}
                    >
                      {mentor.verified ? "Verified Mentor" : "Unverified"}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{mentor.bio}</p>
                  <div className="flex justify-center items-center mt-4">
                    <div className="flex items-center">
                      <span className="text-lg font-semibold">{mentor.rating}</span>
                      <span className="ml-2 text-sm text-yellow-500">⭐</span>
                    </div>
                  </div>

                  {/* Reviews Section */}
                  <div className="mt-4">
                    <h4 className="text-lg font-medium text-[#2060b7]">Reviews</h4>
                    <ul className="text-sm text-gray-600 mt-2">
                      {mentor.reviews.map((review) => (
                        <li key={review.id} className="mt-2">
                          <span className="font-semibold">{review.reviewer}:</span> {review.content}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="mt-4 bg-[#2060b7] text-white px-4 py-2 rounded-lg hover:bg-[#1a4d95] transition-colors duration-300">
                    View Profile
                  </button>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Mentors;
