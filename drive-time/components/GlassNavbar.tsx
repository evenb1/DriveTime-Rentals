import React from 'react';

const GlassNavbar = () => {
    return (
        <nav className="flex justify-between items-center p-6 bg-black bg-opacity-40 rounded-lg shadow-lg backdrop-blur-md">
            <div className="flex items-center space-x-8">
                <a href="#" className="text-white text-lg font-bold">logo.</a>
                <a href="#" className="text-white hover:text-gray-300">Products</a>
                <a href="#" className="text-white hover:text-gray-300">History</a>
                <a href="#" className="text-white hover:text-gray-300">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
                <a href="#" className="text-white hover:text-gray-300">Sign in</a>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">Try free</button>
            </div>
        </nav>
    );
};

export default GlassNavbar;
