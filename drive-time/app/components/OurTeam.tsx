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

    </motion.div>
  );
};

export default OurTeam;
