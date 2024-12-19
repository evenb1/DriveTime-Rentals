"use client"
import Image from "next/image";
import driver from "@/public/driver1.jpg";
import driver2 from '@/public/driver2.jpg'
import driver3 from '@/public/driver3.png'

import { motion } from "framer-motion";
import { h1 } from "framer-motion/client";
import { FaPhoneAlt } from "react-icons/fa";

const OurTeam = () => {
  return (
    <motion.div
      className="p-0 flex flex-col px-36 gap-5 py-32"

    >
      {/* Content Section */}
      <div className="flex flex-col ">
      <div className="justify-start gap-8 px-10">
  <h1 className="text-slate-900 font-light font-montserrat text-5xl">
    Our Professional Chauffeurs
  </h1>
  <h3 className="text-blue-400 mt-2 ml-2 text-lg font-inter font-light">
    Meet Our Team
  </h3>
  <hr className="my-4 border-t border-gray-300 px-14 py-5" />

</div>


      
      </div>
       {/* Images Section */}
       <div className="flex justify-end items-end gap-8 w-full px-4">
  {/* Image and Text Container */}
  {[driver, driver2, driver3].map((image, index) => (
    <div key={index} className="flex flex-col items-start">
      {/* Image */}
      <div className="relative w-64 h-96 overflow-hidden ">
        <Image
          src={image}
          alt={`Driver ${index + 1}`}
          layout="fill"
          objectFit="cover"
          className=""
        />
      </div>
      <p className="mt-2 text-gray-800 font-extralight text-2xl">
          {["Tony Rosato", "Vito Lorenzo", "Michael Corleone"][index]}
        </p>
    
      </div>
    </div>
  ))}
</div>

    </motion.div>
  );
};

export default OurTeam;
