"use client";

import React, { useState } from 'react';

const GlassNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex justify-between items-center px-10 py-3 mx-9 my-5 bg-white bg-opacity-75 rounded-lg shadow-lg backdrop-blur-md relative">
            {/* Left Section: Logo */}
            <div className=" hidden md:flex gap-5 space-x-8">
            <a href="#" className="text-black hover:text-gray-400">Products</a>
                <a href="#" className="text-black hover:text-gray-400">History</a>
                <a href="#" className="text-black hover:text-gray-400">Contact</a>
            </div>

            {/* Middle Section: Links */}
            <div className=" items-center justify-center ">
                
                <a href="/" className="text-white text-lg justify-center font-bold">
                    <img src="/logonew.png" width={180} height={120} alt="Logo" />
                </a>
            </div>

            {/* Right Section: Sign in and Button */}
            <div className="flex items-center space-x-4">
                <a href="#" className="text-black hover:text-gray-400 hidden md:block">Sign in</a>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">Try free</button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden flex items-center">
                <button className="text-white focus:outline-none" onClick={toggleMenu}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 p-6 flex flex-col space-y-4 md:hidden">
                    <a href="#" className="text-white hover:text-gray-300">Products</a>
                    <a href="#" className="text-white hover:text-gray-300">History</a>
                    <a href="#" className="text-white hover:text-gray-300">Contact</a>
                    <a href="#" className="text-white hover:text-gray-300">Sign in</a>
                </div>
            )}
        </nav>
    );
};

export default GlassNavbar;
