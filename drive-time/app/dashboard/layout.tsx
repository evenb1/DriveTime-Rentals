"use client"; 

import Sidebar from "./components/Sidebar"; 
import TopNav from "./components/TopNav"; 

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen ml-0 md:ml-[250px]">
      <Sidebar />
      <div className="flex-1">
        <TopNav />
        <main className="p-8  max-h-screen max-sm:pt-10">{children}</main>
      </div>
    </div>
  );
}
