import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-lg font-bold text-gray-700 animate-pulse">
        Loading...
      </div>
    </div>
  );
};

export default LoadingSpinner;
