"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react"; // To handle user sessions
import { useRouter } from "next/navigation"; // To redirect users
import { supabase } from "../../lib/supabase"; // Supabase client
import {
  FaSearch,
  FaCar,
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

// Define the Booking type
type Booking = {
  id: string;
  user_id: string;
  car_id: string;
  car_name: string;
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

  // Redirect unauthenticated users to the home page
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/"); // Redirect
    }
  }, [status, router]);

  // Fetch bookings and set up real-time updates
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const { data, error } = await supabase.from("bookings").select("*");
        if (error) throw error;
        setBookings(data || []); // Set fetched bookings
      } catch (err) {
        console.error("Error fetching bookings:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();

    // Subscribe to real-time updates for the bookings table
    const channel = supabase
      .channel("bookings")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "bookings" },
        (payload) => {
          console.log("Real-time update received:", payload);

          if (payload.eventType === "INSERT") {
            setBookings((prev) => [...prev, payload.new as Booking]);
          } else if (payload.eventType === "UPDATE") {
            setBookings((prev) =>
              prev.map((booking) =>
                booking.id === (payload.new as Booking).id
                  ? (payload.new as Booking)
                  : booking
              )
            );
          } else if (payload.eventType === "DELETE") {
            setBookings((prev) =>
              prev.filter(
                (booking) => booking.id !== (payload.old as Booking).id
              )
            );
          }
        }
      )
      .subscribe();

    // Cleanup on unmount
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // Filter bookings based on the search query
  const filteredBookings = bookings.filter((booking) =>
    booking.car_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Show loading state
  if (loading) return <p>Loading bookings...</p>;

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
            {filteredBookings.length > 0 ? (
              filteredBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="p-4 flex items-center gap-2 text-gray-700">
                    <FaCar className="text-blue-500" />
                    {booking.car_name}
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
    </div>
  );
};

export default BookingsPage;
