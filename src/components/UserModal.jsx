import React from "react";

const UserModal = ({ isOpen, user, closeModal }) => {
  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {`${user.first_name} ${user.last_name}`}
        </h2>
        <img
          className="w-24 h-24 rounded-full mx-auto mb-4"
          src={user.avatar}
          alt={`${user.first_name} ${user.last_name}`}
        />
        <p className="text-gray-600 mb-4">Email: {user.email}</p>
        <div className="text-center">
          <button
            onClick={closeModal}
            className="px-6 py-3 bg-red-500 text-white font-bold rounded-full shadow-md hover:bg-red-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
