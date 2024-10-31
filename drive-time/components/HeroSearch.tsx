import { useState } from 'react';

const HeroSearch = () => {
  const [location, setLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  return (
    <div className='flex items-center justify-between bg-white shadow-lg rounded-lg p-4 max-w-4xl mx-auto'>
        <div className="flex flex-col items-start">
                <label className="text-gray-800 font-medium mb-1">Location</label>
                <input
                    type="text"
                    placeholder="Search your location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full text-gray-600 focus:outline-none focus:border-blue-500"
                />
            </div>
            <span className="w-px h-10 bg-gray-200 mx-4"></span>

    </div>
  )
}

export default HeroSearch