import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching users. Please try again.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading users...</p>;

  return (
    <div className="users">
      <h2>User List</h2>

      {/* Display error message if fetching fails */}
      {error && <p className="error-message">{error}</p>}

      {/* Show users or empty state message */}
      {users.length === 0 ? (
        <p>No users available.</p>
      ) : (
        <div className="user-grid">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;
