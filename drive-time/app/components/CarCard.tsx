"use client";
import { useState } from "react";
import Image from "next/image";
import { carProps } from "@/types";
import CustomButton from "./CustomButton";
import CarDetails from "./CarDetails";

interface CarCardProps{
    car: carProps;
}
const CarCard = ({car}: CarCardProps) => {
     const {city_mpg, year, make, model, transmission, drive} = car;
     const [IsOpen, setIsOpen] = useState(false);

     const FleetSection = () => {
        // Import all images in the `public/fleet` folder
        const importImages = () => {
          const context = require.context(
            '../public/fleet',      // Path to the images folder
            false,                  // Don't search subdirectories
            /\.(png|jpe?g|svg)$/    // Match image files
          );
          return context.keys().reduce((images, path) => {
            const name = path.replace('./', ''); // Remove "./" prefix from path
            images[name] = context(path);        // Map filename to module path
            return images;
          }, {});
        };
      
        const images = importImages(); // Load all images in the folder
      
  return (
    <div className="car-card group">
        <div className="car-card__content">
            <h2 className="car-card__content-title">
                {make} {model}
            </h2>

        </div>
        <p className="flex mt-6 text-[32px] font-extrabold">
            <span className="self-start text-[14px] font-semibold">$</span>
            100
            <span className="self-end text-[14px] font-medium">/day</span>

        </p>
        <div className="relative w-full h-40 my-3 object-contain">
            <Image src="/car-logo.svg" alt="car model" fill priority className="object-contain"/>

        </div>
        <div className="relative flex w-full mt-2">
            <div className="flex group-hover:invisible w-full justify-between text-gray">
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src="/steering-wheel.svg" width={20} height={20} alt="steering"/> 
                    <p className="text-[14px]">
                        {transmission === 'a' ? 'Automatic' : 'Manual'}
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src="/tire.svg" width={20} height={20} alt="tire"/> 
                    <p className="text-[14px]">
                        {drive.toUpperCase()}
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src="/gas.svg" width={20} height={20} alt="gas"/> 
                    <p className="text-[14px]">
                        {city_mpg}
                    </p>
                </div>

            </div>
            <div className="car-card__btn-container">
                <CustomButton title="View More" containerStyles="w-full py-[16px] rounded-full bg-primary-blue" textStyles="text-white text-[14px] leading-[17px] font-bold"
                rightIcon="/right-arrow.svg"
                handleClick={() => setIsOpen(true)}
                />

            </div>

        </div>
        <CarDetails isOpen={IsOpen} closeModal={() => setIsOpen(false)} car={car}/>
    </div>
  )
}

export default CarCard