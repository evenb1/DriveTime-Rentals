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
    <div className="max-w-7xl mx-auto p-6 bg-gray-100 min-h-screen">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Payments</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Summary Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Account Summary</h2>
          <p className="text-gray-600 mb-2">
            <span className="font-bold">Total Balance:</span> $450.00
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-bold">Last Payment:</span> $150.00 on Nov 10, 2024
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg mt-4 hover:bg-blue-600 transition">
            Add Funds
          </button>
        </div>

        {/* Payment History */}
        <div className="lg:col-span-2 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Payment History</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 text-left text-gray-700 font-medium border-b">Date</th>
                  <th className="p-4 text-left text-gray-700 font-medium border-b">Amount</th>
                  <th className="p-4 text-left text-gray-700 font-medium border-b">Status</th>
                </tr>
              </thead>
              <tbody>
                {paymentHistory.map((payment) => (
                  <tr key={payment.id} className="hover:bg-gray-50">
                    <td className="p-4 text-gray-600">{payment.date}</td>
                    <td className="p-4 text-gray-600">{payment.amount}</td>
                    <td className="p-4">
                      {payment.status === "Successful" ? (
                        <span className="flex items-center gap-2 text-green-600">
                          <FaCheckCircle className="text-green-500" /> Successful
                        </span>
                      ) : (
                        <span className="flex items-center gap-2 text-red-600">
                          <FaTimesCircle className="text-red-500" /> Failed
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add Payment Method */}
      <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
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
