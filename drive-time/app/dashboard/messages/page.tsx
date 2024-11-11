
import React from 'react';

const Messages = () => {
  return (
    <div className="flex space-x-4 p-6 bg-white rounded-lg shadow-lg">
      <div className="w-1/3 border-r pr-4">
        <h2 className="text-xl font-bold mb-4">Conversations</h2>
        <ul className="space-y-4">
          <li className="p-2 bg-gray-100 rounded cursor-pointer">User 1</li>
          <li className="p-2 bg-gray-100 rounded cursor-pointer">User 2</li>
        </ul>
      </div>
      <div className="w-2/3">
        <h2 className="text-xl font-bold mb-4">Chat with User 1</h2>
        <div className="h-64 bg-gray-50 p-4 rounded overflow-y-scroll">
          <p className="text-right">Hello, how can I help you?</p>
          <p className="text-left">I wanted to inquire about the rental...</p>
        </div>
        <div className="mt-4 flex">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-grow p-2 border border-gray-300 rounded-l"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-r">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
