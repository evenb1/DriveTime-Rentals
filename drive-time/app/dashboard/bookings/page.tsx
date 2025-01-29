"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabase";
import {
  FaSearch,
  FaCar,
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import Image from "next/image";

type Booking = {
  id: string;
  user_id: string;
  car_id: string;
  start_date: string;
  end_date: string;
  status: string;
  car_name?: string; // Added for better display
  car_image?: string; // Car image field
};

const BookingsPage = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Search input
  const [bookings, setBookings] = useState<Booking[]>([]); // List of bookings
  const [loading, setLoading] = useState(true); // Loading state
  const [user, setUser] = useState<any>(null); // Store user data
  const router = useRouter();

  // Fetch authenticated user from Supabase
  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error("Error fetching user:", error);
        router.push("/"); // Redirect to homepage if not authenticated
        return;
      }
      setUser(data.user);
    };
    getUser();
  }, [router]);

  // Fetch bookings for the authenticated user
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setLoading(true);
        if (!user) return;

        const { data: bookingsData, error: bookingError } = await supabase
          .from("bookings")
          .select("*, cars (name, image)")
          .eq("user_id", user.id);

        if (bookingError) throw bookingError;

        // Map data to include car details
        const formattedBookings = bookingsData.map((booking: any) => ({
          ...booking,
          car_name: booking.cars?.name || "Unknown Car",
          car_image: booking.cars?.image || "/default-car.jpg",
        }));

        setBookings(formattedBookings);
      } catch (err) {
        console.error("Error fetching bookings:", err);
      } finally {
        setLoading(false);
      }
    };

    if (user) fetchBookings();
  }, [user]);

  if (loading) return <p className="text-center text-gray-600">Loading bookings...</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Bookings</h1>

      {/* Search Bar */}
      <div className="flex items-center bg-white shadow-md p-3 rounded-lg mb-6">
        <FaSearch className="text-gray-400 text-lg mr-2" />
        <input
          type="text"
          placeholder="Search bookings..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Bookings List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings.length > 0 ? (
          bookings
            .filter((b) => b.car_name.toLowerCase().includes(searchQuery.toLowerCase()))
            .map((booking) => (
              <div key={booking.id} className="bg-white shadow-lg rounded-lg p-4 flex flex-col">
                {/* Car Image */}
                <Image
                  src={booking.car_image}
                  alt={booking.car_name}
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover rounded-md"
                />

                {/* Car Name */}
                <h2 className="text-lg font-semibold mt-3">{booking.car_name}</h2>

                {/* Rental Period */}
                <p className="text-sm text-gray-600 mt-1 flex items-center">
                  <FaCalendarAlt className="mr-2 text-gray-500" />
                  {new Date(booking.start_date).toLocaleDateString()} -{" "}
                  {new Date(booking.end_date).toLocaleDateString()}
                </p>

                {/* Time */}
                <p className="text-sm text-gray-600 flex items-center">
                  <FaClock className="mr-2 text-gray-500" />
                  {new Date(booking.start_date).toLocaleTimeString()} -{" "}
                  {new Date(booking.end_date).toLocaleTimeString()}
                </p>

                {/* Booking Status */}
                <p className="mt-2 text-sm flex items-center">
                  {booking.status === "confirmed" && (
                    <span className="text-green-600 flex items-center gap-1">
                      <FaCheckCircle className="text-green-500" /> Confirmed
                    </span>
                  )}
                  {booking.status === "pending" && (
                    <span className="text-yellow-600 flex items-center gap-1">
                      <FaClock className="text-yellow-500" /> Pending
                    </span>
                  )}
                  {booking.status === "cancelled" && (
                    <span className="text-red-600 flex items-center gap-1">
                      <FaTimesCircle className="text-red-500" /> Cancelled
                    </span>
                  )}
                </p>

                {/* Action Button */}
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                  View Details
                </button>
              </div>
            ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No bookings found.</p>
        )}
      </div>
    </div>
  );
};

export default BookingsPage;
