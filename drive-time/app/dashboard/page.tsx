"use client";

import React from 'react';
import { motion } from 'framer-motion';

const HomeDashboard = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Welcome Banner */}
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-6 shadow-lg text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold">Welcome back, John!</h1>
          <p className="text-lg mt-2">Here’s a quick overview of your account and upcoming bookings.</p>
          <div className="mt-4 flex gap-4">
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition">Book Now</button>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition">Messages</button>
          </div>
        </motion.div>
