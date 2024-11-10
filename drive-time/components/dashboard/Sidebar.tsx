import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  AiOutlineHome,
  AiOutlineFile,
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineLogout,
  AiOutlineMenu,
} from "react-icons/ai";
import { FiDatabase, FiImage } from "react-icons/fi";

const Sidebar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: AiOutlineHome, path: "/dashboard" },
    { name: "Properties", icon: FiDatabase, path: "/dashboard/properties-list" },
    { name: "Add Property", icon: AiOutlineFile, path: "/dashboard/add-property" },
    { name: "Edit Property", icon: FiImage, path: "/dashboard/edit-property" },
    { name: "Users", icon: AiOutlineUser, path: "/dashboard/users" },
    { name: "Settings", icon: AiOutlineSetting, path: "/dashboard/settings" },
  ];

  const handleLogout = () => {
    // Implement your logout logic here
    router.push("/login");
  };

  return (
    
    </div>
  );
};

export default Sidebar;