import React from "react";
import './App.css';
import Signup from "./Signup";
import Login from "./Login";
import HomePage from "./HomePage";
import ExplorePage from "./ExplorePage";
import ProfilePage from "./ProfilePage";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <Router>
            <Routes>
              <Route exact path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>}/>
              <Route path="/explore" element={<ProtectedRoute><ExplorePage /></ProtectedRoute>}/>
              <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>}/>
              <Route path="/update-profile" element={<ProtectedRoute><UpdateProfile /></ProtectedRoute>}/>
              <Route path="/signup" element={<Signup />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/forgot-password" element={<ForgotPassword />}/>
            </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
