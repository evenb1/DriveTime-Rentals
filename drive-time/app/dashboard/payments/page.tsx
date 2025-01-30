"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { FaCalendarAlt, FaCar, FaCheckCircle, FaPlus } from "react-icons/fa";
import Image from "next/image";
import carsData from "@/data/cars.json"; // Local JSON data

type Booking = {
  id: string;
  car_id: string;
  start_date: string;
  end_date: string;
};

const PaymentsPage = () => {
  const [pendingPayments, setPendingPayments] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [markedPaid, setMarkedPaid] = useState<string | null>(null);
  const [cardDetails, setCardDetails] = useState({
    cardholder: "",
    cardNumber: "",
    expiration: "",
    cvv: "",
  });

  // Fetch pending bookings
  useEffect(() => {
    const fetchPendingPayments = async () => {
      setLoading(true);
      try {
        const { data: userSession } = await supabase.auth.getUser();
        if (!userSession?.user) return;

        const { data: bookings, error } = await supabase
          .from("bookings")
          .select("id, car_id, start_date, end_date")
          .eq("user_id", userSession.user.id)
          .eq("status", "pending");

        if (error) throw error;

        setPendingPayments(bookings || []);
      } catch (err) {
        console.error("Error fetching pending payments:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPendingPayments();
  }, []);

  // Get car details from local JSON data
  const getCarDetails = (car_id: string) => {
    const car = carsData.find((c) => c.id === car_id);
    return car
      ? {
          car_name: `${car.make} ${car.model}`,
          car_image: car.images[0] || "/default-car.jpg",
          price: car.price,
        }
      : {
          car_name: "Unknown Car",
          car_image: "/default-car.jpg",
          price: 0,
        };
  };

  // Calculate total price based on days
  const calculateTotalPrice = (startDate: string, endDate: string, pricePerDay: number) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = Math.max(1, Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))); // Ensure at least 1 day
    return days * pricePerDay;
  };

  // Mark Payment as Paid (Manual)
  const markAsPaid = async (booking_id: string) => {
    try {
      const { error } = await supabase
        .from("bookings")
        .update({ status: "paid" })
        .eq("id", booking_id);

      if (error) throw error;
      setMarkedPaid(booking_id);
    } catch (err) {
      console.error("Error updating booking status:", err);
    }
  };

  return (
    <div className="max-w-5xl p-6 md:p-10 mx-auto">
      {/* Page Title */}
      <h1 className="text-3xl font-extrabold text-gray-800 mb-8">Payments</h1>
      <hr className="my-4 border-t border-gray-300" />

      {/* Pending Payments Section */}
      <div className="bg-white p-6 shadow-md rounded-lg mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Pending Payments</h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading pending payments...</p>
        ) : pendingPayments.length > 0 ? (
          pendingPayments.map((payment) => {
            const carDetails = getCarDetails(payment.car_id);
            const totalPrice = calculateTotalPrice(payment.start_date, payment.end_date, carDetails.price);
            return (
              <div
                key={payment.id}
                className="flex flex-col md:flex-row items-center justify-between border-b pb-4 mb-4"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={carDetails.car_image}
                    alt={carDetails.car_name}
                    width={80}
                    height={50}
                    className="rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-gray-800 font-semibold">{carDetails.car_name}</h3>
                    <p className="text-sm text-gray-500 flex items-center">
                      <FaCalendarAlt className="mr-2" />
                      {new Date(payment.start_date).toLocaleDateString()} -{" "}
                      {new Date(payment.end_date).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 font-semibold">${totalPrice.toFixed(2)}</p>

                {markedPaid === payment.id ? (
                  <span className="text-green-600 flex items-center gap-2">
                    <FaCheckCircle className="text-green-500" /> Paid
                  </span>
                ) : (
                  <button
                    className="mt-2 md:mt-0 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
                    onClick={() => markAsPaid(payment.id)}
                  >
                    Mark as Paid
                  </button>
                )}
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500">No pending payments.</p>
        )}
      </div>

      {/* Payment Card Inputs (No Stripe Yet) */}
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Add Payment Method</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-600 font-medium mb-2">Cardholder Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={cardDetails.cardholder}
              onChange={(e) => setCardDetails({ ...cardDetails, cardholder: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-2">Card Number</label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={cardDetails.cardNumber}
              onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-2">Expiration Date</label>
            <input
              type="text"
              placeholder="MM/YY"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={cardDetails.expiration}
              onChange={(e) => setCardDetails({ ...cardDetails, expiration: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-2">CVV</label>
            <input
              type="text"
              placeholder="123"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={cardDetails.cvv}
              onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
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
