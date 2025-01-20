"use client";

import React, { useState } from "react";
import { FaCreditCard, FaPlus, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const PaymentsPage = () => {
  const [paymentHistory, setPaymentHistory] = useState([
    {
      id: 1,
      date: "Nov 10, 2024",
      amount: "$150.00",
      status: "Successful",
    },
    {
      id: 2,
      date: "Nov 05, 2024",
      amount: "$200.00",
      status: "Failed",
    },
    {
      id: 3,
      date: "Oct 28, 2024",
      amount: "$300.00",
      status: "Successful",
    },
  ]);

  return (
    <div className="max-w-5xl p-10 mx-auto ">
      {/* Page Title */}
      <h1 className="text-3xl font-extrabold text-gray-800 mb-8">Payments</h1>
      <hr className="my-4 border-t border-gray-300" />

 
      <div className="mt-8 bg-white  p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Add Payment Method</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-600 font-medium mb-2">Cardholder Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-2">Card Number</label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-2">Expiration Date</label>
            <input
              type="text"
              placeholder="MM/YY"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-2">CVV</label>
            <input
              type="text"
              placeholder="123"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
        <button className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition flex items-center gap-2">
          <FaPlus /> Add Card
        </button>
      </div>
    </div>
  );
};

export default PaymentsPage;
