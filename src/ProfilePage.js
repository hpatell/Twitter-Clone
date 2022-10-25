import React, { useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
import Sidebar from './Sidebar';
import { Alert } from '@mui/material';
import { useAuth } from './context/AuthContext';
import "./ProfilePage.css";
import Widgets from "./Widgets";

function ProfilePage() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");
    try {
        await logout();
        navigate("/login");
    } catch (error) {
        setError(error.message);
    }
  }

  return (
    <>
    <Sidebar />
    <div className="profilePage">
      <div className="feed__header">
          <h2>Profile</h2>
      </div>
      <div className="email__header">
        {error && <Alert severity="error">{error}</Alert>}
        <h2>Email: {currentUser.email}</h2>
        <Link to="/update-profile">Update Profile</Link>
        <div><button onClick={handleLogout}>Logout</button></div>
      </div>
    </div>
    <Widgets />
    </>
  );
}

export default ProfilePage;
