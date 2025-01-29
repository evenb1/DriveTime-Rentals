"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { supabase } from "@/lib/supabase"; // Ensure the correct path

const TopNav = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error("Error fetching user:", error.message);
      } else {
        setUser(data.user);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return (
      <div className="top-nav bg-gray-900 p-4 text-white text-center">
        <p>You are not logged in.</p>
      </div>
    );
  }

  return (
    <nav className="fixed top-0 right-0 z-50 bg-gray-900 shadow-lg rounded-full m-3 px-4 py-2 flex items-center gap-4">
      <Link href="/">
        <FaHome className="text-blue-500 text-2xl cursor-pointer hover:text-blue-600 transition" />
      </Link>

      <div className="flex items-center gap-3">
        <span className="text-white font-montserrat font-medium text-lg">
          {user.email || "Guest"}
        </span>

        <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-300">
          <Image
            src={user.user_metadata?.avatar_url || "/default-avatar.png"}
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
