"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import counter from "@/public/counter.jpg";
import counter2 from "@/public/counter2.jpg";
import CountUp from "react-countup";
import { useState, useEffect } from "react";

const Counter = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { num: 15, text: "Years of experience" },
    { num: 50, text: "Satisfied clients" },
  ];

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setIsVisible(true); // Start animation when the section is in view
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger when 50% of the section is visible
    });

    const target = document.getElementById("counter-section");
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target); // Cleanup observer
    };
  }, []);

  return (
    <motion.div
      className="p-0 flex flex-row bg-charcoal justify-start gap-5 py-36"
      id="counter-section" // Unique ID for the section
      initial={{ opacity: 0, x: -80 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0 }}
      transition={{ duration: 1.0 }}
    >
      {/* Images Section */}
      <div className="relative flex gap-2 w-1/2">
        <div className="relative w-full h-64">
          <Image src={counter} fill className="object-contain" alt="lady" />
        </div>
        <div className="relative w-full h-64">
          <Image src={counter2} fill className="object-contain" alt="car" />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col  gap-20 w-1/2">
        <div className="justify-start gap-8">
          <h1 className="text-slate-50 justify-start font-bold font-montserrat text-3xl">
            Premium Cars Rental
          </h1>
          <h3 className="text-blue-400 font-inter font-light">
            Only the best
          </h3>
          <p className="text-slate-300 justify-start text-sm">
            Praesent elementum facilisis leo vel fringilla est. Vestibulum lectus
            augue, ultrices eros in cursus turpis eu, ultrices eget urna.
          </p>
        </div>

        {/* Stats Section */}
        <motion.div
          className="flex flex-row gap-4"
          initial={{ opacity: 0, x: 80 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0 }}
          transition={{ duration: 1.0 }}
        >
          {stats.map((item, index) => (
            <div key={index} className="text-center">
              <CountUp
                end={item.num}
                suffix="+"
                duration={4}
                delay={2}
                className="text-2xl xl:text-5xl text-slate-200 font-extrabold"
              />
              <p className="mt-2 text-slate-200 text-lg">{item.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Counter;
