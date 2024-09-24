import React from "react";

const UserSearch = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="Search by name or email"
        className="p-3 rounded-md w-full md:w-1/2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default UserSearch;
