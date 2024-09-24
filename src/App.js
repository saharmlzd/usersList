import React, { useEffect, useState } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorMessage from "./components/ErrorMessage";
import ViewToggle from "./components/ViewToggle";
import UserSearch from "./components/UserSearch";
import UserList from "./components/UserList";
import Pagination from "./components/Pagination";
import UserModal from "./components/UserModal";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isGridView, setIsGridView] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://reqres.in/api/users?page=${page}`
        );
        const data = await response.json();
        setUsers(data.data);
        setTotalPages(data.total_pages);
      } catch (error) {
        setError("Failed to fetch users.");
      }
      setLoading(false);
    };

    fetchUsers();
  }, [page]);

  const filteredUsers = users.filter(
    (user) =>
      `${user.first_name} ${user.last_name}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-purple-200 p-6">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-10">User List</h1>
      <ViewToggle isGridView={isGridView} setIsGridView={setIsGridView} />
      <UserSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <UserList
        users={filteredUsers}
        isGridView={isGridView}
        openModal={openModal}
      />
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      <UserModal
        isOpen={isModalOpen}
        user={selectedUser}
        closeModal={closeModal}
      />
    </div>
  );
}

export default App;
