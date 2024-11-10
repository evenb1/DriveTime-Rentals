import React, { useState } from 'react';
import Modal from './Modal'; // Adjust the import path as necessary
import Link from 'next/link';
const GlassNavbar: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="flex items-center justify-between max-sm:rounded-none px-4 md:px-10 py-3 mx-4 md:mx-9 my-5 bg-white bg-opacity-90 backdrop-blur-md  shadow-xl relative">
                {/* Left Section (Navigation Links for larger devices) */}
                <div className="hidden md:flex flex-1 justify-start gap-5 space-x-8">
                    <a href="#" className="text-gray-600 hover:text-gray-400">Fleet</a>
                    <a href="#" className="text-gray-600 hover:text-gray-400">History</a>
                    <a href="#" className="text-gray-600 hover:text-gray-400">Contact</a>
                    <Link href="/dashboard"> Dashboard</Link>
                </div>

                {/* Logo Section */}
                <div className="flex-shrink-0 flex-1 md:flex justify-center">
                    <a href="/" className="text-white text-lg font-bold">
                        <img src="/logonew.png" className="w-32 md:w-40" alt="Logo" />
                    </a>
                </div>

                {/* Right Section (Sign In Button for larger devices) */}
                <div className="hidden md:flex flex-1 items-center justify-end space-x-4">
                    <button
                        className="flex items-center space-x-2 bg-none font-montserrat font-light text-sm text-charcoal py-2 px-4 rounded-full hover:bg-black hover:text-white"
                        onClick={toggleModal}
                    >
                        Sign In
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 size-5">
                            <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu Toggle Button */}
                <div className="md:hidden flex items-center">
                    <button className="text-gray-600 focus:outline-none" onClick={toggleMenu}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu (visible on small devices) */}
                {isMenuOpen && (
                    <div className="absolute top-12 left-0 w-full bg-charcoal bg-opacity-100 backdrop-blur-md shadow-lg md:hidden">
                        <div className="flex flex-col items-start px-4 py-2 space-y-2">
                            <a href="#" className="text-gray-200 hover:text-gray-400 w-full text-left">Fleet</a>
                            <a href="#" className="text-gray-200 hover:text-gray-400 w-full text-left">History</a>
                            <a href="#" className="text-gray-200 hover:text-gray-400 w-full text-left">Contact</a>
                            <a href="#" onClick={toggleModal} className="text-gray-200 hover:text-gray-400 w-full text-left">Sign In</a>
                        </div>
                    </div>
                )}
            </nav>

            {/* Modal Component */}
            <Modal isOpen={isModalOpen} onClose={toggleModal} />
        </>
    );
};

export default GlassNavbar;
