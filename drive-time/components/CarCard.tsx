"use client";
import { useState } from "react";
import Image from "next/image";
import { carProps } from "@/types";
import CustomButton from "./CustomButton";

interface CarCardProps{
    car: carProps;
}
const CarCard = ({car}: CarCardProps) => {
     const {city_mpg, year, make, model, transmission, drive} = car;
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
            <Image src="/" alt="car model" fill priority className="object-contain"/>

        </div>
    </div>
  )
}

export default CarCard