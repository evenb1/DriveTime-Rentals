"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabase";
import { FaSearch, FaCar, FaCalendarAlt, FaClock, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

type Booking = {
  id: string;
  user_id: string;
  car_id: string;
  start_date: string;
  end_date: string;
  status: string;
};

const BookingsPage = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Search input
  const [bookings, setBookings] = useState<Booking[]>([]); // List of bookings
  const [loading, setLoading] = useState(true); // Loading state
  const { data: session, status } = useSession(); // Authentication status
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("bookings")
          .select("*")
          .eq("user_id", session?.user.id);

        if (error) throw error;

        setBookings(data || []);
      } catch (err) {
        console.error("Error fetching bookings:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [session?.user.id]);

  if (loading) return <p className="text-center text-gray-600">Loading bookings...</p>;

  return (
    <div className="max-w-7xl mx-auto p-12 rounded-lg">
      {/* Page Title */}
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6">My Bookings</h1>
      <hr className="my-4 border-t border-gray-300" />

      {/* Search Bar */}
      <div className="flex items-center mb-6 p-4 rounded-lg shadow-md">
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
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="p-4 flex items-center gap-2 text-gray-700">
                    <FaCar className="text-blue-500" />
                    {booking.car_id} {/* Replace with car_name if available */}
                  </td>
                  <td className="p-4 text-gray-600">
                    <FaCalendarAlt className="inline mr-1 text-gray-400" />
                    {new Date(booking.start_date).toLocaleDateString()} -{" "}
                    {new Date(booking.end_date).toLocaleDateString()}
                  </td>
                  <td className="p-4 text-gray-600">
                    <FaClock className="inline mr-1 text-gray-400" />
                    {new Date(booking.start_date).toLocaleTimeString()} -{" "}
                    {new Date(booking.end_date).toLocaleTimeString()}
                  </td>
                  <td className="p-4">
                    {booking.status === "confirmed" && (
                      <span className="flex items-center gap-1 text-green-600">
                        <FaCheckCircle className="text-green-500" /> Confirmed
                      </span>
                    )}
                    {booking.status === "pending" && (
                      <span className="flex items-center gap-1 text-yellow-600">
                        <FaClock className="text-yellow-500" /> Pending
                      </span>
                    )}
                    {booking.status === "cancelled" && (
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
                <td colSpan={5} className="p-4 text-center text-gray-500 italic">
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingsPage;
