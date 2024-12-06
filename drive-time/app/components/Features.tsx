"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCar, FaClock, FaStar, FaShieldAlt } from "react-icons/fa";

const HomeFeatures = () => {
  const [isVisible, setIsVisible] = useState(false);

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

  
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setIsVisible(true); 
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, 
    });

    const target = document.getElementById("motions-part");
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target); 
    };
  }, []);
  return (
    <section className="bg-white py-28 ">
      <div className="max-w-7xl mx-auto items-center justify-center px-6">
        <motion.h2
          className="text-6xl max-sm:text-2xl font-md font-montserrat leading-5 text-center text-gray-800 max-sm:mb-2 mb-28"
          id="motions-part"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 }:{}}
          transition={{ duration: 1.0 }}
        >
          Why Choose Us?
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 max-sm:grid-cols-1 lg:grid-cols-4 gap-5 max-sm:gap-0 "
          id="motion-section"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 2 }:{}}
          transition={{ delay: 0.6, duration: 1 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white  rounded-lg p-6 flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="mb-4">{feature.icon}</div>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HomeFeatures;
