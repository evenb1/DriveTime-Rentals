"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react"; // Import useSession from NextAuth
import { FaSearch, FaCar, FaCalendarAlt, FaClock, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";

const BookingsPage = () => {
  const { data: session, status } = useSession(); // Get session data
  const router = useRouter(); // Router for redirecting

  // Redirect to login page if the user is not authenticated
  if (status === "loading") {
    return <p>Loading...</p>; // While the session is loading
  }

  if (!session) {
    router.push("/"); // Redirect unauthenticated users to the sign-in page
    return <p>Redirecting...</p>; // Show a loading message while redirecting
  }

  const [searchQuery, setSearchQuery] = useState("");
  const [bookings, setBookings] = useState([
    {
      id: 1,
      car: "Lexus RX 350",
      date: "Nov 12 - Nov 15",
      time: "10:00 AM - 6:00 PM",
      status: "Confirmed",
    },
    {
      id: 2,
      car: "Mercedes S-Class",
      date: "Nov 18 - Nov 20",
      time: "9:00 AM - 5:00 PM",
      status: "Pending",
    },
  
  ]);

  const filteredBookings = bookings.filter((booking) =>
    booking.car.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto p-12 rounded-lg">
      {/* Page Title */}
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6">My Bookings</h1>
      <hr className="my-4 border-t border-gray-300" />

      {/* Search Bar */}
      <div className="flex items-center mb-6 bg-gray-50 p-4 rounded-lg shadow-md">
        <FaSearch className="text-gray-400 text-lg mr-2" />
        <input
          type="text"
          placeholder="Search bookings..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Bookings Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 text-left text-gray-700 font-medium border-b">Car</th>
              <th className="p-4 text-left text-gray-700 font-medium border-b">Rental Period</th>
              <th className="p-4 text-left text-gray-700 font-medium border-b">Time</th>
              <th className="p-4 text-left text-gray-700 font-medium border-b">Status</th>
              <th className="p-4 text-left text-gray-700 font-medium border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.length > 0 ? (
              filteredBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="p-4 flex items-center gap-2 text-gray-700">
                    <FaCar className="text-blue-500" />
                    {booking.car}
                  </td>
                  <td className="p-4 text-gray-600">
                    <FaCalendarAlt className="inline mr-1 text-gray-400" />
                    {booking.date}
                  </td>
                  <td className="p-4 text-gray-600">
                    <FaClock className="inline mr-1 text-gray-400" />
                    {booking.time}
                  </td>
                  <td className="p-4">
                    {booking.status === "Confirmed" && (
                      <span className="flex items-center gap-1 text-green-600">
                        <FaCheckCircle className="text-green-500" /> Confirmed
                      </span>
                    )}
                    {booking.status === "Pending" && (
                      <span className="flex items-center gap-1 text-yellow-600">
                        <FaClock className="text-yellow-500" /> Pending
                      </span>
                    )}
                    {booking.status === "Cancelled" && (
                      <span className="flex items-center gap-1 text-red-600">
                        <FaTimesCircle className="text-red-500" /> Cancelled
                      </span>
                    )}
                  </td>
                  <td className="p-4">
                    <button className="text-blue-500 hover:underline">
                      View Details
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="p-4 text-center text-gray-500 italic"
                >
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* CTA Button */}
      <div className="mt-6 text-right">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition">
          Create New Booking
        </button>
      </div>
    </div>
  );
};

export default BookingsPage;
