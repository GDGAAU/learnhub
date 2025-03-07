import React from "react";
import { NavLink } from "react-router-dom";
import RatingStars from "./RatingStars";

const CourseCard = ({ course }) => {
  console.log(course);
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg w-100 text-center hover:shadow-xl transition-shadow duration-300">
      <img
        src={course.image || "https://img.freepik.com/free-vector/flat-design-responsive-website-design_23-2149489189.jpg"}
        alt={course.title}
        className="w-full h-40 object-cover rounded-lg"
      />
      <h3 className="mt-4 font-semibold text-[#2060b7]">{course.title}</h3>
      <p className="text-sm text-gray-600 mt-2">{course.description}</p>
      <div className="mt-4 flex justify-center">
        {/* <RatingStars rating={course.rating} /> */}
      </div>
      <NavLink
        to={`/course/${course._id}`}
        className="mt-4 bg-[#2060b7] text-white px-4 py-2 rounded-lg inline-block hover:bg-[#1a4d95] transition-colors duration-300"
      >
        Enroll Now
      </NavLink>
    </div>
  );
};

export default CourseCard;
