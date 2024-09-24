import React from "react";

const UserCard = ({ user, isGridView, openModal }) => {
  return (
    <div
      className={`bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out rounded-lg p-6 cursor-pointer ${
        isGridView
          ? "flex flex-col items-center transform hover:scale-105 hover:bg-gray-100"
          : "flex flex-row items-center space-x-4"
      }`}
      onClick={() => openModal(user)}
    >
      <img
        className={`rounded-full border-4 border-blue-300 ${
          isGridView ? "w-28 h-28 mb-4" : "w-16 h-16"
        }`}
        src={user.avatar}
        alt={`${user.first_name} ${user.last_name}`}
      />
      <div className={isGridView ? "text-center" : ""}>
        <h2 className="text-2xl font-semibold text-gray-700">
          {`${user.first_name} ${user.last_name}`}
        </h2>
        <p className="text-gray-500">{user.email}</p>
      </div>
    </div>
  );
};

export default UserCard;
