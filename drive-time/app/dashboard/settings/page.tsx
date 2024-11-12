// Settings.tsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Settings = () => {
  const [expandedSection, setExpandedSection] = useState('');

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? '' : section);
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Account Settings</h1>

      {/* Profile Settings */}
      <div className="mb-4">
        <button
          className="text-lg font-semibold text-gray-700 flex justify-between items-center w-full"
          onClick={() => toggleSection('profile')}
        >
          Profile Settings
        </button>
        <AnimatePresence>
          {expandedSection === 'profile' && (
            <motion.div
              className="pl-4 pt-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <input type="text" placeholder="Update name" className="w-full border rounded px-2 py-1 mt-2" />
              {/* Additional profile inputs */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Email Preferences */}
      <div className="mb-4">
        <button
          className="text-lg font-semibold text-gray-700 flex justify-between items-center w-full"
          onClick={() => toggleSection('email')}
        >
          Email Preferences
        </button>
        <AnimatePresence>
          {expandedSection === 'email' && (
            <motion.div
              className="pl-4 pt-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <label className="flex items-center mt-2">
                <input type="checkbox" className="mr-2" />
                Receive Booking Updates
              </label>
              {/* Additional email preferences */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Privacy Settings */}
      <div className="mb-4">
        <button
          className="text-lg font-semibold text-gray-700 flex justify-between items-center w-full"
          onClick={() => toggleSection('privacy')}
        >
          Privacy Settings
        </button>
        <AnimatePresence>
          {expandedSection === 'privacy' && (
            <motion.div
              className="pl-4 pt-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <label className="flex items-center mt-2">
                <input type="checkbox" className="mr-2" />
                Allow Profile Visibility
              </label>
              {/* Additional privacy options */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Security Settings */}
      <div className="mb-4">
        <button
          className="text-lg font-semibold text-gray-700 flex justify-between items-center w-full"
          onClick={() => toggleSection('security')}
        >
          Security Settings
        </button>
        <AnimatePresence>
          {expandedSection === 'security' && (
            <motion.div
              className="pl-4 pt-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button className="bg-red-500 text-white py-1 px-2 rounded">Change Password</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Settings;
