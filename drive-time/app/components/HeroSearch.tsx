import { useState, useEffect } from 'react';

export default function HeroSearch() {
    const [location, setLocation] = useState('');
    const [pickupDate, setPickupDate] = useState('');
    const [returnDate, setReturnDate] = useState('');

    useEffect(() => {
        const currentDate = new Date();
        const oneDayLater = new Date();
        oneDayLater.setDate(currentDate.getDate() + 1);

        const formatDate = (date: Date) => {
            const options: Intl.DateTimeFormatOptions = {
                weekday: 'short',
                day: 'numeric',
                month: 'short',
                hour: 'numeric',
                minute: '2-digit',
            };
            return date.toLocaleString('en-US', options);
        };

        setPickupDate(formatDate(currentDate));
        setReturnDate(formatDate(oneDayLater));
    }, []);

    return (
        <div className="flex flex-col md:flex-row items-center font-montserrat justify-between bg-white shadow-xl rounded-xl p-4 md:p-6 max-w-4xl mx-auto">
            {/* Location Input */}
            <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <div className="flex flex-col">
                    <label className="text-gray-800 font-medium leading-4">Location</label>
                    <input
                        type="text"
                        placeholder="Search your location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="rounded-lg px-2 py-1 w-full text-gray-600 focus:outline-none text-sm md:text-base"
                    />
                </div>
            </div>

            <span className="hidden md:inline-block w-px h-10 bg-gray-200 mx-4"></span>

            {/* Pickup Date Display */}
            <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
                <div className="flex flex-col">
                    <label className="text-gray-800 font-medium leading-4">Pickup date</label>
                    <div className="text-sm md:text-base text-gray-400">{pickupDate}</div>
                </div>
            </div>

            <span className="hidden md:inline-block w-px h-10 bg-gray-200 mx-4"></span>

            {/* Return Date Display */}
            <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25" />
                </svg>
                <div className="flex flex-col">
                    <label className="text-gray-800 font-medium leading-4">Return date</label>
                    <div className="text-sm md:text-base text-gray-400">{returnDate}</div>
                </div>
            </div>

            {/* Search Button */}
            <button
                className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white font-montserrat font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
                onClick={() => console.log("Searching...")}
            >
                Search
            </button>
        </div>
    );
}
