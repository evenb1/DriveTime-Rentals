"use client";

import React, { useState } from "react";
import GlassNavbar from "../../components/GlassNavbar";
import Image from "next/image";
import { motion } from "framer-motion";
import cars from "@/data/cars.json"; // Import the JSON file
import { useSession } from "next-auth/react"; // For authentication
import BookingModal from "./BookingModal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImageSliderModal from "./ImageSliderModal";
import AddressMap from "@/app/components/AddressMap";


const ProductPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const closeModal = () => {
    setIsImageModalOpen(false);
  };
  
  // Find the car by ID
  const car = cars.find((car) => car.id === id);

  // Check if the car exists
  if (!car) {
    return (
      <div>
        <GlassNavbar />
        <div className="min-h-screen flex justify-center items-center">
          <p className="text-lg text-red-500">Car not found.</p>
        </div>
      </div>
    );
  }

  const { data: session } = useSession(); // Session for user authentication
  const [isModalOpen, setIsModalOpen] = useState(false); // Booking modal state
  const [isImageModalOpen, setIsImageModalOpen] = useState(false); // Image slider modal
  const [selectedImageIndex, setSelectedImageIndex] = useState(0); // Selected image for slider
  const [loading, setLoading] = useState(false); // Loading state
  const [bookingDetails, setBookingDetails] = useState({
    date: "",
    time: "",
    passengers: 1,
    specialRequest: "",
  });

  const handleBookingSubmit = (details: {
    date: string;
    time: string;
    passengers: number;
    specialRequest: string;
  }) => {
    if (!session) {
      toast.error("Please sign in to book a car.");
      return;
    }
    toast.success(
      `Booking confirmed for ${car.make} ${car.model} on ${details.date} at ${details.time}`
    );
    setIsModalOpen(false);
  };

  return (
    <div className="bg-slate-50 h-full" >
      <GlassNavbar />
      <section className="min-h-screen px-10 pt-20 ">
        <motion.div
          className="container mx-auto flex gap-10 items-start"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left: Image Section */}
          <div className="w-1/2">
            {/* Main Image */}
            <div className="relative h-96 overflow-hidden  mb-4">
              <Image
                src={car.images[0]}
                alt="Main Car Image"
                fill
                className="object-cover cursor-pointer"
                onClick={() => {
                  setSelectedImageIndex(0);
                  setIsImageModalOpen(true);
                }}
              />
            </div>

            {/* Smaller Images */}
            <div className="flex flex-row gap-5">
              {car.images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="relative h-48 w-48 rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => {
                    setSelectedImageIndex(index + 1);
                    setIsImageModalOpen(true);
                  }}
                >
                  <Image
                    src={image}
                    alt={`Car Image ${index + 2}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Car Details */}
          <motion.div
            className="w-1/2 bg-none px-20 "
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl font-light text-gray-800 mb-2">
              {car.make} {car.model}
            </h1>


<div className="flex items-center">
    <svg className="w-4 h-4 text-blue-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 text-blue-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 text-blue-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 text-blue-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">4.95</p>
    <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">out of</p>
    <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
</div>

            <hr className="my-4 border-t border-gray-300" />

            <p className="text-lg text-gray-600 mb-6">
              {car.description || "No description available."}
            </p>

            <div className="grid grid-cols-2 gap-4 text-gray-700 mb-6">
              <div>
                <h3 className="text-sm font-bold">Price</h3>
                <p>${car.price}/day</p>
              </div>
              <div>
                <h3 className="text-sm font-bold">Transmission</h3>
                <p>{car.transmission === "a" ? "Automatic" : "Manual"}</p>
              </div>
              <div>
                <h3 className="text-sm font-bold">Drive</h3>
                <p>{car.drive.toUpperCase()}</p>
              </div>
              <div>
                <h3 className="text-sm font-bold">City MPG</h3>
                <p>{car.city_mpg}</p>
              </div>
              <div>
                <h3 className="text-sm font-bold">Year</h3>
                <p>{car.year}</p>
              </div>
              <div>
                <h3 className="text-sm font-bold">Cylinders</h3>
                <p>{car.cylinders}</p>
              </div>
            </div>

            <motion.button
              
              onClick={() => setIsModalOpen(true)}
              className="w-full text-lg py-5 bg-white bo text-blue-500 border-blue-500 border hover:text-white hover:bg-blue-500 transition"
            >
              Book Now
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      <BookingModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  onSubmit={handleBookingSubmit}
  isAuthenticated={!!session} // Pass user authentication state
/>

      {/* Image Modal */}
     {isImageModalOpen && (
  <ImageSliderModal
    images={car.images}
    initialIndex={0}
    onClose={closeModal} // Pass close function
  />
)}


      <section className="flex flex-col justify-center pt-16 px-48 pb-20 max-w-6xl mx-auto bg-gray-50">
  {/* Title and Overview */}
  <h1 className="text-5xl font-light mb-3">
    {car.make} {car.model} Overview
  </h1>
  <hr className="my-4 border-t border-gray-300" />

  <p className="text-gray-600 mb-10 mt-5 leading-relaxed">
    Discover the features and services offered in this vehicle. We ensure safety, luxury, and satisfaction with our premium car rental options.
  </p>

  {/* Features Grid */}
  <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pb-12 text-gray-700">
    {/* Single Feature */}
    <div className="flex items-center gap-2">
      <span className="text-blue-600 text-xl">✔</span>
      <p>Luxury Car Selection</p>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-blue-600 text-xl">✔</span>
      <p>High Safety Standards</p>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-blue-600 text-xl">✔</span>
      <p>Comfortable Interiors</p>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-blue-600 text-xl">✔</span>
      <p>Flexible Rental Packages</p>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-blue-600 text-xl">✔</span>
      <p>Top-Notch Performance</p>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-blue-600 text-xl">✔</span>
      <p>24/7 Customer Support</p>
    </div>
  </div>

  {/* Footer Text */}
  <p className="mb-10 text-gray-600 leading-relaxed">
    We provide a seamless rental experience with a 100% luxurious fleet and top-class service for all your transportation needs.
  </p>

  {/* Image */}
  <div className="relative w-full h-96 mx-auto">
    <Image
      src="/shorty.jpg"
      alt="driver"
      layout="fill"
      objectFit="cover"
    />
  </div>
</section>
<AddressMap/>

    </div>
  );
};

export default ProductPage;
