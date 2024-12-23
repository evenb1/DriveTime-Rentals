"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { FaBookmark, FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { LuMessageSquare } from "react-icons/lu";
import { IoMdMenu } from "react-icons/io";

const GlassNavbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { data: session } = useSession();

  return (
    <>
      <nav className="flex items-center justify-between px-4 py-3 mx-4 md:mx-9 my-5 bg-white bg-opacity-90 backdrop-blur-md shadow-xl relative">
        {/* Left Section: Fleet, History, Contact */}
        <div className="hidden md:flex flex-1 justify-start ml-2 gap-8">
          <a href="#fleet" className="text-gray-600 hover:text-gray-400">
            Fleet
          </a>
          <a href="#history" className="text-gray-600 hover:text-gray-400">
            History
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-400">
            Contact
          </a>
        </div>

        {/* Logo Section */}
        <div className="flex-shrink-0 flex-1 md:flex justify-center">
          <a href="/" className="text-lg font-bold">
            <img
              src="/logo1new.png"
              className="w-32 md:w-40"
              alt="Logo"
            />
          </a>
        </div>

        {/* Right Section: Session-dependent content */}
        <div className="flex flex-1 items-center justify-end">
          {session ? (
            <div className="flex flex-row items-center gap-4">
              {/* Menu button for all devices */}
              <IoMdMenu
                className="text-3xl cursor-pointer"
                onClick={toggleMenu}
              />
              {/* Profile Image (visible on larger devices) */}
              <div className="hidden md:block w-8 h-8 rounded-full overflow-hidden border border-gray-300">
                <Image
                  src={session.user.image || "/default-avatar.png"}
                  alt="User Avatar"
                  width={30}
                  height={30}
                  className="object-cover"
                />
              </div>
            </div>
          ) : (
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
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-600 focus:outline-none" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-12 right-0 bg-white rounded-b-lg shadow-lg w-64">
            {session ? (
              <div className="p-4 flex flex-col gap-4">
                <Link
                  href="/dashboard/profile"
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
                >
                  <FaRegUser />
                  Profile
                </Link>
                <Link
                  href="/dashboard/messages"
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
                >
                  <LuMessageSquare />
                  Messages
                </Link>
                <Link
                  href="/dashboard/settings"
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
                >
                  <IoSettingsOutline />
                  Settings
                </Link>
                <Link
                  href="/dashboard/bookings"
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
                >
                  <FaBookmark />
                  Bookings
                </Link>
                <hr className="border-gray-300" />
                <button
                  onClick={() => console.log("Logout clicked")}
                  className="w-full text-left text-red-600 hover:text-red-800"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="p-4 flex flex-col gap-4">
                <a
                  href="#fleet"
                  className="text-gray-700 hover:text-gray-900 w-full text-left"
                >
                  Fleet
                </a>
                <a
                  href="#history"
                  className="text-gray-700 hover:text-gray-900 w-full text-left"
                >
                  History
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-gray-900 w-full text-left"
                >
                  Contact
                </a>
              </div>
            )}
          </div>
        )}
      </nav>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={toggleModal} />
    </>
  );
};

export default GlassNavbar;
