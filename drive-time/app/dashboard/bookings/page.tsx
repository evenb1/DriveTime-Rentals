"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabase";
import BookingDetailsModal from "../../dashboard/components/BookingDetailsModal";
import {
  FaSearch,
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import Image from "next/image";
import carsData from "../../../data/cars.json"; // Import local cars.json file

type Booking = {
  id: string;
  user_id: string;
  car_id: string;
  start_date: string;
  end_date: string;
  status: string;
  car_name?: string;
  car_image?: string;
  price?: number;
  passengers?: number;
};

const BookingsPage = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Search input
  const [bookings, setBookings] = useState<Booking[]>([]); // List of bookings
  const [loading, setLoading] = useState(true); // Loading state
  const [user, setUser] = useState<any>(null); // Store user data
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null); // Selected booking for modal
  const router = useRouter();

  // Fetch authenticated user from Supabase
  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error || !data?.user) {
        console.error("Error fetching user:", error);
        router.push("/"); // Redirect if not authenticated
        return;
      }
      setUser(data.user);
    };
    getUser();
  }, [router]);

  // Fetch bookings and match car details
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setLoading(true);
        if (!user) return;

        const { data: bookingsData, error } = await supabase
          .from("bookings")
          .select("*")
          .eq("user_id", user.id);

        if (error) throw error;

        // Match bookings with car details from cars.json
        const enhancedBookings = bookingsData.map((b) => {
          const car = carsData.find((c) => c.id === b.car_id);
          return {
            ...b,
            car_name: car ? `${car.make} ${car.model}` : "Unknown Car",
            car_image: car?.images?.[0] || "/default-car.jpg",
            price: car?.price || 0,
            passengers: car?.cylinders || "N/A",
          };
        });

        setBookings(enhancedBookings);
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
    <div className="max-w-6xl mx-auto flex-1 min-h-screen  p-6">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Bookings</h1>

 
      {/* Bookings List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings.length > 0 ? (
          bookings
            .filter((b) => b.car_name?.toLowerCase().includes(searchQuery.toLowerCase()))
            .map((booking) => (
              <div key={booking.id} className="bg-white shadow-lg rounded-lg p-4 flex flex-col">
                {/* Car Image */}
                <Image
                  src={booking.car_image!}
                  alt={booking.car_name!}
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

                {/* Booking Status */}
                <p className="mt-2 text-sm flex items-center">
                  {booking.status === "confirmed" ? (
                    <span className="text-green-600 flex items-center gap-1">
                      <FaCheckCircle className="text-green-500" /> Confirmed
                    </span>
                  ) : booking.status === "pending" ? (
                    <span className="text-yellow-600 flex items-center gap-1">
                      <FaClock className="text-yellow-500" /> Pending
                    </span>
                  ) : (
                    <span className="text-red-600 flex items-center gap-1">
                      <FaTimesCircle className="text-red-500" /> Cancelled
                    </span>
                  )}
                </p>

                {/* View Details Button */}
                <button
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                  onClick={() => setSelectedBooking(booking)}
                >
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
