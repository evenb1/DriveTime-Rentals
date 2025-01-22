"use client";

import React, { useState } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (details: {
    start_date: string;
    end_date: string;
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
    date: "",
    time: "",
  });

  const handleSubmit = async () => {
    if (!isAuthenticated) {
      alert("Please log in to book a car.");
      return;
    }

    if (!details.date || !details.time) {
      alert("Please fill in all required fields.");
      return;
    }

    const startDateTime = `${details.date}T${details.time}:00`;
    const endDateTime = `${details.date}T${details.time}:00`; // Adjust as needed

    try {
      await onSubmit({ start_date: startDateTime, end_date: endDateTime }); // Send only required fields
      setDetails({ date: "", time: "" }); // Reset form
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
        <input
          type="date"
          className="block w-full mb-4 p-2 border rounded-md"
          value={details.date}
          onChange={(e) =>
            setDetails((prev) => ({ ...prev, date: e.target.value }))
          }
        />
        <input
          type="time"
          className="block w-full mb-4 p-2 border rounded-md"
          value={details.time}
          onChange={(e) =>
            setDetails((prev) => ({ ...prev, time: e.target.value }))
          }
        />
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
