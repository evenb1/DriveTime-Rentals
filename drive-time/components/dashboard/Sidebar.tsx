import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineHome, AiOutlineCar, AiOutlineSetting, AiOutlineUser } from "react-icons/ai";
import { FaMoneyCheckAlt, FaClipboardList } from "react-icons/fa";

const SideBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { label: "Dashboard", icon: <AiOutlineHome />, path: "/dashboard" },
    { label: "Properties", icon: <AiOutlineCar />, path: "/dashboard/properties" },
    { label: "Bookings", icon: <FaClipboardList />, path: "/dashboard/bookings" },
    { label: "Payments", icon: <FaMoneyCheckAlt />, path: "/dashboard/payments" },
    { label: "Users", icon: <AiOutlineUser />, path: "/dashboard/users" },
    { label: "Settings", icon: <AiOutlineSetting />, path: "/dashboard/settings" },
  ];
  return (
    <div className={`h-screen ${isCollapsed ? "w-20" : "w-64"} bg-gray-900 text-white transition-width duration-300`}>
      {/* Sidebar Header */}
      <div className="flex items-center justify-between px-4 py-5 border-b border-gray-800">
        <div className={`${isCollapsed ? "hidden" : "block"} text-xl font-bold`}>Drivetime</div>
        <button
          className="text-xl"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? "→" : "←"}
        </button>
        </div>

      {/* Navigation Links */}
      <nav className="mt-5">
        {navItems.map((item, index) => (
          <div
            key={index}
            onClick={() => router.push(item.path)}
            className={`flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-800 ${
              pathname === item.path ? "bg-gray-700" : ""
            }`}
          ></div>
          <span className="text-lg">{item.icon}</span>
            {!isCollapsed && <span className="text-sm">{item.label}</span>}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default SideBar;