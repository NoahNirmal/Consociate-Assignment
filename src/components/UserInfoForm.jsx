import React, { useState } from "react";
import './UserInfoForm.css'

const UserInfoForm = ({ onUserData }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const userData = await response.json();

      console.log(userData, "userdata");
      onUserData(userData);
      setUsername("");
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserInfoForm;
