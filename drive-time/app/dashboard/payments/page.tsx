"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Payments = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen flex flex-col items-center">
      <motion.div
        className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Page Title */}
        <motion.h1
          className="text-3xl font-bold text-gray-800 mb-6 text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Payments
        </motion.h1>

        {/* Saved Payment Methods Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Saved Payment Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Example of a saved payment card */}
            <motion.div
              className="bg-gray-100 rounded-lg p-4 flex items-center justify-between shadow-md"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <img src="/icons/visa-logo.svg" alt="Visa" className="w-12 h-8" />
                <div>
                  <p className="text-gray-700 font-medium">Visa - Ending in 1234</p>
                  <p className="text-gray-500 text-sm">Expires 12/25</p>
                </div>
              </div>
              <button className="text-red-500 hover:underline">Remove</button>
            </motion.div>
            {/* Additional saved payment methods can be added here */}
          </div>
        </div>

        {/* Add New Payment Method Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Add New Payment Method</h2>
          <motion.div
            className="bg-blue-50 rounded-lg p-6 flex flex-col gap-4 shadow-inner"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <input
              type="text"
              placeholder="Cardholder Name"
              className="w-full border rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:border-blue-400"
            />
            <input
              type="text"
              placeholder="Card Number"
              className="w-full border rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:border-blue-400"
            />
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="MM/YY"
                className="w-1/2 border rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:border-blue-400"
              />
              <input
                type="text"
                placeholder="CVC"
                className="w-1/2 border rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:border-blue-400"
              />
            </div>
            <button className="w-full bg-blue-500 text-white rounded-lg py-2 mt-2 hover:bg-blue-600 transition-all">
              Add Card
            </button>
          </motion.div>
        </div>

        {/* Transaction History Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Transaction History</h2>
          <motion.div
            className="bg-gray-100 rounded-lg p-4 shadow-inner overflow-y-auto max-h-40"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ul className="space-y-3">
              <li className="flex justify-between text-gray-700">
                <span>Rental: Premium Car</span>
                <span className="font-semibold">$200.00</span>
              </li>
              <li className="flex justify-between text-gray-700">
                <span>Rental: SUV</span>
                <span className="font-semibold">$150.00</span>
              </li>
              {/* Additional transactions can be added here */}
            </ul>
          </motion.div>
        </div>

        {/* Download Invoices Section */}
        <div className="text-center">
          <button className="bg-green-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-600 transition-all">
            Download Invoices
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Payments;
