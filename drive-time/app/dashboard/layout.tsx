"use client";
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar as a Client Component */}
      <Sidebar />
      <TopNav />
      <main className="flex-1 p-8 bg-gray-100">{children}</main>
    </div>
  );
}
