import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineHome, AiOutlineCar, AiOutlineSetting, AiOutlineUser } from "react-icons/ai";
import { FaMoneyCheckAlt, FaClipboardList } from "react-icons/fa";

const SideBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
