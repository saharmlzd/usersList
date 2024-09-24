import React from "react";
import UserCard from "./UserCard";

const UserList = ({ users, isGridView, openModal }) => {
  return (
    <div
      className={
        isGridView
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          : "flex flex-col space-y-6"
      }
    >
      {users.length > 0 ? (
        users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            isGridView={isGridView}
            openModal={openModal}
          />
        ))
      ) : (
        <div className="text-center text-gray-700 font-bold">
          No users found.
        </div>
      )}
    </div>
  );
};

export default UserList;
