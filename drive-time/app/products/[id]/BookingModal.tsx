"use client";

import React, { useState } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (details: {
    start_date: string;
    end_date: string;
    special_request: string;
  }) => Promise<void>;
  isAuthenticated: boolean;
}

const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  isAuthenticated,
}) => {
  const [details, setDetails] = useState({
    start_date: "",
    end_date: "",
    special_request: "",
  });

  const handleSubmit = async () => {
    if (!isAuthenticated) {
      alert("Please log in to book a car.");
      return;
    }

    if (!details.start_date || !details.end_date) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      await onSubmit(details); // Call parent function to handle booking creation
      setDetails({ start_date: "", end_date: "", special_request: "" }); // Reset form
      onClose(); // Close modal
    } catch (error) {
      console.error("Error submitting booking:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 backdrop-blur-sm transition-opacity duration-300">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md relative transform transition-all duration-300 scale-95 hover:scale-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Book Your Ride</h2>

        {/* Start Date Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Start Date:
          </label>
          <input
            type="date"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            value={details.start_date}
            onChange={(e) =>
              setDetails((prev) => ({ ...prev, start_date: e.target.value }))
            }
          />
        </div>

        {/* End Date Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            End Date:
          </label>
          <input
            type="date"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            value={details.end_date}
            onChange={(e) =>
              setDetails((prev) => ({ ...prev, end_date: e.target.value }))
            }
          />
        </div>

        {/* Special Request Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Special Requests:
          </label>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            rows={3}
            placeholder="Special Requests (optional)"
            value={details.special_request}
            onChange={(e) =>
              setDetails((prev) => ({ ...prev, special_request: e.target.value }))
            }
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className={`w-full p-3 rounded-lg font-semibold transition-all duration-300 ${
            isAuthenticated
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-400 text-gray-700 cursor-not-allowed"
          }`}
          disabled={!isAuthenticated}
        >
          {isAuthenticated ? "Book Now" : "Please Sign In"}
        </button>
      </div>
    </div>
  );
};

export default BookingModal;