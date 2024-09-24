import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="text-red-500 text-lg">{message}</div>
    </div>
  );
};

export default ErrorMessage;
