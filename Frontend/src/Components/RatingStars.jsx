import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex text-[#FFD700]">
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} />
      ))}
      {hasHalfStar && <FaStarHalfAlt />}
      {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, index) => (
        <FaStar key={index + fullStars} className="text-gray-300" />
      ))}
    </div>
  );
};

export default RatingStars;