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
  lexus: "../../public/cars/lexus1.png",
  land: "../../public/cars/land1.png",
  wagon: "../../public/cars/wagon1.png",
  cadillac: "../../public/cars/cadillac1.png",
  sclass: "../../public/cars/sclass1.png",
  sprinter: "../../public/cars/sprinter1.png",
  range: "/../../public/cars/range1.png",
  cayenne: "../../public/cars/cayenne1.png",
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
 {/* Car Specs */}
 <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/steering-wheel.svg" width={20} height={20} alt="steering" />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="tire" />
            <p className="text-[14px]">
              {drive.toUpperCase()}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="gas" />
            <p className="text-[14px]">{city_mpg}</p>
          </div>
        </div>
{/* View More Button */}
<div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      {/* Car Details Modal */}
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;