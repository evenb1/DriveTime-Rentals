import React from "react";
import TopNav from "./components/TopNav";
import SideBar from "./components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <SideBar/>
      <div className="flex-1 flex flex-col">
        <TopNav />
        <main className="p-6 bg-gray-100 flex-1">{children}</main>
      </div>
    </div>
  );
}