import React from "react";
import Sidebar from './Sidebar'
import './App.css';
import HomePage from "./HomePage";
import ExplorePage from "./ExplorePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<HomePage />}/>
          <Route exact path="/explore" element={<ExplorePage />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
