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
    <div className="overflow-hidden py-8 ">
      {/* Motion wrapper for scrolling effect */}
      <motion.div
        className="flex gap-14 items-center justify-start"
        animate={{
          x: ["0%", "-100%"], // Scroll from full position to completely off the screen
        }}
        transition={{
          duration: 20, // Adjust duration for scrolling speed
          ease: "linear",
          repeat: Infinity, // Loop the animation infinitely
        }}
      >
        {/* Duplicate the logos to create a seamless loop */}
        {[...Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            <Image src={lexus} alt="lexus" className="w-28" />
            <span className="hidden md:inline-block w-px h-32 bg-gray-200" />
            <Image src={porsche} alt="porsche" className="w-28" />
            <span className="hidden md:inline-block w-px h-32 bg-gray-200" />
            <Image src={mercedes} alt="mercedes" className="w-28" />
            <span className="hidden md:inline-block w-px h-32 bg-gray-200" />
            <Image src={rover} alt="rover" className="w-28" />
            <span className="hidden md:inline-block w-px h-32 bg-gray-200" />
            <Image src={caddy} alt="cadillac" className="w-28 mr-7" />
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default Logos;
