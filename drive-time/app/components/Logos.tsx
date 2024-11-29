"use client"
import React from 'react'
import Image from 'next/image'
import porsche from '@/public/porche.svg'
import lexus from '@/public/lexy.svg'
import mercedes from '@/public/mercedes.svg'
import caddy from '@/public/caddy.svg'
import rover from '@/public/rover.svg'
import { motion } from 'framer-motion'


const Logos = () => {
  return (
    <motion.div className='flex flex-row gap-14 items-center justify-center '
    initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.9 }}
  viewport={{ once: true, amount: 0.4 }}
    >
        <Image src={lexus} alt='lexus' className='w-28 '/>
        <span className="hidden md:inline-block w-px h-32 bg-gray-200 mr-3"></span>
        <Image src={porsche} alt='porsche' className='w-28'/>
        <span className="hidden md:inline-block w-px h-32 bg-gray-200 mr-3"></span>

        <Image src={mercedes} alt='mercedes' className='w-28'/>
        <span className="hidden md:inline-block w-px h-32 bg-gray-200 mr-3"></span>

        <Image src={rover} alt='rover' className='w-28'/>
        <span className="hidden md:inline-block w-px h-32 bg-gray-200 mr-3"></span>

        <Image src={caddy} alt='cadillac' className='w-28'/>


    </motion.div>
  )
}

export default Logos