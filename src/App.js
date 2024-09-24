// import React, { useEffect, useState } from "react";
// import { FaBars, FaTh } from "react-icons/fa"; // Import icons from react-icons

// function App() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1); // Total number of pages from the API
//   const [isGridView, setIsGridView] = useState(true); // State to toggle between views
//   const [searchQuery, setSearchQuery] = useState(""); // State to handle search input
//   const [selectedUser, setSelectedUser] = useState(null); // State to manage selected user
//   const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal visibility

//   // Fetch users from API
//   useEffect(() => {
//     const fetchUsers = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(
//           `https://reqres.in/api/users?page=${page}`
//         );
//         const data = await response.json();
//         setUsers(data.data);
//         setTotalPages(data.total_pages); // Store the total number of pages
//       } catch (error) {
//         setError("Failed to fetch users.");
//       }
//       setLoading(false);
//     };

//     fetchUsers();
//   }, [page]);

//   const filteredUsers = users.filter(
//     (user) =>
//       `${user.first_name} ${user.last_name}`
//         .toLowerCase()
//         .includes(searchQuery.toLowerCase()) ||
//       user.email.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const openModal = (user) => {
//     setSelectedUser(user);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedUser(null);
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <div className="text-lg font-bold text-gray-700 animate-pulse">
//           Loading...
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
//         <div className="text-red-500 text-lg">{error}</div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-200 to-purple-200 p-6">
//       <div className="flex justify-between items-center mb-10">
//         <h1 className="text-4xl font-extrabold text-gray-800">User List</h1>

//         {/* Icon buttons to toggle views */}
//         <div className="flex space-x-4">
//           <button
//             className={`p-3 rounded-full shadow-md ${
//               isGridView ? "bg-blue-600" : "bg-gray-300"
//             } text-white hover:bg-blue-800 transition`}
//             onClick={() => setIsGridView(true)}
//           >
//             <FaTh size={20} />
//           </button>
//           <button
//             className={`p-3 rounded-full shadow-md ${
//               !isGridView ? "bg-blue-600" : "bg-gray-300"
//             } text-white hover:bg-blue-800 transition`}
//             onClick={() => setIsGridView(false)}
//           >
//             <FaBars size={20} />
//           </button>
//         </div>
//       </div>

//       {/* Search Bar */}
//       <div className="flex justify-center mb-6">
//         <input
//           type="text"
//           placeholder="Search by name or email"
//           className="p-3 rounded-md w-full md:w-1/2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>

//       {/* Toggle between grid view and list view */}
//       <div
//         className={
//           isGridView
//             ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//             : "flex flex-col space-y-6"
//         }
//       >
//         {filteredUsers.length > 0 ? (
//           filteredUsers.map((user) => (
//             <div
//               key={user.id}
//               className={`bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out rounded-lg p-6 cursor-pointer ${
//                 isGridView
//                   ? "flex flex-col items-center transform hover:scale-105 hover:bg-gray-100"
//                   : "flex flex-row items-center space-x-4"
//               }`}
//               onClick={() => openModal(user)} // Open modal on click
//             >
//               <img
//                 className={`rounded-full border-4 border-blue-300 ${
//                   isGridView ? "w-28 h-28 mb-4" : "w-16 h-16"
//                 }`}
//                 src={user.avatar}
//                 alt={`${user.first_name} ${user.last_name}`}
//               />
//               <div className={isGridView ? "text-center" : ""}>
//                 <h2 className="text-2xl font-semibold text-gray-700">
//                   {`${user.first_name} ${user.last_name}`}
//                 </h2>
//                 <p className="text-gray-500">{user.email}</p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="text-center text-gray-700 font-bold">
//             No users found.
//           </div>
//         )}
//       </div>

//       {/* Pagination Buttons */}
//       <div className="mt-10 flex justify-center items-center space-x-4">
//         <button
//           onClick={() => setPage(page > 1 ? page - 1 : 1)}
//           className={`px-6 py-3 bg-blue-600 text-white font-bold rounded-full shadow-md hover:bg-blue-800 hover:shadow-lg transform hover:scale-105 transition duration-300 ${
//             page === 1 && "opacity-50 cursor-not-allowed"
//           }`}
//           disabled={page === 1}
//         >
//           Previous
//         </button>

//         {/* Render page numbers */}
//         {[...Array(totalPages)].map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setPage(index + 1)}
//             className={`px-4 py-2 rounded-full ${
//               page === index + 1
//                 ? "bg-blue-600 text-white"
//                 : "bg-gray-300 text-gray-700"
//             } shadow-md hover:bg-blue-500 transition`}
//           >
//             {index + 1}
//           </button>
//         ))}

//         <button
//           onClick={() => setPage(page < totalPages ? page + 1 : totalPages)}
//           className={`px-6 py-3 bg-green-500 text-white font-bold rounded-full shadow-md hover:bg-green-700 hover:shadow-lg transform hover:scale-105 transition duration-300 ${
//             page === totalPages && "opacity-50 cursor-not-allowed"
//           }`}
//           disabled={page === totalPages}
//         >
//           Next
//         </button>
//       </div>

//       {/* Modal for user details */}
//       {isModalOpen && selectedUser && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white rounded-lg shadow-lg p-8 w-96">
//             <h2 className="text-2xl font-bold text-gray-800 mb-4">
//               {`${selectedUser.first_name} ${selectedUser.last_name}`}
//             </h2>
//             <img
//               className="w-24 h-24 rounded-full mx-auto mb-4"
//               src={selectedUser.avatar}
//               alt={`${selectedUser.first_name} ${selectedUser.last_name}`}
//             />
//             <p className="text-gray-600 mb-4">Email: {selectedUser.email}</p>
//             <div className="text-center">
//               <button
//                 onClick={closeModal}
//                 className="px-6 py-3 bg-red-500 text-white font-bold rounded-full shadow-md hover:bg-red-700 transition"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

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
