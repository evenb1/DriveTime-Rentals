"use client";

import React, { useState } from "react";
import GlassNavbar from "../components/GlassNavbar";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from "framer-motion";

interface Car {
  
  }

const ProductPage: React.FC<{ car: Car }> = ({ car }) => {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  const handleBooking = () => {
    if (!startDate || !endDate) {
      alert("Please select both start and end dates.");
      return;
    }
    alert(`Booking confirmed for ${car.make} ${car.model}!`);
  };

  return (
    <div>
      <GlassNavbar />
      <section className="bg-slate-100 min-h-screen px-10 py-20">
        <motion.div
          className="container mx-auto flex gap-10 items-start"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left: Image Grid */}
          <div className="flex flex-col w-1/2 gap-4">
            {car.images.map((image: string, index: number) => (
              <motion.div
                key={index}
                className="relative h-60 w-full rounded-lg overflow-hidden shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={image}
                  alt={`Car Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>

          {/* Right: Car Details */}
          <motion.div
            className="w-1/2 bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Car Title */}
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {car.make} {car.model}
            </h1>
            {/* Car Description */}
            <p className="text-lg text-gray-600 mb-6">{car.description}</p>

            {/* Car Specs */}
            <div className="grid grid-cols-2 gap-4 text-gray-700 mb-6">
              <div>
                <h3 className="text-sm font-semibold">Price</h3>
                <p>${car.price}/day</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Transmission</h3>
                <p>{car.transmission === "a" ? "Automatic" : "Manual"}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Drive</h3>
                <p>{car.drive.toUpperCase()}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold">City MPG</h3>
                <p>{car.city_mpg}</p>
              </div>
            </div>

            {/* Booking Section */}
            <motion.div
              className="bg-slate-100 p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Book Your Ride
              </h3>
              <div className="flex gap-4 mb-4">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date ?? undefined)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  placeholderText="Start Date"
                  className="w-full px-4 py-2 border rounded-md"
                />
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date ?? undefined)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  placeholderText="End Date"
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBooking}
                className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                Book Now
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default ProductPage;