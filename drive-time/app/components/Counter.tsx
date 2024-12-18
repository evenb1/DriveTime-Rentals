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
    { numTwo: 5, text: "Satisfied clients" },
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
      className="p-0 flex flex-row  justify-start gap-5 py-36"
      id="counter-section" // Unique ID for the section
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0 }}
      transition={{ duration: 1.0 }}
    >
      {/* Images Section */}
      <div className=" flex gap-4 w-1/2 px-4">
        <div className="relative w-full">
          <Image src={counter} className="object-contain" alt="lady" />
        </div>
        <div className="relative w-full ">
          <Image src={counter2} className="object-contain" alt="car" />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col  gap-20 w-1/2">
        <div className="justify-start gap-8 pr-16">
          <h1 className="text-slate-900 justify-start font-light font-montserrat text-5xl">
            Premium Cars Rental
          </h1>
          <h3 className="text-blue-400 mt-1 font-inter font-light">
            Only the best
          </h3>
          <p className="text-slate-900 w-2/3 mt-2 justify-start text-xl font-extralight">
          Discover unmatched quality with our premium cars. We provide comfort, luxury, and reliability, ensuring every journey is a memorable one.
          </p>
        </div>

        {/* Stats Section */}
        <motion.div
          className="flex flex-row gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0 }}
          transition={{ duration: 1.0 }}
        >
        
            <div className="text-center flex flex-row gap-5">
              <div className="flex flex-col">
              <CountUp
                end={15}
                suffix="+"
                duration={1}
                delay={2}
                className="text-3xl flex xl:text-8xl gap-5 text-slate-900 font-extralight"
              />
              <p className="mt-2 text-slate-900 text-start text-lg">Years of experience</p>

              </div>
             <div className="flex flex-col">
             <CountUp
                end={5}
                suffix="k+"
                duration={2}
                delay={2}
                className="text-3xl xl:text-8xl gap-5 text-slate-900 font-extralight"
              />
              <p className="mt-2 text-slate-900 text-start text-lg">Satisfied clients</p>
             </div>
              
            </div>
            
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Counter;
