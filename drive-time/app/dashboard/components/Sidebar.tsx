// Sidebar.tsx

"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
const Sidebar = () => {
  const pathname = usePathname();

  // Icon and label items for sidebar links
  const sidebarItems = [
    { href: '/dashboard', label: 'Dashboard', icon: 'home' },
    { href: '/dashboard/messages', label: 'Messages', icon: 'envelope' },
    { href: '/dashboard/bookings', label: 'Bookings', icon: 'bookmark' },
    { href: '/dashboard/profile', label: 'Profile', icon: 'user' },
    { href: '/dashboard/payments', label: 'Payments', icon: 'credit-card' },
    { href: '/dashboard/settings', label: 'Settings', icon: 'settings' },
  ];

  // Animate item appearance
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <nav className="bg-gray-900 font-inter text-white h-screen w-[250px] p-8 shadow-lg flex flex-col justify-between ">
      <div>
        {/* Sidebar title */}
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

        {/* Sidebar links */}
        <ul className="space-y-4 justify-start">
          {sidebarItems.map((item, index) => (
            <motion.li
              key={item.href}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
            >
              <Link href={item.href} className={`flex items-center gap-3 px-4 py-3 rounded-lg text-lg font-semibold transition ${pathname === item.href ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
                {/* Icons */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  {item.icon === 'home' && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
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
                  {item.icon === 'bookmark' && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
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
                      d="M10.5 6.75V4.5a1.5 1.5 0 0 1 3 0v2.25a7.5 7.5 0 0 1 3.576 1.491l1.591-1.591a1.5 1.5 0 0 1 2.122 2.122l-1.591 1.591A7.5 7.5 0 0 1 19.5 15h2.25a1.5 1.5 0 0 1 0 3H19.5a7.5 7.5 0 0 1-1.491 3.576l1.591 1.591a1.5 1.5 0 0 1-2.122 2.122l-1.591-1.591A7.5 7.5 0 0 1 13.5 21v2.25a1.5 1.5 0 0 1-3 0V21a7.5 7.5 0 0 1-3.576-1.491l-1.591 1.591a1.5 1.5 0 0 1-2.122-2.122l1.591-1.591A7.5 7.5 0 0 1 4.5 15H2.25a1.5 1.5 0 0 1 0-3H4.5a7.5 7.5 0 0 1 1.491-3.576L4.4 6.933a1.5 1.5 0 1 1 2.122-2.122l1.591 1.591A7.5 7.5 0 0 1 10.5 6.75z"
                    />
                  )}
                </svg>
                {/* Label */}
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
        <Link href="/logout" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold">
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
        </Link>
      </motion.div>
    </nav>
  );
};

export default Sidebar;
