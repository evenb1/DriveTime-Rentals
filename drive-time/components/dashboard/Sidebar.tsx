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