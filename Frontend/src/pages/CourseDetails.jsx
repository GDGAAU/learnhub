import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CourseDetails = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [isEnrolled, setIsEnrolled] = useState(false);

  const handleEnroll = () => {
    setIsEnrolled(true);
    navigate(`/course/${courseId}/lessons`);
  };

  return (
    <div className="flex flex-col gap-16 items-center font-outfit px-4">
      {/* Course Details */}
      <div className="w-full max-w-screen-xl">
        <h2 className="text-4xl font-semibold text-[#2060b7] text-center">
          Course Title
        </h2>
        <p className="text-lg text-gray-600 text-center mt-4">
          This is a course description. Learn the basics of this topic.
        </p>

        <div className="mt-8 bg-white shadow-lg p-8 rounded-lg">
          <h3 className="text-2xl font-semibold text-[#2060b7]">
            What You'll Learn
          </h3>
          <ul className="list-disc list-inside mt-4 text-gray-600">
            <li>Skill 1</li>
            <li>Skill 2</li>
            <li>Skill 3</li>
          </ul>

          <button
            onClick={handleEnroll}
            disabled={isEnrolled}
            className="mt-6 bg-[#2060b7] text-white px-6 py-3 rounded-lg w-full hover:bg-[#1a4d95] transition-colors duration-300"
          >
            {isEnrolled ? "Enrolled" : "Enroll Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
