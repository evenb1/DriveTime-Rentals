"use client";

import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaClock, FaTimesCircle } from "react-icons/fa";
import { supabase } from "../../lib/supabase";

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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        <div className="text-center">
          <img
            src={booking.car_image}
            alt={booking.car_name}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            {booking.car_name}
          </h2>
          <p className="text-gray-600 mb-4 font-semibold">{booking.price}</p>

          <div className="mb-4">
            <p className="text-gray-700">
              <span className="font-semibold">Rental Period:</span> <br />
              {new Date(booking.start_date).toLocaleDateString()} -{" "}
              {new Date(booking.end_date).toLocaleDateString()}
            </p>
          </div>

          {carDetails && (
            <div className="mb-4">
              <p className="text-gray-700">
                <span className="font-semibold">Car Features:</span>{" "}
                {carDetails.features.join(", ")}
              </p>
            </div>
          )}

          <div className="mb-4">
            {booking.status === "confirmed" ? (
              <span className="flex justify-center items-center gap-2 text-green-600">
                <FaCheckCircle className="text-green-500" /> Confirmed
              </span>
            ) : booking.status === "pending" ? (
              <span className="flex justify-center items-center gap-2 text-yellow-600">
                <FaClock className="text-yellow-500" /> Pending
              </span>
            ) : (
              <span className="flex justify-center items-center gap-2 text-red-600">
                <FaTimesCircle className="text-red-500" /> Cancelled
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsModal;
