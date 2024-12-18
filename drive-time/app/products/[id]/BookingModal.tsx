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
}

const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [details, setDetails] = useState({
    date: "",
    time: "",
    passengers: 1,
    specialRequest: "",
  });

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!details.date || !details.time) {
      alert("Please fill out all required fields.");
      return;
    }
    onSubmit(details);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Book Your Ride</h2>
        <div className="mb-4">
          <label className="block mb-2">Date</label>
          <input
            type="date"
            name="date"
            className="w-full border px-4 py-2 rounded-md"
            value={details.date}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Time</label>
          <input
            type="time"
            name="time"
            className="w-full border px-4 py-2 rounded-md"
            value={details.time}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Passengers</label>
          <input
            type="number"
            name="passengers"
            className="w-full border px-4 py-2 rounded-md"
            min={1}
            value={details.passengers}
            onChange={(e) =>
              setDetails((prev) => ({
                ...prev,
                passengers: Number(e.target.value),
              }))
            }
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Special Requests</label>
          <textarea
            name="specialRequest"
            className="w-full border px-4 py-2 rounded-md"
            rows={3}
            value={details.specialRequest}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="mr-2 px-4 py-2 bg-gray-300 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
