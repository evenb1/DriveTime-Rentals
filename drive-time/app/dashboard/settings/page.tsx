"use client";
import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Settings = () => {
  return (
    <div className="p-8 flex flex-col gap-2 rounded-lg max-w-5xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-6 text-gray-800">Account Settings</h1>
      <hr className="my-4 border-t border-gray-300" />

      {/* Email Preferences Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 flex items-center gap-2 mb-4">
          <FaEnvelope className="text-blue-500" /> Email Preferences
        </h2>
        <div className="mt-4">
          <label className="flex items-center mb-3">
            <input
              type="checkbox"
              className="w-5 h-5 text-blue-500 border-gray-300 focus:ring-blue-400"
            />
            <span className="ml-2 text-gray-600">Receive Booking Updates</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="w-5 h-5 text-blue-500 border-gray-300 focus:ring-blue-400"
            />
            <span className="ml-2 text-gray-600">Receive Promotions and Offers</span>
          </label>
        </div>
      </div>
      <hr className="my-4 border-t border-gray-200" />

      {/* Security Section */}
      <div>
        <h2 className="text-xl font-semibold text-gray-700 flex items-center gap-2 mb-4">
          <FaLock className="text-blue-500" /> Security Settings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-600 font-medium mb-1">Current Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-1">New Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
