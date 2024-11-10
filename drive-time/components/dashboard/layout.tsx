import React from "react";
import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";
import "../styles/dashboard.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-content">
        <TopNav />
        <main className="dashboard-main">{children}</main>
      </div>
    </div>
  );
}