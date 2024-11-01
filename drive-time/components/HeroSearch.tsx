import { useState } from 'react';

const HeroSearch = () => {
  const [location, setLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  return (
    <div className='flex items-center justify-between bg-white shadow-lg rounded-lg px-3 py-1 max-w-4xl mx-auto'>
        <div className="flex flex-col items-center">
        

                <label className="text-gray-800 font-montserrat mb-0">Location</label>
                <div className='flex flex-row items-start'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
                <input
                    type="text"
                    placeholder="Search your location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="border border-none rounded-lg px-4 py-2 w-full text-gray-600 focus:outline-none focus:border-blue-500"
                />
                </div>
                
            </div>
            <span className="w-px h-10 bg-gray-200 mx-4"></span>
            <div className="flex flex-col items-start">
            <label className="text-gray-800 font-medium mb-1">Pickup date</label>
                <input
                    type="datetime-local"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full text-gray-600 focus:outline-none focus:border-blue-500"
                />
            </div>
            <span className="w-px h-10 bg-gray-200 mx-4"></span>
            <div className="flex flex-col items-start">
                <label className="text-gray-800 font-medium mb-1">Return date</label>
                <input
                    type="datetime-local"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full text-gray-600 focus:outline-none focus:border-blue-500"
                />
            </div>
            <button
                className="ml-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
                onClick={() => console.log("Searching...")}
            >
                Search
            </button>
    </div>
  )
}

export default HeroSearch