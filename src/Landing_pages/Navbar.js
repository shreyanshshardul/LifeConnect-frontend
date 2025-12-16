import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom py-2">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="./logo.png" style={{ width: "7%", marginLeft: "5%" }} alt="Logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex gap-4">
            <li className="nav-item">
              <Link className="nav-link active icons" to="/">Home</Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link active icons" to="/cards">Explore</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active icons" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active icons" to="/support">Support</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active icons" to="/signup">Register</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}