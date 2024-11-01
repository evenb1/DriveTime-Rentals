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
                weekday: 'short', // e.g., "Tue"
                day: 'numeric',   // e.g., "15"
                month: 'short',   // e.g., "Feb"
                hour: 'numeric',  // e.g., "9" or "09"
                minute: '2-digit' // e.g., "00"
            };
            return date.toLocaleString('en-US', options);
        };

        setPickupDate(formatDate(currentDate));
        setReturnDate(formatDate(oneDayLater));
    }, []);

    return (
        <div className="flex items-center justify-between border-none bg-white shadow-xl rounded-lg px-3 py-1 max-w-4xl mx-auto">
            {/* Location Input */}
            <div className="flex flex-col items-start">
                <label className="text-gray-800 font-montserrat leading-4 font-medium mb-0">Location</label>
                <div className="flex flex-row items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 p-0 m-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search your location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="border-none rounded-lg px-4 py-1 w-full text-gray-600 focus:outline-none"
                    />
                </div>
            </div>

            <span className="w-px h-10 bg-gray-200 mx-4"></span>

            {/* Pickup Date Display */}
            <div className="flex flex-row items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
</svg>
                <div className='flex flex-col items-start'>
                <label className="text-gray-800 font-medium leading-4 ml-2 mb-0">Pickup date</label>


                <div className="border-none rounded-lg px-2 py-1 w-full  text-gray-400">
                    {pickupDate}
                </div>
                </div>
                
            </div>

            <span className="w-px h-10 bg-gray-200 mx-4"></span>

            {/* Return Date Display */}
            <div className="flex flex-row items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
</svg>
                <div className='flex flex-col items-start'>
                <label className="text-gray-800 font-medium leading-4 ml-2 mb-0">Return date</label>


<div className="border-none rounded-lg px-2 py-1 w-full text-[15px] text-gray-400 ">
                    {returnDate}
                </div>
                </div>
            </div>
            

            {/* Search Button */}
            <button
                className="ml-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
                onClick={() => console.log("Searching...")}
            >
                Search
            </button>
        </div>
    );
}
