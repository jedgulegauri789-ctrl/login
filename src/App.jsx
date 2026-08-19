import React from "react";
import Home from "./Home";
import Login from "./Login";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          MyWebsite
        </div>

        <div className="nav-links">
          <Link to="/Home" className="nav-btn">
            Home
          </Link>

          <Link to="/Login" className="nav-btn login-btn">
            Login
          </Link>
        </div>
      </nav>

      {/* Pages */}
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </main>

    </div>
  );
};

export default App;