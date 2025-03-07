import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useCourse } from "../context/CourseContext";

const UserDashboard = () => {
  const { user } = useAuth();
  const { enrolledCourses } = useCourse();
  const [notifications] = useState([
    { id: 1, message: "Your course 'React for Beginners' has a new lesson!", time: "2 hours ago" },
    { id: 2, message: "Reminder: Assignment due for 'JavaScript Basics'", time: "1 day ago" },
    { id: 3, message: "New discussion post in 'CSS Mastery' forum", time: "3 days ago" },
  ]);

  return (
    <div className="flex flex-col gap-16 items-center font-outfit px-4">
      <div className="w-full max-w-screen-xl">
        <h2 className="text-4xl font-semibold text-[#2060b7] text-center">Dashboard</h2>
        <p className="text-lg text-gray-600 text-center mt-4">
          Welcome back, {user?.name || "Student"}! Keep learning and stay ahead.
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white shadow-lg p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-[#2060b7]">Enrolled Courses</h3>
            <p className="text-2xl font-bold text-gray-800">{enrolledCourses?.length || 3}</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-[#2060b7]">Completed Lessons</h3>
            <p className="text-2xl font-bold text-gray-800">{Math.floor(Math.random() * 15) + 5}</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-[#2060b7]">Pending Assignments</h3>
            <p className="text-2xl font-bold text-gray-800">{Math.floor(Math.random() * 3) + 1}</p>
          </div>
        </div>

        {/* Course Progress */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-[#2060b7]">Your Courses</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {(enrolledCourses.length ? enrolledCourses : [
              { id: 1, title: "React for Beginners", progress: 65 },
              { id: 2, title: "JavaScript Basics", progress: 40 },
            ]).map((course) => (
              <div key={course.id} className="bg-white shadow-lg p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-800">{course.title}</h4>
                <div className="w-full bg-gray-200 rounded-full h-4 mt-3">
                  <div
                    className="bg-[#2060b7] h-4 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">{course.progress}% Complete</p>
              </div>
            ))}
          </div>
        </div>

        {/* Notifications */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-[#2060b7]">Notifications</h3>
          <div className="bg-white shadow-lg p-6 rounded-lg mt-4 space-y-4">
            {notifications.map((notif) => (
              <div key={notif.id} className="flex justify-between items-center">
                <p className="text-gray-800">{notif.message}</p>
                <span className="text-sm text-gray-500">{notif.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        {/* <div className="mt-12">
          <h3 className="text-2xl font-semibold text-[#2060b7]">Upcoming Events</h3>
          <div className="bg-white shadow-lg p-6 rounded-lg mt-4">
            <p className="text-gray-800">Live Webinar: Advanced React Techniques</p>
            <p className="text-sm text-gray-500">March 10, 2025 - 5:00 PM UTC</p>
            <button className="mt-4 bg-[#2060b7] text-white px-4 py-2 rounded-lg hover:bg-[#1a4d95] transition-colors duration-300">
              Register Now
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default UserDashboard;
