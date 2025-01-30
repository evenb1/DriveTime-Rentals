import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div
        className="w-12 h-12 md:w-16 md:h-16 border-4 md:border-6 border-t-transparent border-blue-500 border-opacity-75 rounded-full animate-spin-custom shadow-lg"
        aria-label="Loading..."
      ></div>
    </div>
  );
};

export default Loading;
