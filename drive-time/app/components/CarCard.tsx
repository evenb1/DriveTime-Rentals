"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import CarDetails from './CarDetails'; // Modal Component
import CustomButton from './CustomButton'; // Button Component
import {car} from '@/types/index'
import { motion } from 'framer-motion';
import router from 'next/router';
interface CarCardProps {
    car: car;
  }
  
  const CarCard: React.FC<CarCardProps> = ({ car }) => {  const {
    id,
    make,
    model,
    price,
    transmission,
    drive,
    city_mpg,
    images
  } = car;
  const [isVisible, setIsVisible] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setIsVisible(true); // Start animation when the section is in view
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger when 50% of the section is visible
    });

    const target = document.getElementById("motion-section");
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target); // Cleanup observer
    };
  }, []);
  return (
    <motion.div className="car-card group"
    id="motion-section"
    initial={{ opacity: 0, y: 80 }}
    animate={isVisible ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 1.0 }}
    >
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make}  
          <span className='font-medium  text-base'> {model}</span>

        </h2>
        
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {price}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
  {images && images.length > 0 ? (
    <Image
      src={images[0]} // Display the first image
      alt={`${make} ${model}`}
      fill
      priority
      className="object-contain"
    />
  ) : (
    <div className="w-full h-full flex items-center justify-center bg-gray-200">
      <p className="text-gray-500">No Image Available</p>
    </div>
  )}
</div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/steering-wheel.svg" width={20} height={20} alt="steering" />
            <p className="text-[14px]">
              {transmission === 'a' ? 'Automatic' : 'Manual'}
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
        <div className="car-card__btn-container">
        <CustomButton
  title="Book Now"
  containerStyles="w-full py-[16px] rounded-full bg-green-500"
  textStyles="text-white text-[14px] leading-[17px] font-bold"
  rightIcon="/right-arrow.svg"
  handleClick={() => router.push(`/products?carId=${car.id}`)} // Navigate to the product page
/>
        </div>
        
      </div>
    </motion.div>
  );
};

export default CarCard;
