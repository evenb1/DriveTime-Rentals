import React from 'react'
import { CustomButton } from '.'

const hero = () => {
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
            Your Journey Begins Here
            </h1>
            <p className='hero__subtitle'>
            Discover a wide selection of vehicles to suit every journey.
            </p>
            <CustomButton/>
        </div>
    </div>
  )
}

export default hero