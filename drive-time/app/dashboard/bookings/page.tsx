"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabase";
import BookingDetailsModal from "../../dashboard/components/BookingDetailsModal";
import {
  FaSearch,
  FaCar,
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import Image from "next/image";

// Local cars data (assuming it's imported)
import carsData from "../../../data/cars.json"; // Update path if needed

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
  const [user, setUser] = useState<any>(null); // Store user data
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null); // Selected booking for modal
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

        const { data: bookingsData, error } = await supabase
          .from("bookings")
          .select("*")
          .eq("user_id", user.id);

        if (error) throw error;

        setBookings(bookingsData || []);
      } catch (err) {
        console.error("Error fetching bookings:", err);
      } finally {
        setLoading(false);
      }
    };

    if (user) fetchBookings();
  }, [user]);

  // Get car details from local data
  const getCarDetails = (car_id: string) => {
    const car = carsData.find((c) => c.id === car_id);
    return car
      ? {
          car_name: `${car.make} ${car.model}`,
          car_image: car.images?.[0] || "/default-car.jpg",
          price: `$${car.price}/day`,
          passengers: car.cylinders,
        }
      : {
          car_name: "Unknown Car",
          car_image: "/default-car.jpg",
          price: "N/A",
          passengers: "N/A",
        };
  };

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
            .filter((b) => getCarDetails(b.car_id).car_name.toLowerCase().includes(searchQuery.toLowerCase()))
            .map((booking) => {
              const carDetails = getCarDetails(booking.car_id);
              return (
                <div key={booking.id} className="bg-white shadow-lg rounded-lg p-4 flex flex-col">
                  {/* Car Image */}
                  <Image
                    src={carDetails.car_image}
                    alt={carDetails.car_name}
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover rounded-md"
                  />

                  {/* Car Name */}
                  <h2 className="text-lg font-semibold mt-3">{carDetails.car_name}</h2>

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

                  {/* Action Button */}
                  <button
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                    onClick={() => setSelectedBooking({ ...booking, ...carDetails })}
                  >
                    View Details
                  </button>
                </div>
              );
            })
        ) : (
          <p className="text-center text-gray-500 col-span-full">No bookings found.</p>
        )}
      </div>

      {/* Booking Details Modal */}
      <BookingDetailsModal
        isOpen={!!selectedBooking}
        onClose={() => setSelectedBooking(null)}
        booking={selectedBooking}
      />
    </div>
  );
};

export default BookingsPage;
