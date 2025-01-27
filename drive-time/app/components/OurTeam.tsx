"use client";
import Image from "next/image";
import driver from "@/public/driver1.jpg";
import driver2 from "@/public/driver2.jpg";
import driver3 from "@/public/driver3.png";

import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";

const OurTeam = () => {
  return (
    <motion.div
      className="flex flex-col px-6 md:px-16 lg:px-36 gap-8 py-14"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Content Section */}
      <div className="flex flex-col text-center md:text-left">
        <h1 className="text-slate-900 font-light font-montserrat text-3xl md:text-5xl">
          Our Professional Chauffeurs
        </h1>
        <h3 className="text-blue-400 mt-2 text-lg font-inter font-light">
          Meet Our Team
        </h3>
        <hr className="my-4 border-t border-gray-300 mx-auto md:mx-0 w-1/2 md:w-full" />
      </div>

      {/* Images Section */}
      <div className="flex flex-wrap justify-center md:justify-between gap-8">
        {[driver, driver2, driver3].map((image, index) => (
          <div key={index} className="flex flex-col items-center md:items-start">
            {/* Image */}
            <div className="relative w-64 h-96 overflow-hidden rounded-lg shadow-md">
              <Image
                src={image}
                alt={`Driver ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Name */}
            <p className="mt-2 text-gray-800 font-extralight text-xl md:text-2xl">
              {["Tony Rosato", "Vito Lorenzo", "Michael Corleone"][index]}
            </p>
            {/* Number with Icon */}
            <div className="flex items-center gap-2 mt-1">
              <FaPhoneAlt className="text-slate-500" />
              <p className="text-blue-500 font-light text-sm md:text-base">
                +254 123 4567 23{index}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurTeam;
