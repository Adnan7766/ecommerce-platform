import React, { useState } from "react";
import axios from "axios";
import "./AddUser.css";

const AddUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    axios
      .post("http://127.0.0.1:5000/users", { username, email })
      .then(() => {
        setSuccess(true);
        setLoading(false);
        setUsername("");
        setEmail("");
      })
      .catch((error) => {
        setError("Error adding user. Please try again.");
        setLoading(false);
      });
  };

  return (
    <div className="add-user">
      <h2>Add a New User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        {/* Show loading spinner when submitting */}
        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add User"}
        </button>
      </form>

      {success && <p className="success-message">User added successfully!</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default AddUser;
