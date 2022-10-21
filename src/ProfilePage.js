import React, { useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
import Sidebar from './Sidebar';
import { Alert } from '@mui/material';
import { useAuth } from './context/AuthContext';

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
    <div>
      <h1>Profile Page</h1>
      {error && <Alert severity="error">{error}</Alert>}
      <p>Email: {currentUser.email}</p>
      <Link to="/update-profile">Update Profile</Link>
      <div><button onClick={handleLogout}>Logout</button></div>
    </div>
    </>
  );
}

export default ProfilePage;
