"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import counter from "@/public/counter.jpg";
import counter2 from "@/public/counter2.jpg";
import CountUp from "react-countup";
import { useState, useEffect } from "react";

const Counter = () => {
  const [isVisible, setIsVisible] = useState(false);

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
      className="p-6 flex flex-col md:flex-row justify-start items-center gap-8 py-20"
      id="counter-section"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0 }}
      transition={{ duration: 1.0 }}
    >
      {/* Images Section */}
      <div className="flex gap-4 w-full md:w-1/2">
        <div className="relative w-1/2">
          <Image src={counter} className="object-contain rounded-lg" alt="lady" />
        </div>
        <div className="relative w-1/2">
          <Image src={counter2} className="object-contain rounded-lg" alt="car" />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-10 w-full md:w-1/2 text-center md:text-left">
        <div>
          <h1 className="text-slate-900 font-light font-montserrat text-4xl md:text-5xl">
            Premium Cars Rental
          </h1>
          <h3 className="text-blue-400 mt-2 font-inter font-light text-xl">
            Only the best
          </h3>
          <p className="text-slate-900 mt-4 text-lg md:text-xl font-extralight">
            Discover unmatched quality with our premium cars. We provide
            comfort, luxury, and reliability, ensuring every journey is a
            memorable one.
          </p>
        </div>

        {/* Stats Section */}
        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0 }}
          transition={{ duration: 1.0 }}
        >
          <div className="flex flex-col items-center">
            <CountUp
              end={15}
              suffix="+"
              duration={2}
              delay={3}
              className="text-5xl  md:text-6xl xl:text-8xl text-slate-900 font-extralight"
            />
            <p className="mt-2 text-slate-900 text-lg">Years of experience</p>
          </div>
          <div className="flex flex-col items-center">
            <CountUp
              end={5}
              suffix="k+"
              duration={2}
              delay={3}
              className="text-5xl md:text-6xl xl:text-8xl text-slate-900 font-extralight"
            />
            <p className="mt-2 text-slate-900 text-lg">Satisfied clients</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Counter;
