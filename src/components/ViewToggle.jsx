import React from "react";
import { FaBars, FaTh } from "react-icons/fa";

const ViewToggle = ({ isGridView, setIsGridView }) => {
  return (
    <div className="flex justify-between items-center mb-10">
      <div className="flex space-x-4">
        <button
          className={`p-3 rounded-full shadow-md ${
            isGridView ? "bg-blue-600" : "bg-gray-300"
          } text-white hover:bg-blue-800 transition`}
          onClick={() => setIsGridView(true)}
        >
          <FaTh size={20} />
        </button>
        <button
          className={`p-3 rounded-full shadow-md ${
            !isGridView ? "bg-blue-600" : "bg-gray-300"
          } text-white hover:bg-blue-800 transition`}
          onClick={() => setIsGridView(false)}
        >
          <FaBars size={20} />
        </button>
      </div>
    </div>
  );
};

export default ViewToggle;
