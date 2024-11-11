"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CustomButton } from '.';
import GlassNavbar from './GlassNavbar';
import HeroSearch from './HeroSearch';

const Hero = () => {
    const titleVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.5, ease: 'easeOut' } },
    };

    return (
        <div className="relative w-full h-screen bg-hero-bg bg-cover bg-center">
            {/* Transparent Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-20 z-5"></div>

            {/* Hero Content with Navbar */}
            <div className='relative z-20 flex flex-col h-full'>
                <div className="">
                    <GlassNavbar />
                </div>
                <div className='flex-1 flex flex-col justify-center mt-[-300px] px-5 items-center text-center'>
                    <motion.h1
                        className='hero__title font-montserrat text-white text-extrabold leading-none text-opacity-90'
                        variants={titleVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        Premium Car Rental
                    </motion.h1>
                    <button
                        className="relative mt-5 flex h-[50px] w-40 items-center justify-center overflow-hidden bg-blue-500 rounded-full text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-charcoal before:duration-500 before:ease-out hover:shadow-charcoal-600 hover:before:h-56 hover:before:w-56"
                        
                    >
                        <span className="relative z-10 leading-10 font-montserrat">Book Now</span>
                    </button>
                </div>
                <div className='py-6'><HeroSearch/></div>
                
            </div>
        </div>
    );
};

export default Hero;
