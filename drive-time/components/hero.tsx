"use client";

import React from 'react';
import { CustomButton } from '.';

const Hero = () => {
    const handleScroll = () => {
        // Your scroll logic here
    }

    return (
        <div className='hero flex justify-center items-center flex-col text-center bg-hero-bg bg-cover h-full w-full bg-center'>
            <div className='flex-1 pt-36 flex flex-col justify-center items-center padding-x'>
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
    )
}

export default Hero;
