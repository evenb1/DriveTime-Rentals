"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import { FaBars, FaTimes, FaSignOutAlt, FaUser, FaRegBookmark } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";

const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen size dynamically
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Set mobile mode for <768px width
    };

    handleResize(); // Set on initial load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sidebarItems = [
    { href: "/dashboard/bookings", label: "Bookings", icon: "bookmark" },
    { href: "/dashboard/messages", label: "Messages", icon: "envelope" },
    { href: "/dashboard/profile", label: "Profile", icon: "user" },
    { href: "/dashboard/payments", label: "Payments", icon: "credit-card" },
    { href: "/dashboard/settings", label: "Settings", icon: "settings" },
  ];

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/"; // Redirect to home
  };

  return (
    <>
      {/* Mobile Hamburger Button - Only shown on small screens */}
      {isMobile && (
        <button
          className="fixed top-4 left-4 z-50 bg-gray-900 text-white p-3 rounded-md md:hidden"
          onClick={() => setIsOpen(true)}
        >
          <FaBars size={20} />
        </button>
      )}

      {/* Sidebar - Fixed on Desktop, Drawer on Mobile */}
      <AnimatePresence>
        {(isOpen || !isMobile) && (
          <motion.nav
            className={`bg-gray-900 font-inter text-white fixed inset-y-0 left-0 w-[250px] p-6 shadow-lg flex flex-col justify-between ${
              isMobile ? "z-50 translate-x-0" : "md:block hidden"
            }`}
            initial={{ x: isMobile ? -250 : 0 }}
            animate={{ x: 0 }}
            exit={{ x: isMobile ? -250 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Sidebar Header */}
            <div className="flex items-center justify-between mb-4">
              <Link href={"/"}>
                <Image src="/logo1new.png" width={120} height={40} alt="Logo" />
              </Link>

              {/* Close Button - Only on Mobile */}
              {isMobile && (
                <button
                  className="text-gray-300 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  <FaTimes size={22} />
                </button>
              )}
            </div>

            {/* Separator Line */}
            <hr className="border-t border-gray-600 mb-4" />

            {/* Navigation Links */}
            <ul className="space-y-3">
              {sidebarItems.map((item) => (
                <motion.li
                  key={item.href}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => isMobile && setIsOpen(false)} // Close sidebar on link click (only on mobile)
                >
                  <Link
                    href={item.href}
                    className={`flex justify-start items-center gap-3 px-4 py-3 rounded-lg text-lg font-semibold transition ${
                      pathname === item.href ? "bg-gray-700" : "hover:bg-gray-700"
                    }`}
                  >
                    <span className="w-6 h-6">{getIcon(item.icon)}</span>
                    <span>{item.label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Logout Button */}
            <motion.button
              onClick={handleLogout}
              className="flex items-center justify-start gap-3 px-4 py-3 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold w-full mt-6"
              whileHover={{ scale: 1.05 }}
            >
              <FaSignOutAlt size={20} />
              <span>Logout</span>
            </motion.button>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};



export default Sidebar;
