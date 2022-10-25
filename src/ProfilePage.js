import React, { useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
import Sidebar from './Sidebar';
import { Alert } from '@mui/material';
import { useAuth } from './context/AuthContext';
import "./ProfilePage.css";
import Widgets from "./Widgets";
import Button from '@mui/material/Button';
import {GetUser} from "./firebase.js"

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

  //getUserInformation
  let user = GetUser();

  return (
    <>
    <Sidebar />
    <div className="profilePage">
      <div className="feed__header">
          <h2>Profile</h2>
      </div>
      <div className="user__header">
        {error && <Alert severity="error">{error}</Alert>}
        <h2>Email: {currentUser.email}</h2>
        <h2>First Name: {user[1]}</h2>
        <h2>Last Name: {user[2]}</h2>
        <h2>Username: {user[0]}</h2>
        <Link to="/update-profile" style={{textDecoration:'inherit'}}><Button className='button'>Update Profile</Button></Link>
        <div><Button className='button' onClick={handleLogout}>Logout</Button></div>
      </div>
    </div>
    <Widgets />
    </>
  );
}

export default ProfilePage;
