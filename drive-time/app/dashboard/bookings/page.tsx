// Bookings.tsx

import React from 'react';

const Bookings = () => {
  const bookings = [
    {
      id: 1,
      property: 'Cozy Apartment in Downtown',
      date: '12 Dec 2024 - 18 Dec 2024',
      status: 'Confirmed',
    },
    {
      id: 2,
      property: 'Modern Loft',
      date: '22 Jan 2025 - 28 Jan 2025',
      status: 'Pending',
    },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">My Bookings</h1>
      <ul className="space-y-4">
        {bookings.map((booking) => (
          <li key={booking.id} className="p-4 bg-gray-100 rounded flex justify-between items-center">
            <div>
              <h2 className="font-semibold">{booking.property}</h2>
              <p className="text-sm text-gray-600">{booking.date}</p>
            </div>
            <p className={`text-${booking.status === 'Confirmed' ? 'green' : 'orange'}-500`}>
              {booking.status}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bookings;
