"use client";

import React from 'react';
import { CustomButton } from '.';
import GlassNavbar from './GlassNavbar'; // Ensure to import your Navbar component

const Hero = () => {
    const handleScroll = () => {
        // Your scroll logic here
    }

    return (
        <div className="relative w-full h-screen bg-hero-bg bg-cover mt-[-20px] p-0 bg-center">
            <GlassNavbar />
            <div className='hero flex justify-center items-center flex-col text-center h-full w-full'>
                <div className='flex-1 flex flex-col justify-center items-center padding-x'>
                    <h1 className='hero__title'>
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
