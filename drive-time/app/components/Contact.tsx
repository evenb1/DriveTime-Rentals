"use client";
import { motion } from "framer-motion";
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-start px-6 md:px-16 py-24 md:py-44 gap-6 bg-gray-800">
      {/* Header Section */}
      <h1 className="font-extralight text-4xl md:text-5xl text-start text-slate-100">
        Get The Best Deals
      </h1>

      {/* Phone Section */}
      <motion.div
        className="flex flex-row items-center gap-4"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8 text-slate-100"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
          />
        </svg>
        <p className="text-slate-100 font-extralight text-lg md:text-xl">
          +254 123 4567 234
        </p>
      </motion.div>

      {/* Email Section */}
      <motion.div
        className="flex flex-row items-center gap-4"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8 text-slate-100"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
        <p className="text-slate-100 font-extralight text-lg md:text-xl">
          customersupport@drivetime.com
        </p>
      </motion.div>
    </div>
  );
};

export default Contact;
