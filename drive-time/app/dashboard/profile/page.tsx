"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaUser, FaEnvelope, FaPhone, FaHome } from "react-icons/fa";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    phone: "+123456789",
    address: "1234 Street Name, City, Country",
  });

  const [avatar, setAvatar] = useState<string | null>(null);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    setProfileData({ ...profileData, [key]: e.target.value });
  };

  const handleSave = () => {
    // Logic to save the profile data, e.g., send it to a server.
    console.log("Profile saved:", profileData);
    alert("Profile updated successfully!");
  };

  return (
    <div className="max-w-5xl mx-auto p-8">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-extrabold text-gray-800">Profile Settings</h1>
      </div>

      {/* Avatar and Details */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Avatar Section */}
        <div className="relative">
          {avatar ? (
            <Image
              src={avatar}
              alt="Profile Picture"
              width={150}
              height={150}
              className="rounded-full object-cover border border-gray-300"
            />
          ) : (
            <div className="w-36 h-36 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-lg border border-gray-300">
              <FaUser size={50} />
            </div>
          )}
          <label
            htmlFor="avatarUpload"
            className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 3.487a2.25 2.25 0 0 1 3.182 0l.469.469a2.25 2.25 0 0 1 0 3.182L9.748 18.835a4.5 4.5 0 1 1-3.182-3.182L16.862 3.487z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 7.5l6 6" />
            </svg>
          </label>
          <input
            id="avatarUpload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleAvatarChange}
          />
        </div>

        {/* Profile Info */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-600 font-medium mb-1  items-center gap-2">
              <FaUser className="text-blue-500" /> First Name
            </label>
            <input
              type="text"
              value={profileData.firstName}
              onChange={(e) => handleInputChange(e, "firstName")}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-1  items-center gap-2">
              <FaUser className="text-blue-500" /> Last Name
            </label>
            <input
              type="text"
              value={profileData.lastName}
              onChange={(e) => handleInputChange(e, "lastName")}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-1  items-center gap-2">
              <FaEnvelope className="text-blue-500" /> Email
            </label>
            <input
              type="email"
              value={profileData.email}
              onChange={(e) => handleInputChange(e, "email")}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-1  items-center gap-2">
              <FaPhone className="text-blue-500" /> Phone
            </label>
            <input
              type="text"
              value={profileData.phone}
              onChange={(e) => handleInputChange(e, "phone")}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="block text-gray-600 font-medium mb-1  items-center gap-2">
              <FaHome className="text-blue-500" /> Address
            </label>
            <input
              type="text"
              value={profileData.address}
              onChange={(e) => handleInputChange(e, "address")}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="text-right mt-8">
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Profile;
