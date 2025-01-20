"use client";

import React, { useState } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  carId: string; // Pass the car ID
  userId: string | null; // Pass the authenticated user's ID or null if unauthenticated
}

const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  carId,
  userId,
}) => {
  const [details, setDetails] = useState({
    date: "",
    time: "",
    passengers: 1,
    specialRequest: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setError(null); // Clear previous errors

    if (!userId) {
      setError("Please log in to book a car.");
      return;
    }

    if (!details.date || !details.time) {
      setError("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    // Combine date and time into ISO format
    const startDate = new Date(`${details.date}T${details.time}`).toISOString();

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: userId,
          car_id: carId,
          start_date: startDate,
          passengers: details.passengers,
          special_request: details.specialRequest,
          status: "pending",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to book the car.");
      }

      alert("Booking successful!");
      onClose(); // Close the modal
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 mx-auto rounded-sm w-full max-w-md relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        {/* Modal Title */}
        <h2 className="text-2xl font-semibold mb-4">Book Your Ride</h2>

        {/* Error Message */}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {/* Date Picker */}
        <div className="relative max-w-sm mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Date
          </label>
          <input
            type="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={details.date}
            onChange={(e) =>
              setDetails((prev) => ({ ...prev, date: e.target.value }))
            }
          />
        </div>

        {/* Time Picker */}
        <div className="relative max-w-sm mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Time
          </label>
          <input
            type="time"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={details.time}
            onChange={(e) =>
              setDetails((prev) => ({ ...prev, time: e.target.value }))
            }
          />
        </div>

        {/* Passenger Counter */}
        <div className="max-w-xs mx-auto mb-4">
          <label
            htmlFor="quantity-input"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Number of Passengers:
          </label>
          <div className="relative flex items-center max-w-[8rem]">
            <button
              type="button"
              onClick={() =>
                setDetails((prev) => ({
                  ...prev,
                  passengers: Math.max(1, prev.passengers - 1),
                }))
              }
              className="bg-gray-100 border rounded-s-lg p-3 h-11"
            >
              -
            </button>
            <input
              type="text"
              value={details.passengers}
              readOnly
              className="bg-gray-50 text-center h-11 text-sm w-full"
            />
            <button
              type="button"
              onClick={() =>
                setDetails((prev) => ({
                  ...prev,
                  passengers: prev.passengers + 1,
                }))
              }
              className="bg-gray-100 border rounded-e-lg p-3 h-11"
            >
              +
            </button>
          </div>
        </div>

        {/* Special Requests */}
        <textarea
          className="w-full border rounded-lg p-3 mb-4"
          rows={3}
          placeholder="Special Requests (Optional)"
          value={details.specialRequest}
          onChange={(e) =>
            setDetails((prev) => ({ ...prev, specialRequest: e.target.value }))
          }
        ></textarea>

        {/* Book Now Button */}
        <button
          onClick={handleSubmit}
          className="relative h-12 w-40 justify-center overflow-hidden border border-blue-600 text-blue-600 shadow-2xl transition-all duration-200 hover:bg-blue-600 hover:text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Booking..." : "Book Now"}
        </button>
      </div>
    </div>
  );
};

export default BookingModal;
