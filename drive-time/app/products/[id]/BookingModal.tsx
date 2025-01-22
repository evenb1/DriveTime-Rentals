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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Book Your Ride</h2>
        
        {/* Start Date Input */}
        <label className="block mb-2 text-gray-600">Start Date:</label>
        <input
          type="date"
          className="block w-full mb-4 p-2 border rounded-md"
          value={details.start_date}
          onChange={(e) =>
            setDetails((prev) => ({ ...prev, start_date: e.target.value }))
          }
        />

        {/* End Date Input */}
        <label className="block mb-2 text-gray-600">End Date:</label>
        <input
          type="date"
          className="block w-full mb-4 p-2 border rounded-md"
          value={details.end_date}
          onChange={(e) =>
            setDetails((prev) => ({ ...prev, end_date: e.target.value }))
          }
        />

        {/* Special Request Input */}
        <label className="block mb-2 text-gray-600">Special Requests:</label>
        <textarea
          className="block w-full p-2 border rounded-md mb-4"
          rows={3}
          placeholder="Special Requests (optional)"
          value={details.special_request}
          onChange={(e) =>
            setDetails((prev) => ({ ...prev, special_request: e.target.value }))
          }
        ></textarea>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className={`w-full p-2 rounded-md ${
            isAuthenticated
              ? "bg-blue-600 text-white"
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
