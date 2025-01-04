import React from "react";
import "./UserCard.css";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h3>{user.username}</h3>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserCard;
