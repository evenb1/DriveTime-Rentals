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
            {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            ></motion.div>
            {/* Icon */}
            <div className="mb-4">{feature.icon}</div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
          </motion.div>
      </div>
    </section>
  );
};

export default Features;