"use client";

import React, { useState } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (details: {
    date: string;
    time: string;
    passengers: number;
    specialRequest: string;
  }) => void;
  isAuthenticated: boolean; // Pass user auth state
}

const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  isAuthenticated,
}) => {
  const [details, setDetails] = useState({
    date: "",
    time: "",
    passengers: 1,
    specialRequest: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!isAuthenticated) {
      alert("Please log in to book a car.");
      return;
    }

    if (!details.date || !details.time) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      onSubmit(details);
    }, 2000); // Simulate API delay
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        {/* Modal Title */}
        <h2 className="text-2xl font-semibold mb-4">Book Your Ride</h2>

        {/* Date Picker */}
        <div className="relative max-w-sm mb-4">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1..." />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Select date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
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
        <form className="max-w-xs mx-auto mb-4">
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
        </form>

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
          className="relative h-12 w-40 overflow-hidden border border-indigo-600 text-indigo-600 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-indigo-600 before:duration-300 hover:text-white hover:shadow-indigo-600 hover:before:h-40 hover:before:w-40"
        >
          {isSubmitting ? "Booking..." : "Book Now"}
        </button>
      </div>
    </div>
  );
};

export default BookingModal;
