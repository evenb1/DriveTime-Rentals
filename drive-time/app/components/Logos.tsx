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
    <div className="relative w-full bg-white py-4 pt-10">
      {/* Motion wrapper to contain the scrolling logos */}
      <div className="relative w-full h-24 sm:h-28 flex items-center justify-center">
        <motion.div
          className="flex gap-12 items-center justify-start w-max"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 40, // Slower animation speed
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* Duplicated logos for seamless looping */}
          {[...Array(2)].map((_, index) => (
            <React.Fragment key={index}>
              <Image src={lexus} alt="Lexus" className="w-24 sm:w-32" />
              <span className="hidden md:inline-block w-px h-16 bg-gray-300" />
              <Image src={porsche} alt="Porsche" className="w-24 sm:w-32" />
              <span className="hidden md:inline-block w-px h-16 bg-gray-300" />
              <Image src={mercedes} alt="Mercedes" className="w-24 sm:w-32" />
              <span className="hidden md:inline-block w-px h-16 bg-gray-300" />
              <Image src={rover} alt="Range Rover" className="w-24 sm:w-32" />
              <span className="hidden md:inline-block w-px h-16 bg-gray-300" />
              <Image src={caddy} alt="Cadillac" className="w-24 sm:w-32 mr-7" />
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Logos;
