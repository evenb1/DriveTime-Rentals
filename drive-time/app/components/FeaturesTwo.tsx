"use client";
import Image from "next/image";
import driver from "@/public/driver.jpg";
import { motion } from "framer-motion";

const FeaturesTwo = () => {
  return (
    <section className="p-6 flex flex-col-reverse lg:flex-row items-center my-8 bg-slate-100 gap-8">
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        className="flex flex-col items-center lg:items-start p-6 lg:p-16"
      >
        <h1 className="text-slate-900 mb-4 font-light font-montserrat text-3xl lg:text-5xl text-center lg:text-left">
          We Care About Your <br />
          Comfort And Safety
        </h1>
        <h3 className="text-blue-400 mb-4 font-inter font-light text-lg text-center lg:text-left">
          Experienced Drivers
        </h3>
        <p className="text-slate-900 text-lg lg:text-xl font-extralight text-center lg:text-left max-w-lg">
          We prioritize your peace of mind with experienced drivers and
          top-tier vehicles, delivering a smooth, secure, and enjoyable travel
          experience.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="relative w-full lg:w-1/2"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <Image
          src={driver}
          className="object-contain rounded-lg"
          alt="chauffeur"
          priority
        />
      </motion.div>
    </section>
  );
};

export default FeaturesTwo;
