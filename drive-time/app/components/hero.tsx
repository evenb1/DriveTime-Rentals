"use client";

import React from "react";
import { motion } from "framer-motion";
import GlassNavbar from "./GlassNavbar";
import HeroSearch from "./HeroSearch";

const Hero = () => {
    const titleVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <>
            <div className="relative w-full h-screen bg-hero-bg bg-cover bg-center">
                <div className="absolute inset-0 bg-black bg-opacity-20 z-5"></div>

                <div className="relative z-20 flex flex-col h-full">
                    {/* Navbar */}
                    <GlassNavbar />

                    {/* Hero Content */}
                    <div className="flex-1 flex flex-col justify-center lg:pb-36 md:pb-36 items-center text-center px-5 
                        mt-6 sm:mt-0 max-sm:gap-28">
                        <motion.h1
                            className="hero__title font-montserrat  text-white max-sm:pb-32 text-extrabold leading-none text-opacity-90"
                            variants={titleVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            Premium Car Rental
                        </motion.h1>

                        {/* Get Started Button */}
                        <button
                            className="relative mt-5 flex h-[50px] w-40 items-center justify-center overflow-hidden 
                            bg-blue-500 rounded-full text-white shadow-2xl transition-all 
                            before:absolute before:h-0 before:w-0 before:rounded-full before:bg-charcoal 
                            before:duration-500 before:ease-out hover:shadow-charcoal-600 
                            hover:before:h-56 hover:before:w-56 max-sm:mb-16  z-10 leading-10 font-montserrat"
                        >
                        Get Started
                        </button>
                    </div>

                    {/* HeroSearch for Large Screens */}
                    <div className="pb-4 hidden sm:block">
                        <HeroSearch />
                    </div>
                </div>
            </div>

            {/* HeroSearch for Small Screens */}
            <div className="block sm:hidden mt-6 px-4">
                <HeroSearch />
            </div>
        </>
    );
};

export default Hero;
