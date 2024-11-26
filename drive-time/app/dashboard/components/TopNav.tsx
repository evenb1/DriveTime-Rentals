"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { useSession } from "next-auth/react";



const TopNav = () => {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="top-nav">
        <p>You are not logged in.</p>
      </div>
    );
  }
  return (
    <nav className="fixed top-0 right-0 z-50 bg-gray-900 shadow-lg rounded-full m-3 px-4 py-2 flex items-center gap-4">
      {/* Home Icon */}
      <Link href="/">
        <FaHome className="text-blue-500 text-2xl cursor-pointer hover:text-blue-600 transition" />
      </Link>

      {/* User Info */}
      <div className="flex items-center gap-3">
        {/* User Name */}
        <span className="text-white font-montserrat font-medium text-lg">{session.user.name || "Guest"}</span>

        {/* User Avatar */}
        <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-300">
          <Image
            src={session.user.image || "/default-avatar.png"}
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
