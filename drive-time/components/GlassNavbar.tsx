"use client";

import React, { useState } from 'react';

const GlassNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex justify-between items-center px-10 py-3 mx-9 my-5 bg-white bg-opacity-70 rounded-lg shadow-lg backdrop-blur-md relative">
            {/* Middle Section: Links */}
            <div className=" items-center font-montserrat justify-center hidden md:flex gap-5 space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-400">Products</a>
                <a href="#" className="text-gray-600 hover:text-gray-400">History</a>
                <a href="#" className="text-gray-600 hover:text-gray-400">Contact</a>
        
            </div>

            {/*Left Section: Logo */ }
            <div className="xl:ml-[-160px] ">
                
            <a href="/" className="text-white text-lg  justify-center font-bold">
                    <img src="/logonew.png" width={160} height={20} alt="Logo" />
                </a>
                    </div>

            {/* Right Section: Sign in and Button */}
            <div className="flex items-center space-x-4">
                <button className="flex items-center max-sm:hidden space-x-2 bg-gray-800 font-montserrat font-light text-sm text-white py-2 px-4 rounded-full hover:bg-black">
                Sign In
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 ml-1 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
  
</button>
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
