"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import {
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
  FaUsers,
  FaCar,
  FaDollarSign,
  FaCalendarAlt,
} from "react-icons/fa";

interface BookingDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  booking: {
    id: string;
    car_id: string;
    car_name: string;
    car_image: string;
    start_date: string;
    end_date: string;
    status: string;
    price: string;
    passengers: number;
  } | null;
}

const BookingDetailsModal: React.FC<BookingDetailsModalProps> = ({
  isOpen,
  onClose,
  booking,
}) => {
  const [carDetails, setCarDetails] = useState<any>(null);

  useEffect(() => {
    const fetchCarDetails = async () => {
      if (!booking?.car_id) return;
      try {
        const { data, error } = await supabase
          .from("cars")
          .select("*")
          .eq("id", booking.car_id)
          .single();

        if (error) throw error;
        setCarDetails(data);
      } catch (err) {
        console.error("Error fetching car details:", err);
      }
    };

    fetchCarDetails();
  }, [booking?.car_id]);

  if (!isOpen || !booking) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        {/* Car Image */}
        <div className="w-full flex justify-center">
          <Image
            src={booking.car_image}
            alt={booking.car_name}
            width={400}
            height={250}
            className="w-full h-48 object-cover rounded-md"
          />
        </div>

        {/* Car Details */}
        <div className="text-center mt-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            {booking.car_name}
          </h2>
          <p className="text-gray-600 font-semibold text-lg">{booking.price}</p>
        </div>

        {/* Rental Period */}
        <div className="mt-4 flex items-center justify-between bg-gray-100 p-3 rounded-md">
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-gray-500" />
            <p className="text-gray-700">
              {new Date(booking.start_date).toLocaleDateString()} -{" "}
              {new Date(booking.end_date).toLocaleDateString()}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FaUsers className="text-gray-500" />
            <p className="text-gray-700">{booking.passengers} Passengers</p>
          </div>
        </div>

        {/* Car Features (if available) */}
        {carDetails && (
          <div className="mt-4 bg-gray-50 p-3 rounded-md">
            <h3 className="text-gray-800 font-semibold mb-2">Car Features</h3>
            <p className="text-gray-700">{carDetails.features?.join(", ")}</p>
          </div>
        )}

        {/* Booking Status */}
        <div className="mt-4 flex items-center justify-center">
          {booking.status === "confirmed" ? (
            <span className="flex items-center gap-2 text-green-600">
              <FaCheckCircle className="text-green-500" /> Confirmed
            </span>
          ) : booking.status === "pending" ? (
            <span className="flex items-center gap-2 text-yellow-600">
              <FaClock className="text-yellow-500" /> Pending
            </span>
          ) : (
            <span className="flex items-center gap-2 text-red-600">
              <FaTimesCircle className="text-red-500" /> Cancelled
            </span>
          )}
        </div>

        {/* Close Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={onClose}
            className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsModal;
