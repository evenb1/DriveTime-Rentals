// Sidebar.tsx
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

  const links = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/dashboard/properties', label: 'Properties' },
    { href: '/dashboard/profile', label: 'Profile' },
  ];

  return (
    <nav className="bg-gray-900 text-white h-screen w-64 p-6">
      <h2 className="text-xl font-bold mb-6">Drivetime Rental</h2>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link 
              href={link.href}
              className={`block p-2 rounded ${pathname === link.href ? 'bg-gray-700' : ''}`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;