import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleSuccess } from "../utils";
import "../Navbar.css";

export default function Navbar({ setSearch }) {
  const navigate = useNavigate();
  const [tempSearch, setTempSearch] = useState("");

  const handleSearch = () => {
    if (!setSearch) {
      console.error("❌ setSearch NOT RECEIVED FROM PARENT");
      return;
    }
    setSearch(tempSearch); // App.js me search update karega
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(); // Enter press pe search trigger
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInuser");
    handleSuccess("Logged out Successfully");
    setTimeout(() => navigate("/"), 1000);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-4">
      <div className="container-fluid d-flex justify-content-center">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-3">
              <Link className="nav-link active icons" to="/">Home</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link icons" to="/about">About</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="btn btn-danger px-3 py-1" to="/cards/donar">Become Donor</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="btn btn-success px-3 py-1" to="/cards/recipient">Become Recipient</Link>
            </li>
            <li className="nav-item mx-3">
              <button onClick={handleLogout} className="btn btn-danger px-3 py-1">Logout</button>
            </li>
          </ul>

          {/* SEARCH INPUT */}
          <div className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Donor / Recipient"
              value={tempSearch}
              onChange={(e) => {
                setTempSearch(e.target.value);
                setSearch(e.target.value); // real-time filter
              }}
              onKeyDown={handleKeyPress} // Enter key
              style={{ width: "250px" }}
            />
            <button className="btn btn-outline-success" onClick={handleSearch}>Search</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
