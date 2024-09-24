import React from "react";

const Pagination = ({ page, setPage, totalPages }) => {
  return (
    <div className="mt-10 flex justify-center items-center space-x-4">
      <button
        onClick={() => setPage(page > 1 ? page - 1 : 1)}
        className={`px-6 py-3 bg-blue-600 text-white font-bold rounded-full shadow-md hover:bg-blue-800 hover:shadow-lg transform hover:scale-105 transition duration-300 ${
          page === 1 && "opacity-50 cursor-not-allowed"
        }`}
        disabled={page === 1}
      >
        Previous
      </button>

      {/* Render page numbers */}
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => setPage(index + 1)}
          className={`px-4 py-2 rounded-full ${
            page === index + 1
              ? "bg-blue-600 text-white"
              : "bg-gray-300 text-gray-700"
          } shadow-md hover:bg-blue-500 transition`}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={() => setPage(page < totalPages ? page + 1 : totalPages)}
        className={`px-6 py-3 bg-green-500 text-white font-bold rounded-full shadow-md hover:bg-green-700 hover:shadow-lg transform hover:scale-105 transition duration-300 ${
          page === totalPages && "opacity-50 cursor-not-allowed"
        }`}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
