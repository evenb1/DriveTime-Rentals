"use client";
import { useState } from "react";
import Image from "next/image";
import { carProps } from "@/types";
import CustomButton from "./CustomButton";
import CarDetails from "./CarDetails";

interface CarCardProps {
  car: carProps;
}

// Map of car makes to their respective main images
const carImages: { [key: string]: string } = {
  lexus: "/fleet/lexus1.png",
  land: "/fleet/land1.png",
  wagon: "/fleet/wagon1.png",
  cadillac: "/fleet/cadillac1.png",
  sclass: "/fleet/sclass1.png",
  sprinter: "/fleet/sprinter1.png",
  range: "/fleet/range1.png",
  cayenne: "/fleet/cayenne1.png",
};
const CarCard = ({ car }: CarCardProps) => {
    const { city_mpg, year, make, model, transmission, drive } = car;
    const [isOpen, setIsOpen] = useState(false);
  
    // Get the image for the car's make from the carImages object
    const mainImage = carImages[make.toLowerCase()] || "/default-placeholder.png"; // Fallback to a placeholder if not found
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
          {/* Main Car Image */}
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={mainImage}
          alt={`${make} ${model}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive sizes for better performance
          priority
          className="object-contain"
        />
      </div>
