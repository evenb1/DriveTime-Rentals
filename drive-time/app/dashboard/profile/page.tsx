"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaUser, FaPhone, FaCamera } from "react-icons/fa";
import { supabase } from "@/lib/supabase"; // Ensure the correct import
import { toast } from "react-toastify";

const Profile = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [avatar, setAvatar] = useState<string | null>(null);
  const [profileData, setProfileData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
  });

  // Fetch user data from Supabase
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data, error } = await supabase
          .from("users")
          .select("id, first_name, last_name, avatar_url")
          .eq("email", user?.email)
          .single(); // Ensure only one user is returned
  
        if (error) {
          throw error;
        }
  
        setUser(data);
      } catch (err) {
        console.error("Error fetching user details:", err);
      }
    };
  
    fetchUser();
  }, [user?.email]);
  
  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    setProfileData({ ...profileData, [key]: e.target.value });
  };

  // Handle avatar upload
  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const fileExt = file.name.split(".").pop();
    const fileName = `${user.id}.${fileExt}`;
    const filePath = `avatars/${fileName}`;

    const { data, error } = await supabase.storage.from("avatars").upload(filePath, file, {
      upsert: true,
    });

    if (error) {
      console.error("Error uploading avatar:", error.message);
      return;
    }

    const { data: publicURL } = supabase.storage.from("avatars").getPublicUrl(filePath);
    setAvatar(publicURL.publicUrl);

    await supabase
      .from("users")
      .update({ avatar_url: publicURL.publicUrl })
      .eq("email", user.email);
  };

  // Save changes
  const handleSave = async () => {
    if (!user) return;

    const { error } = await supabase
      .from("users")
      .update({
        first_name: profileData.first_name,
        last_name: profileData.last_name,
        phone: profileData.phone,
        avatar_url: avatar,
      })
      .eq("email", user.email);

    if (error) {
      console.error("Error updating profile:", error.message);
      return;
    }

    toast.success("Profile updated successfully!");
  };

  if (loading) return <p className="text-center text-gray-600">Loading profile...</p>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Header */}
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center md:text-left">
        Profile
      </h1>
      <hr className="my-4 border-t border-gray-300" />

      {/* Profile Content */}
      <div className="flex flex-col md:flex-row items-center md:items-start p-6 gap-6">
        {/* Avatar Upload */}
        <div className="relative">
        <Image
  src={user?.avatar_url || "/default-avatar.png"}
  alt="User Avatar"
  width={40}
  height={40}
  className="object-cover"
/>

          <label
            htmlFor="avatarUpload"
            className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 cursor-pointer"
          >
            <FaCamera />
          </label>
          <input
            id="avatarUpload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleAvatarChange}
          />
        </div>

        {/* Profile Form */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              <FaUser className="inline text-blue-500 mr-1" /> First Name
            </label>
            <input
              type="text"
              value={profileData.first_name}
              onChange={(e) => handleInputChange(e, "first_name")}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              <FaUser className="inline text-blue-500 mr-1" /> Last Name
            </label>
            <input
              type="text"
              value={profileData.last_name}
              onChange={(e) => handleInputChange(e, "last_name")}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              <FaPhone className="inline text-blue-500 mr-1" /> Phone
            </label>
            <input
              type="text"
              value={profileData.phone}
              onChange={(e) => handleInputChange(e, "phone")}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="text-center md:text-right mt-8">
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
