"use client";

import React, { useState } from "react";
import GlassNavbar from "../../components/GlassNavbar";
import Image from "next/image";
import { motion } from "framer-motion";
import cars from "@/data/cars.json"; // Import the JSON file
import { useSession } from "next-auth/react"; // For authentication

const ProductPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

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

  const handleBooking = () => {
    if (!session) {
      alert("Please sign in to book a car.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(`Booking confirmed for ${car.make} ${car.model}!`);
      setIsModalOpen(false);
    }, 2000);
  };

  return (
    <div className="bg-slate-100 h-full" >
      <GlassNavbar />
      <section className="min-h-screen px-10 py-20">
        <motion.div
          className="container mx-auto flex gap-10 items-start"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left: Image Section */}
          <div className="w-1/2">
            {/* Main Image */}
            <div className="relative h-80 overflow-hidden  mb-4">
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
            <h1 className="text-4xl font-bold text-gray-800 mb-7">
              {car.make} {car.model}
            </h1>
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
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="w-full py-5 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Book Now
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl font-semibold mb-4">Book Your Ride</h2>
            <div className="mb-4">
              <label className="block mb-2">Date</label>
              <input
                type="date"
                className="w-full border px-4 py-2 rounded-md"
                value={bookingDetails.date}
                onChange={(e) =>
                  setBookingDetails((prev) => ({
                    ...prev,
                    date: e.target.value,
                  }))
                }
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Time</label>
              <input
                type="time"
                className="w-full border px-4 py-2 rounded-md"
                value={bookingDetails.time}
                onChange={(e) =>
                  setBookingDetails((prev) => ({
                    ...prev,
                    time: e.target.value,
                  }))
                }
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Passengers</label>
              <input
                type="number"
                className="w-full border px-4 py-2 rounded-md"
                min={1}
                value={bookingDetails.passengers}
                onChange={(e) =>
                  setBookingDetails((prev) => ({
                    ...prev,
                    passengers: Number(e.target.value),
                  }))
                }
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Special Requests</label>
              <textarea
                className="w-full border px-4 py-2 rounded-md"
                rows={3}
                value={bookingDetails.specialRequest}
                onChange={(e) =>
                  setBookingDetails((prev) => ({
                    ...prev,
                    specialRequest: e.target.value,
                  }))
                }
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="mr-2 px-4 py-2 bg-gray-300 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleBooking}
                className={`px-4 py-2 bg-blue-500 text-white rounded-md ${
                  loading && "opacity-50 cursor-not-allowed"
                }`}
              >
                {loading ? "Processing..." : "Book Now"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Image Modal */}
      {isImageModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative w-3/4 bg-white p-4 rounded-lg shadow-lg">
            <Image
              src={car.images[selectedImageIndex]}
              alt="Car Image"
              width={800}
              height={500}
              className="object-contain"
            />
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute top-4 right-4 text-white bg-red-500 rounded-full p-2"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
