"use client";

import React from "react";
import { FaCheckCircle, FaClock, FaTimesCircle, FaUsers, FaCalendarAlt, FaDollarSign } from "react-icons/fa";
import Image from "next/image";

interface Booking {
  id: string;
  car_id: string;
  car_name?: string;
  car_image?: string;
  start_date: string;
  end_date: string;
  status: string;
  price?: number;
  passengers?: number;
}

interface BookingDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  booking: Booking | null;
}

const BookingDetailsModal: React.FC<BookingDetailsModalProps> = ({ isOpen, onClose, booking }) => {
  if (!isOpen || !booking) return null;

  // Ensure default values for undefined fields
  const carName = booking.car_name ?? "Unknown Car";
  const carImage = booking.car_image ?? "/default-car.jpg";
  const price = booking.price !== undefined ? `$${booking.price}/day` : "Price Not Available";
  const passengers = booking.passengers !== undefined ? booking.passengers : "N/A";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
        >
          ✕
        </button>

        {/* Car Image */}
        <div className="text-center">
          <Image
            src={carImage}
            alt={carName}
            width={400}
            height={250}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
        </div>

        {/* Car Name & Price */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">{carName}</h2>
          <p className="text-gray-600 text-lg font-semibold flex items-center justify-center">
            <FaDollarSign className="mr-2 text-green-500" />
            {price}
          </p>
        </div>

        {/* Rental Period */}
        <div className="mt-4">
          <p className="text-gray-700 flex items-center">
            <FaCalendarAlt className="mr-2 text-gray-500" />
            <span className="font-semibold">Rental Period:</span> {new Date(booking.start_date).toLocaleDateString()} - {new Date(booking.end_date).toLocaleDateString()}
          </p>
        </div>

        {/* Passengers */}
        <div className="mt-2">
          <p className="text-gray-700 flex items-center">
            <FaUsers className="mr-2 text-gray-500" />
            <span className="font-semibold">Passengers:</span> {passengers}
          </p>
        </div>

        {/* Booking Status */}
        <div className="mt-4">
          {booking.status === "confirmed" ? (
            <span className="flex items-center justify-center gap-2 text-green-600 text-lg">
              <FaCheckCircle className="text-green-500" /> Confirmed
            </span>
          ) : booking.status === "pending" ? (
            <span className="flex items-center justify-center gap-2 text-yellow-600 text-lg">
              <FaClock className="text-yellow-500" /> Pending
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2 text-red-600 text-lg">
              <FaTimesCircle className="text-red-500" /> Cancelled
            </span>
          )}
        </div>

        {/* Close Button */}
        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsModal;
