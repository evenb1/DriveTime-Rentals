"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

const TopNav = ({ userName = "John Doe", avatarUrl = "/default-avatar.png" }) => {
  return (
    <nav className="w-full h-16 bg-white shadow-md flex items-center justify-between px-6">
      {/* Home Icon */}
      <Link href="/">
        <FaHome className="text-blue-500 text-2xl cursor-pointer hover:text-blue-600 transition" />
      </Link>

      {/* User Info */}
      <div className="flex items-center gap-4">
        {/* User Name */}
        <span className="text-gray-700 font-medium text-lg">{userName}</span>

        {/* User Avatar */}
        <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-300">
          <Image
            src={avatarUrl}
            alt="User Avatar"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
