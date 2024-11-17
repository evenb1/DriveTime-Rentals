"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCar, FaClock, FaStar, FaShieldAlt } from "react-icons/fa";


const Features = () => {
    const features = [
      {
        icon: <FaCar className="text-blue-500 text-4xl" />,
        title: "Wide Range of Cars",
        description: "Choose from a variety of premium vehicles tailored to your needs.",
      },
      {
        icon: <FaClock className="text-green-500 text-4xl" />,
        title: "24/7 Availability",
        description: "Book or access our services anytime, anywhere.",
      },
      {
        icon: <FaStar className="text-yellow-500 text-4xl" />,
        title: "Top-Rated Service",
        description: "Experience exceptional customer service and highly rated vehicles.",
      },
      {
        icon: <FaShieldAlt className="text-red-500 text-4xl" />,
        title: "Safe & Secure",
        description: "Drive with peace of mind knowing your safety is our priority.",
      },
    ];
    return (
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-6">
            {/* Title */}
            <motion.h2
              className="text-3xl font-extrabold text-center text-gray-800 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Why Choose Us?
            </motion.h2>