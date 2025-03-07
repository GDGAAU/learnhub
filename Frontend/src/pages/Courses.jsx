import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import CourseCard from "../Components/CourseCard.jsx";
import { useCourse } from "../context/CourseContext";
import bluebg from "../assets/bluebg.jpg"; // Importing background image

const Courses = () => {
  const { courses, fetchCourses } = useCourse();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCourses();
      setLoading(false);
    };
    fetchData();
  }, [fetchCourses]);
  console.log(courses);

  return (
    <div className="flex flex-col gap-16 items-center font-outfit">
      {/* Hero Section */}
      <div
        className="w-full h-[400px] flex flex-col justify-center items-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${bluebg})` }}
      >
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">All Courses</h1>
          <p className="text-lg lg:text-xl mb-8">
            Explore all the courses available on LearnHub and enhance your skills today!
          </p>
        </div>
      </div>

      {/* Courses List */}
      <div className="w-full max-w-screen-xl text-center">
        <h2 className="text-4xl font-semibold text-gray-800">Browse Our Courses</h2>
        <p className="text-lg mt-4 text-gray-600">Find the perfect course to start your learning journey.</p>

        {loading ? (
          <p className="text-center mt-8 text-lg text-gray-600">Loading...</p>
        ) : (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
