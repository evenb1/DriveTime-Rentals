"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import porsche from "@/public/porche.svg";
import lexus from "@/public/lexy.svg";
import mercedes from "@/public/mercedes.svg";
import caddy from "@/public/caddy.svg";
import rover from "@/public/rover.svg";

const Logos = () => {
  return (
    <div className="overflow-hidden py-6">
      <motion.div
        className="flex gap-10 items-center whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: 35, // Slower scrolling speed
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* Duplicate the logos to ensure infinite scrolling */}
        {[...Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            <Image src={lexus} alt="Lexus" className="w-20 sm:w-28" />
            <span className="hidden md:inline-block w-px h-24 bg-gray-300" />
            <Image src={porsche} alt="Porsche" className="w-20 sm:w-28" />
            <span className="hidden md:inline-block w-px h-24 bg-gray-300" />
            <Image src={mercedes} alt="Mercedes" className="w-20 sm:w-28" />
            <span className="hidden md:inline-block w-px h-24 bg-gray-300" />
            <Image src={rover} alt="Range Rover" className="w-20 sm:w-28" />
            <span className="hidden md:inline-block w-px h-24 bg-gray-300" />
            <Image src={caddy} alt="Cadillac" className="w-20 sm:w-28 mr-7" />
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default Logos;
