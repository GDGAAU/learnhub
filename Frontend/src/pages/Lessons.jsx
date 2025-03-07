import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const dummyLessons = [
  {
    title: "Introduction to JavaScript",
    description: "Learn the basics of JavaScript and how it works in web development.",
    youtubeEmbedUrl: "https://www.youtube.com/embed/W6NZfCO5SIk",
    additionalResources: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
  },
  {
    title: "Understanding Variables and Data Types",
    description: "A deep dive into variables, constants, and different data types in JavaScript.",
    youtubeEmbedUrl: "https://www.youtube.com/embed/B7wHpNUUT4Y",
    additionalResources: "https://www.w3schools.com/js/js_datatypes.asp"
  },
  {
    title: "Functions and Scope in JavaScript",
    description: "Learn how to write functions and understand variable scope in JavaScript.",
    youtubeEmbedUrl: "https://www.youtube.com/embed/iK7Xr1nZJ6Q",
    additionalResources: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions"
  },
  {
    title: "Introduction to DOM Manipulation",
    description: "How to use JavaScript to interact with HTML elements using the DOM.",
    youtubeEmbedUrl: "https://www.youtube.com/embed/0ik6X4DJKCc",
    additionalResources: "https://www.w3schools.com/js/js_htmldom.asp"
  },
  {
    title: "Event Listeners and Handling User Input",
    description: "Learn how to make web pages interactive using event listeners in JavaScript.",
    youtubeEmbedUrl: "https://www.youtube.com/embed/XF1_MlZ5l6M",
    additionalResources: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events"
  }
];

const Lessons = () => {
  const { courseId } = useParams();
  const navigate = useNavigate(); 
  const [lessons, setLessons] = useState(dummyLessons);
  const [showPopup, setShowPopup] = useState(false);
  const [newLesson, setNewLesson] = useState({
    title: "",
    description: "",
    youtubeUrl: "",
    additionalResources: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewLesson({ ...newLesson, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newLesson.title && newLesson.description) {
      const youtubeEmbedUrl = newLesson.youtubeUrl
        ? `https://www.youtube.com/embed/${newLesson.youtubeUrl.split("v=")[1]}`
        : "";

      setLessons([
        ...lessons,
        {
          ...newLesson,
          youtubeEmbedUrl,
        },
      ]);

      setNewLesson({
        title: "",
        description: "",
        youtubeUrl: "",
        additionalResources: "",
      });

      setShowPopup(false);
    } else {
      alert("Title and description are required!");
    }
  };

  return (
    <div className="flex flex-col gap-16 items-center font-outfit px-4">
      <div className="w-full max-w-screen-xl">
        <h2 className="text-4xl font-semibold text-[#2060b7] text-center">Lessons</h2>
        <p className="text-lg text-gray-600 text-center mt-4">
          Explore the lessons for this course.
        </p>

        <div className="text-center mt-8">
          <button
            onClick={() => setShowPopup(true)}
            className="bg-[#2060b7] text-white px-6 py-3 rounded-lg hover:bg-[#1a4d95] transition-colors duration-300"
          >
            Create Lesson
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lessons.map((lesson, index) => (
            <div key={index} className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-[#2060b7]">{lesson.title}</h3>
              <p className="text-gray-600 mt-2">{lesson.description}</p>

              {lesson.youtubeEmbedUrl && (
                <div className="mt-4">
                  <iframe
                    width="100%"
                    height="200"
                    src={lesson.youtubeEmbedUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}

              {lesson.additionalResources && (
                <div className="mt-4">
                  <p className="text-sm text-gray-600">Additional Resources:</p>
                  <a
                    href={lesson.additionalResources}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2060b7] hover:underline"
                  >
                    {lesson.additionalResources}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => navigate(`/course/${courseId}/discussion`)}
            className="bg-[#2060b7] text-white px-6 py-3 rounded-lg hover:bg-[#1a4d95] transition-colors duration-300"
          >
            Join Discussion
          </button>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold text-[#2060b7] mb-6">Create a Lesson</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Lesson Title</label>
                <input
                  type="text"
                  name="title"
                  value={newLesson.title}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Description</label>
                <textarea
                  name="description"
                  value={newLesson.description}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">YouTube URL (Optional)</label>
                <input
                  type="url"
                  name="youtubeUrl"
                  value={newLesson.youtubeUrl}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg"
                  placeholder="https://www.youtube.com/watch?v=..."
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Additional Resources (Optional)</label>
                <input
                  type="url"
                  name="additionalResources"
                  value={newLesson.additionalResources}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg"
                  placeholder="https://example.com/resource"
                />
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setShowPopup(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#2060b7] text-white px-4 py-2 rounded-lg hover:bg-[#1a4d95] transition-colors duration-300"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lessons;
