"use client";
import { useState } from "react";
import Image from "next/image";
import { carProps } from "@/types";
import CustomButton from "./CustomButton";
import CarDetails from "./CarDetails";
import fleetData from "../../public/cars/fleet.json"; // Adjust the path if needed

interface CarCardProps {
  car: carProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const [isOpen, setIsOpen] = useState(false);

  // Dynamically import images based on the car's make and model
  const importImages = () => {
    const context = require.context(
      "../../public/fleet", // Path to the fleet images folder
      false,                 // Do not search subdirectories
      /\.(png|jpe?g|svg)$/   // Match image files
    );

    return context.keys().reduce((images: { [key: string]: any }, path: string) => {
      const name = path.replace("./", ""); // Remove "./" from the start of the path
      images[name] = context(path);        // Map image file name to its path
      return images;
    }, {});
  };

  const images = importImages(); // Load all images in the folder
  const carImages = Object.keys(images).filter(
    (img) => img.startsWith(`${make.toLowerCase()}${model.toLowerCase()}`)
  );

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

      {/* Car Image */}
      <div className="relative w-full h-40 my-3 object-contain">
        {carImages.length > 0 ? (
          <Image
            src={images[carImages[0]].default} // Display the first image in carImages
            alt={`${make} ${model}`}
            fill
            priority
            className="object-contain"
          />
        ) : (
          <Image src="/car-logo.svg" alt="car model" fill priority className="object-contain" />
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
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      {/* Car Details Modal */}
      <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
    </div>
  );
};

export default CarCard;
