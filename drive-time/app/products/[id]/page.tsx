"use client";

import React, { useState } from "react";
import GlassNavbar from "../../components/GlassNavbar";
import Image from "next/image";
import { motion } from "framer-motion";
import cars from "@/data/cars.json";
import { useSession } from "next-auth/react";
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

  const car = cars.find((car) => car.id === id);

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

  const { data: session } = useSession();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleBookingSubmit = async (details: {
    start_date: string;
    end_date: string;
    special_request: string;
  }): Promise<void> => {
    if (!session || !session.user) {
      toast.error("Please sign in to book a car.");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: session.user.id,
          car_id: id,
          start_date: details.start_date,
          end_date: details.end_date,
          special_request: details.special_request,
          status: "pending",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to book the car. Please try again.");
      }

      const data = await response.json();
      toast.success(`Booking confirmed for ${car.make} ${car.model}!`);
      setIsModalOpen(false);
    } catch (error) {
      toast.error((error as Error).message || "An error occurred while booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 h-full">
      <GlassNavbar />
      <section className="min-h-screen px-6 lg:px-10 pt-20">
        <motion.div
          className="container mx-auto flex flex-col lg:flex-row gap-8 items-start"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left: Image Section */}
          <div className="lg:w-1/2 w-full">
            <div className="relative h-72 lg:h-96 overflow-hidden mb-4">
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
            <div className="flex flex-wrap gap-4">
              {car.images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="relative h-32 w-32 lg:h-48 lg:w-48 rounded-lg overflow-hidden cursor-pointer"
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
            className="lg:w-1/2 w-full bg-none px-4 lg:px-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-3xl lg:text-4xl font-light text-gray-800 mb-2">
              {car.make} {car.model}
            </h1>

            <div className="flex items-center">
              {[...Array(4)].map((_, idx) => (
                <svg
                  key={idx}
                  className="w-4 h-4 text-blue-500 mr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
              <p className="ml-1 text-sm font-medium text-gray-500">4.95 out of 5</p>
            </div>

            <hr className="my-4 border-t border-gray-300" />

            <p className="text-lg text-gray-600 mb-6">{car.description}</p>

            <div className="grid grid-cols-2 gap-4 text-gray-700 mb-6">
              {[
                { label: "Price", value: `$${car.price}/day` },
                { label: "Transmission", value: car.transmission === "a" ? "Automatic" : "Manual" },
                { label: "Drive", value: car.drive.toUpperCase() },
                { label: "City MPG", value: car.city_mpg },
                { label: "Year", value: car.year },
                { label: "Cylinders", value: car.cylinders },
              ].map((info, idx) => (
                <div key={idx}>
                  <h3 className="text-sm font-bold">{info.label}</h3>
                  <p>{info.value}</p>
                </div>
              ))}
            </div>

            <motion.button
              onClick={() => setIsModalOpen(true)}
              className={`w-full text-lg py-4 bg-white border text-blue-500 border-blue-500 hover:text-white hover:bg-blue-500 transition ${
                !session ? "cursor-not-allowed " : ""
              }`}
            >
              {loading ? "Loading..." : "Book Now"}
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleBookingSubmit}
        isAuthenticated={!!session}
      />

      {isImageModalOpen && (
        <ImageSliderModal
          images={car.images}
          initialIndex={selectedImageIndex}
          onClose={closeModal}
        />
      )}

      <section className="flex flex-col justify-center text-center pt-16 px-6 lg:px-48 pb-20 bg-gray-50">
        <h1 className="text-3xl lg:text-5xl font-light mb-6">{car.make} {car.model} Overview</h1>
        <hr className="my-4 border-t border-gray-300" />

        <p className="text-gray-600 mb-10">
          Discover the features and services offered in this vehicle. We ensure safety, luxury, and satisfaction with our premium car rental options.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "Luxury Car Selection",
            "High Safety Standards",
            "Comfortable Interiors",
            "Flexible Rental Packages",
            "Top-Notch Performance",
            "24/7 Customer Support",
          ].map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="text-blue-600 text-xl">✔</span>
              <p>{feature}</p>
            </div>
          ))}
        </div>
      </section>

      <AddressMap />
    </div>
  );
};

export default ProductPage;
