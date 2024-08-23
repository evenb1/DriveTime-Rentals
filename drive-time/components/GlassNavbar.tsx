import React, { useState } from 'react';
import Modal from './Modal'; // Adjust the import path as necessary

const GlassNavbar: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <nav className="flex items-center px-4 md:px-10 py-3 mx-4 md:mx-9 my-5 bg-white bg-opacity-70 rounded-lg shadow-lg backdrop-blur-md relative">
                {/* Mobile Menu Toggle Button */}
                <div className="md:hidden flex items-center">
                    <button className="text-white focus:outline-none" onClick={toggleModal}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                {/* Logo Section */}
                <div className="flex flex-grow justify-center">
                    <a href="/" className="text-white text-lg font-bold">
                        <img src="/logonew.png" className="w-32 md:w-40" alt="Logo" />
                    </a>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-5 space-x-8 flex-grow justify-center">
                    <a href="#" className="text-gray-600 hover:text-gray-400">Products</a>
                    <a href="#" className="text-gray-600 hover:text-gray-400">History</a>
                    <a href="#" className="text-gray-600 hover:text-gray-400">Contact</a>
                </div>

                {/* Sign In Button */}
                <div className="flex items-center space-x-4">
                    <button
                        className="flex items-center space-x-2 bg-gray-800 font-montserrat font-light text-sm text-white py-2 px-4 rounded-full hover:bg-black"
                        onClick={toggleModal}
                    >
                        Sign In
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 size-5">
  <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
</svg>


                    </button>
                </div>
            </nav>

            {/* Modal Component */}
            <Modal isOpen={isModalOpen} onClose={toggleModal} />
        </>
    );
};

export default GlassNavbar;
