import { useState } from "react";
import "./App.css";
import UserInfoForm from "./components/UserInfoForm";
import UserCard from "./components/UserCard";

function App() {
  const [userData, setUserData] = useState(null);

  const handleUserData = (data) => {
    setUserData(data);
    console.log(data, "data app.js");
  };

  return (
    <div className="app">
      <h1>Github User Information</h1>
      <UserInfoForm onUserData={handleUserData} />
      {userData && <UserCard userData={userData} />}
    </div>
  );
}

export default App;
