"use client";

import React, { useState } from "react";
import { FaSearch, FaPaperPlane, FaUserCircle, FaBars } from "react-icons/fa";

// Define the message type
type Message = {
  id: number;
  sender: string;
  message: string;
  time: string;
};

const MessagesPage = () => {
  const [searchQuery, setSearchQuery] = useState(""); // For search input
  const [messages] = useState<Message[]>([
    {
      id: 1,
      sender: "John Doe",
      message: "Hello, I want to confirm my booking details.",
      time: "2:30 PM",
    },
    {
      id: 2,
      sender: "Jane Smith",
      message: "Can I modify my rental period?",
      time: "1:15 PM",
    },
    {
      id: 3,
      sender: "Car Rental Support",
      message: "Your payment has been received successfully.",
      time: "10:45 AM",
    },
  ]);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Filter messages based on the search query
  const filteredMessages = messages.filter((msg) =>
    msg.sender.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Sidebar Toggle (Mobile) */}
      <button
        className="md:hidden bg-gray-900 text-white p-3 fixed top-4 left-4 rounded-md z-50"
        onClick={() => setSidebarOpen(true)}
      >
        <FaBars size={20} />
      </button>

      {/* Sidebar - List of Messages */}
      <div
        className={`fixed md:relative z-40 top-0 left-0 h-full bg-white shadow-md transition-transform transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-1/3 w-full md:block p-4`}
      >
        {/* Close Sidebar (Mobile) */}
        <div className="flex justify-between items-center mb-4 md:hidden">
          <h2 className="text-xl font-bold text-gray-800">Messages</h2>
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={() => setSidebarOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Search Bar */}
        <div className="flex items-center mb-4 bg-gray-50 p-3 rounded-lg shadow-sm">
          <FaSearch className="text-gray-400 text-lg mr-2" />
          <input
            type="text"
            placeholder="Search messages..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Messages List */}
        <ul className="space-y-3 overflow-y-auto h-[70vh] md:h-auto">
          {filteredMessages.length > 0 ? (
            filteredMessages.map((msg) => (
              <li
                key={msg.id}
                onClick={() => {
                  setSelectedMessage(msg);
                  setSidebarOpen(false); // Close sidebar on mobile
                }}
                className={`p-3 rounded-lg flex items-start gap-3 cursor-pointer transition ${
                  selectedMessage?.id === msg.id
                    ? "bg-blue-100"
                    : "hover:bg-gray-50"
                }`}
              >
                <FaUserCircle className="text-gray-400 text-3xl" />
                <div className="flex-1">
                  <h4 className="text-gray-800 font-semibold">{msg.sender}</h4>
                  <p className="text-gray-600 text-sm truncate">
                    {msg.message}
                  </p>
                  <span className="text-gray-500 text-xs">{msg.time}</span>
                </div>
              </li>
            ))
          ) : (
            <li className="text-gray-500 text-center italic">
              No messages found.
            </li>
          )}
        </ul>
      </div>

      {/* Message Content */}
      <div className="flex-1 bg-white p-6 flex flex-col md:rounded-r-lg h-full">
        {selectedMessage ? (
          <>
            {/* Header */}
            <div className="flex items-center justify-between border-b pb-4 mb-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {selectedMessage.sender}
              </h2>
              <span className="text-gray-500 text-sm">
                {selectedMessage.time}
              </span>
            </div>

            {/* Message Body */}
            <div className="flex-1 overflow-y-auto p-2">
              <p className="text-gray-700">{selectedMessage.message}</p>
            </div>

            {/* Reply Input */}
            <div className="mt-4">
              <div className="flex items-center bg-gray-50 p-3 rounded-lg shadow-sm">
                <input
                  type="text"
                  placeholder="Type your reply..."
                  className="w-full bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
                />
                <button className="ml-3 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition">
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500 italic">
            Select a message to view.
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagesPage;
