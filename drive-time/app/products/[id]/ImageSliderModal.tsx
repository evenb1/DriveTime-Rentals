import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import Image from "next/image";

const ImageSliderModal = ({
  images,
  initialIndex,
  onClose,
}: {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Navigate to the previous image
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Navigate to the next image
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

const closeModal = () => {
  setIsImageModalOpen(false);
};


  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
      onClick={onClose} // Close when clicking on the background
    >
      {/* Prevent modal close when clicking inside */}
      <div
        className="relative w-3/4 max-w-4xl bg-white bg-opacity-90 p-4 rounded-md shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-700 hover:bg-gray-900 text-white p-2 rounded-full z-10 transition duration-300"
        >
          <FaTimes className="w-5 h-5" />
        </button>

        {/* Image Display */}
        <div className="relative flex items-center justify-center">
          {/* Left Navigation Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-900 text-white p-3 rounded-full z-10 transition duration-300"
          >
            <FaChevronLeft className="w-5 h-5 bg" />
          </button>

          {/* Current Image */}
          <div className="w-full h-96 relative">
            <Image
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              layout="fill"
              objectFit="contain"
              className="rounded-lg transition-transform duration-300"
            />
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default ImageSliderModal;
