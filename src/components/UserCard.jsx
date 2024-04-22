import React from "react";
import "./UserCard.css";

const UserInfoCard = ({ userData }) => {
  // Parsing the date string directly
  const createdDate = new Date(userData.created_at);

  // Extracting the year, month, and day parts
  const year = createdDate.getFullYear();
  const month = String(createdDate.getMonth() + 1).padStart(2, "0");
  const day = String(createdDate.getDate()).padStart(2, "0");

  // Combining the parts into the desired format
  const formattedDate = `${year}-${month}-${day}`;

  return (
    <div className="card">
      <img src={userData.avatar_url} alt="Avatar" />
      <div>
        <p>Username: {userData.login}</p>
        <p>Name: {userData.name}</p>
        <p>No. of public repos: {userData.public_repos}</p>
        <p>No. of public gists: {userData.public_gists}</p>
        <p>Profile created at: {formattedDate}</p>
      </div>
    </div>
  );
};

export default UserInfoCard;
