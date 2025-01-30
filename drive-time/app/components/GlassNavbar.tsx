"use client";
import React, { useState, useRef, useEffect } from "react";
import Modal from "./Modal";
import Link from "next/link";
import { supabase } from "@/lib/supabase"; // Import Supabase client
import Image from "next/image";
import { FaBookmark, FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { LuMessageSquare } from "react-icons/lu";
import { IoMdMenu } from "react-icons/io";

const GlassNavbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null); // Store authenticated user
  const menuRef = useRef<HTMLDivElement>(null); // Reference for dropdown menu

  // Fetch the authenticated user from Supabase
  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (data?.user) setUser(data.user);
    };

    fetchUser();

    // Listen for auth state changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => listener?.subscription.unsubscribe();
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Logout function
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    window.location.href = "/"; // Redirect after logout
  };

  return (
    <>
      <nav className="flex items-center justify-between px-4 py-3 mx-4 md:mx-9 my-5 bg-white bg-opacity-90 backdrop-blur-md shadow-xl relative">
        {/* Left Section: Fleet, History, Contact */}
        <div className="hidden md:flex flex-1 justify-start ml-2 gap-8">
          <a href="/#fleet" className="text-gray-600 hover:text-gray-400">
            Fleet
          </a>
          <a href="/#history" className="text-gray-600 hover:text-gray-400">
            History
          </a>
          <a href="/#contact" className="text-gray-600 hover:text-gray-400">
            Contact
          </a>
        </div>

        {/* Logo Section */}
        <div className="flex-shrink-0 flex-1 md:flex justify-center">
          <a href="/" className="text-lg font-bold">
            <img src="/logo1new.png" className="w-32 md:w-40" alt="Logo" />
          </a>
        </div>

        {/* Right Section: Session-dependent content */}
        <div className="flex flex-1 items-center justify-end">
          {user ? (
            <div className="flex items-center gap-4">
              {/* Menu for Large Devices */}
              <div className="hidden hover:shadow-2xl md:flex rounded-full px-2 flex-row items-center hover:shadow-black gap-3">
                <IoMdMenu
                  className="text-3xl cursor-pointer"
                  onClick={toggleMenu}
                />
                <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-300">
                  <Image
                    src={user.user_metadata?.avatar_url || "/default-avatar.png"}
                    alt="User Avatar"
                    width={30}
                    height={30}
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Mobile Menu Toggle */}
              <IoMdMenu
                className="text-3xl cursor-pointer md:hidden"
                onClick={toggleMenu}
              />
            </div>
          ) : (
            <>
              {/* Sign In for Large Devices */}
              <button
                className="hidden md:flex items-center space-x-2 font-montserrat font-light text-sm text-charcoal py-2 px-4 rounded-full hover:bg-black hover:text-white"
                onClick={toggleModal}
              >
                Sign In
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-1 size-5"
                >
                  <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                </svg>
              </button>

              {/* Mobile Menu Toggle */}
              <IoMdMenu
                className="text-3xl cursor-pointer md:hidden"
                onClick={toggleMenu}
              />
            </>
          )}
        </div>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div
            ref={menuRef} // Attach ref to the dropdown
            className="absolute top-[54px] right-0 bg-white rounded-b-lg shadow-lg w-64"
          >
            <div className="p-4 flex flex-col gap-4">
              {/* Common Links for Small Devices */}
              <a href="/#fleet" className="text-gray-700 hover:text-gray-900 w-full text-left">
                Fleet
              </a>
              <a href="/#history" className="text-gray-700 hover:text-gray-900 w-full text-left">
                History
              </a>
              <a href="/#contact" className="text-gray-700 hover:text-gray-900 w-full text-left">
                Contact
              </a>
              <hr className="border-gray-300" />
              {user ? (
                <>
                  <Link href="/dashboard/profile" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                    <FaRegUser />
                    Profile
                  </Link>
                  <Link href="/dashboard/messages" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                    <LuMessageSquare />
                    Messages
                  </Link>
                  <Link href="/dashboard/settings" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                    <IoSettingsOutline />
                    Settings
                  </Link>
                  <Link href="/dashboard/bookings" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                    <FaBookmark />
                    Bookings
                  </Link>
                  <hr className="border-gray-300" />
                  <button onClick={handleLogout} className="w-full text-left text-red-600 hover:text-red-800">
                    Logout
                  </button>
                </>
              ) : (
                <button onClick={toggleModal} className="w-full text-left text-gray-700 hover:text-gray-900">
                  Sign In
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={toggleModal} />
    </>
  );
};

export default GlassNavbar;
