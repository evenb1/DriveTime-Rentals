"use client";

import React from 'react';
import { CustomButton } from '.';
import GlassNavbar from './GlassNavbar'; 

const Hero = () => {
    const handleScroll = () => {
    }

    return (
        <div className="relative w-full  h-screen bg-hero-bg bg-cover bg-center">
            {/* Transparent Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 z-5"></div>

            {/* Hero Content with Navbar */}
            <div className='relative z-20 flex flex-col h-full'>
                <div className="">
                    <GlassNavbar />
                </div>
                <div className='flex-1 flex  flex-col justify-center mt-[-300px] px-5 items-center text-center'>
                    <h1 className='hero__title font-montserrat text-white text-extrabold leading-none text-opacity-80'>
                        Premium Car Rental
                    </h1>
                    <button className="relative mt-5 flex h-[50px] w-40 items-center justify-center overflow-hidden bg-charcoal rounded-full text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-customBlue before:duration-500 before:ease-out hover:shadow-customBlue-600 hover:before:h-56 hover:before:w-56">
      <span className="relative z-10 leading-10 font-montserrat ">Book Now</span>
    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero;
