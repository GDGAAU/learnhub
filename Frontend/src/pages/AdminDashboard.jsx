import React, { useState } from "react";

const FakeSocialMedia = () => {
  const [showPostPopup, setShowPostPopup] = useState(false);
  const [posts, setPosts] = useState([]);
  const [postData, setPostData] = useState({ caption: "", media: "" });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  // Handle post submission
  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!postData.caption.trim()) return; // Prevent empty posts

    const newPost = {
      id: Date.now(),
      user: "CoolUser99",
      avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
      caption: postData.caption,
      media: postData.media,
      time: new Date().toLocaleTimeString(),
    };

    setPosts([newPost, ...posts]); // Add new post at the top
    setPostData({ caption: "", media: "" }); // Reset form
    setShowPostPopup(false); // Close popup
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen py-8 font-sans">
      <div className="w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-[#2060b7] text-center mb-6">Fake Social Media</h2>

        {/* Post Button */}
        <div className="text-center">
          <button
            onClick={() => setShowPostPopup(true)}
            className="bg-[#2060b7] text-white px-6 py-3 rounded-lg hover:bg-[#1a4d95] transition-colors duration-300"
          >
            Post Something
          </button>
        </div>

        {/* Feed */}
        <div className="mt-8 space-y-6">
          {posts.length === 0 ? (
            <p className="text-gray-500 text-center">No posts yet. Be the first to share!</p>
          ) : (
            posts.map((post) => (
              <div key={post.id} className="bg-white shadow-md rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <img src={post.avatar} alt="User" className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="font-semibold">{post.user}</p>
                    <p className="text-xs text-gray-500">{post.time}</p>
                  </div>
                </div>
                <p className="mt-2 text-gray-800">{post.caption}</p>
                {post.media && (
                  <div className="mt-3 rounded-lg overflow-hidden">
                    {post.media.match(/\.(jpg|jpeg|png|gif)$/i) ? (
                      <img src={post.media} alt="Post" className="w-full rounded-lg" />
                    ) : post.media.includes("youtube.com") || post.media.includes("youtu.be") ? (
                      <iframe
                        className="w-full aspect-video rounded-lg"
                        src={post.media.replace("watch?v=", "embed/")}
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <a href={post.media} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                        {post.media}
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Post Popup */}
      {showPostPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg w-full max-w-md shadow-lg">
            <h2 className="text-2xl font-semibold text-[#2060b7] mb-4">Create a Post</h2>
            <form onSubmit={handlePostSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Caption</label>
                <textarea
                  name="caption"
                  value={postData.caption}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Media Link (Optional)</label>
                <input
                  type="text"
                  name="media"
                  value={postData.media}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg"
                  placeholder="Image URL or YouTube link"
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setShowPostPopup(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#2060b7] text-white px-4 py-2 rounded-lg hover:bg-[#1a4d95] transition-colors duration-300"
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FakeSocialMedia;
