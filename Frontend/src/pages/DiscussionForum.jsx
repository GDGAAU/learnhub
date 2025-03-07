import React, { useState } from "react";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

const DiscussionForum = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;

    const messageData = {
      id: Date.now(),
      user: "Anonymous", // Static user for now
      message: newMessage,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages([...messages, messageData]);
    setNewMessage("");
  };

  return (
    <div className="flex flex-col items-center font-outfit px-4 py-8">
      <div className="w-full max-w-screen-md">
        <h2 className="text-3xl font-semibold text-[#2060b7] text-center">
          Discussion Forum
        </h2>
        <p className="text-lg text-gray-600 text-center mt-2">
          Chat in real-time, and Collborate
        </p>

        {/* Chat Display */}
        <div className="mt-6 h-96 overflow-y-auto border p-4 rounded-lg shadow-md bg-white">
          {messages.length === 0 ? (
            <p className="text-center text-gray-500">No messages yet. Start chatting!</p>
          ) : (
            messages.map((msg) => (
              <div
                key={msg.id}
                className="p-4 mb-2 bg-[#e6f0ff] rounded-lg shadow-sm"
              >
                <div className="flex justify-between text-sm text-gray-600">
                  <span className="font-bold text-[#2060b7]">{msg.user}</span>
                  <span>{msg.timestamp}</span>
                </div>
                <p className="text-gray-800 mt-1">{msg.message}</p>
              </div>
            ))
          )}
        </div>

        {/* Message Input */}
        <form onSubmit={handleSendMessage} className="mt-4 flex gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 p-2 border rounded-lg"
            required
          />
          <button
            type="submit"
            className="bg-[#2060b7] text-white px-4 py-2 rounded-lg hover:bg-[#1a4d95] transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default DiscussionForum;