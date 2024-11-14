"use client";
import { useState } from "react";
import Image from "next/image";
import { carProps } from "@/types";
import CustomButton from "./CustomButton";
import CarDetails from "./CarDetails";
import carImages from "../../public/cars/fleet.json"; 

interface CarCardProps {
  car: carProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const [isOpen, setIsOpen] = useState(false); // `isOpen` is internal state, not a prop

  // Find the images for the current car's make and model
  const carData = carImages.find(
    (item) => item.make.toLowerCase() === make.toLowerCase() && item.model.toLowerCase() === model.toLowerCase()
  );

  const mainImage = carData?.images[0] || "/default-placeholder.png"; // Use the first image or placeholder
  const otherImages = carData?.images.slice(1) || []; // Remaining images for gallery

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
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Define responsive sizes
  priority
  className="object-contain"
/>

      </div>

      {/* Additional Images Gallery */}
      <div className="flex gap-2 mt-4">
        {otherImages.length > 0 ? (
          otherImages.map((img, index) => (
            <div key={index} className="w-16 h-16 relative">
              <Image
                src={img}
                alt={`${make} ${model} image ${index + 2}`}
                layout="fill"
                className="object-cover rounded"
              />
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">No additional images available</div>
        )}
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
            handleClick={() => setIsOpen(true)} // Open modal on click
          />
        </div>
      </div>

      {/* Car Details Modal */}
      <CarDetails 
        isOpen={isOpen}             // Pass `isOpen` to CarDetails
        closeModal={() => setIsOpen(false)}  // Function to close modal
        car={car} 
      />
    </div>
  );
};

export default CarCard;
