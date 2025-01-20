"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { signOut } from "next-auth/react";

const Sidebar = () => {
  const pathname = usePathname();

  const sidebarItems = [
    { href: '/dashboard/bookings', label: 'Bookings', icon: 'bookmark' }, 
    { href: '/dashboard/messages', label: 'Messages', icon: 'envelope' },
    { href: '/dashboard/profile', label: 'Profile', icon: 'user' },
    { href: '/dashboard/payments', label: 'Payments', icon: 'credit-card' },
    { href: '/dashboard/settings', label: 'Settings', icon: 'settings' },
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <nav className="bg-gray-900 font-inter text-white h-screen w-[250px] p-8 shadow-lg flex flex-col justify-between">
      <div>
        <motion.h2
          className="text-2xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Link href={'/'}>
            <img src="/logo1new.png" className="w-32 md:w-40" alt="Logo" />
          </Link>
        </motion.h2>
        <hr className="my-4 border-t border-gray-600" />

        <ul className="space-y-4">
          {sidebarItems.map((item, index) => (
            <motion.li
              key={item.href}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-lg font-semibold transition ${
                  pathname === item.href ? 'bg-gray-700' : 'hover:bg-gray-700'
                }`}
              >
                {/* Icons */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  {item.icon === 'bookmark' && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                    />
                  )}
                  {item.icon === 'envelope' && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  )}
                  {item.icon === 'user' && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  )}
                  {item.icon === 'credit-card' && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3.75 7.5h16.5M3.75 7.5a2.25 2.25 0 0 0-2.25 2.25v7.5a2.25 2.25 0 0 0 2.25 2.25h16.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25M3.75 12h5.25m7.5 0h2.25"
                    />
                  )}
                  {item.icon === 'settings' && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z"
                    />
                  )}
                </svg>
                <span>{item.label}</span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Logout Section */}
      <motion.div
        className="mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <button onClick={() => signOut()} className='flex items-center gap-3 px-10 py-3 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold'>
       
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15.75 9V5.25a2.25 2.25 0 0 0-2.25-2.25h-6A2.25 2.25 0 0 0 5.25 5.25v13.5a2.25 2.25 0 0 0 2.25 2.25h6a2.25 2.25 0 0 0 2.25-2.25V15M9.75 12h10.5m0 0-3-3m3 3-3 3"
            />
          </svg>
          
          <span>Logout</span>
          
          
      
        </button>
      </motion.div>
    </nav>
  );
};

export default Sidebar;
