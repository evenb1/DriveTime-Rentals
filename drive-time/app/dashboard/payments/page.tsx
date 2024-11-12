// Payments.tsx

import React from 'react';
import { motion } from 'framer-motion';

const Payments = () => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <motion.h1
        className="text-2xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Payment Methods
      </motion.h1>

      <div className="mb-6">
        <motion.button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          Add New Card
        </motion.button>
      </div>

      <motion.div
        className="mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-lg font-semibold mb-2">Transaction History</h2>
        <ul className="divide-y divide-gray-200">
          <li className="py-3 flex justify-between items-center">
            <span>Rental: Premium Car</span>
            <span className="font-semibold">$200.00</span>
          </li>
          {/* More transaction items */}
        </ul>
      </motion.div>

      <motion.div
        className="text-right"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <button className="text-blue-500 hover:underline">Download Invoice</button>
      </motion.div>
    </div>
  );
};

export default Payments;
