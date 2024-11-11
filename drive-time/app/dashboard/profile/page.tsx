"use client"
import React, { useState } from 'react';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    phone: '+123456789',
    address: '1234 Street Name, City, Country',
  });

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>
      <div className="space-y-4">
        {Object.entries(profileData).map(([key, value]) => (
          <div key={key} className="flex flex-col">
            <label className="font-semibold capitalize">{key}</label>
            <input
              type="text"
              value={value}
              className="p-2 border border-gray-300 rounded"
              readOnly
            />
          </div>
        ))}
        <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
