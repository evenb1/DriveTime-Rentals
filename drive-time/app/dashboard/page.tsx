import React from 'react';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';

const DashboardPage = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1">
        <TopNav />
        <main className="p-6">
          <h1 className="text-2xl font-bold">Dashboard Overview</h1>
          <p>Welcome to your Drivetime Rental Dashboard!</p>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;