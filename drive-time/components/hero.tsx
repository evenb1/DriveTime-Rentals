"use client";

import React from 'react'
import { CustomButton } from '.'

const hero = () => {
    const handleScroll = () =>{

    }
  return (
    
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
            Your Journey Begins Here
            </h1>
            <p className='hero__subtitle'>
            Discover a wide selection of vehicles to suit every journey.
            </p>
            <CustomButton title="explore cars" containerStyles="bg-customRed text-white rounded-full mt-10"
            handleClick={handleScroll}
            />
        </div>
    </div>
  )
}

export default hero