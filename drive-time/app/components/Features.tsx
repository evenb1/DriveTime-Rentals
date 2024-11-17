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