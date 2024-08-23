"use client";

import React from 'react';
import { CustomButton } from '.';
import GlassNavbar from './GlassNavbar'; // Ensure to import your Navbar component

const Hero = () => {
    const handleScroll = () => {
        // Your scroll logic here
    }

    return (
        <div className="relative w-full h-screen bg-hero-bg bg-cover bg-center">
            {/* Transparent Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 z-5"></div>

            {/* Hero Content with Navbar */}
            <div className='relative z-20 flex flex-col h-full'>
                <div className="pt-3">
                    <GlassNavbar />
                </div>
                <div className='flex-1 flex flex-col justify-center items-center text-center'>
                    <h1 className='hero__title text-white text-opacity-80'>
                        Premium Car Rentals
                    </h1>
                    <CustomButton
                        title="Book Now"
                        containerStyles="bg-customBlue text-white rounded-full mt-10"
                        handleClick={handleScroll}
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero;
