import React from "react";
import { Link } from "react-router-dom";

export default function Choose() {
  return (
    <div className="container mt-5 mb-5 animate-fade">
      <h1 className="text-center" style={{ color: "#cf2b2b", fontWeight: 700 }}>
        🩸 Why Choose LifeConnect
      </h1>

      <div className="row mt-5 g-4">
        {/* Feature List */}
        <div
          className="col-md-6 p-4 text-center hover-card"
          style={{
            background: "white",
            borderRadius: "20px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
            transition: "0.4s",
          }}
        >
          <h2 className="fs-4 mb-3">Features</h2>
          <hr />
          <p className="fs-6 text-muted mt-3 hover-text">🔍 Smart Matching System</p>
          <p className="fs-6 text-muted mt-3 hover-text">🧠 Verified Users</p>
          <p className="fs-6 text-muted mt-3 hover-text">📱 User-Friendly Interface</p>
          <p className="fs-6 text-muted mt-3 hover-text">❤️ Life-Saving Impact</p>
        </div>

        {/* Description List */}
        <div
          className="col-md-6 p-4 text-center hover-card"
          style={{
            background: "white",
            borderRadius: "20px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
            transition: "0.4s",
          }}
        >
          <h2 className="fs-4 mb-3">Description</h2>
          <hr />
          <p className="fs-6 text-muted mt-3 hover-text">
            Matches donors & recipients by blood group & location.
          </p>
          <p className="fs-6 text-muted mt-3 hover-text">
            Manually verified profiles for safety.
          </p>
          <p className="fs-6 text-muted mt-3 hover-text">
            Simple & quick interface for users.
          </p>
          <p className="fs-6 text-muted mt-3 hover-text">
            Every match can save a life — become a hero.
          </p>
        </div>
      </div>

      {/* Join Section */}
      <div className="text-center mt-5 p-5">
        <h1 className="fs-1" style={{ color: "#cf2b2b" }}>
          █▓▒▒░░░🌍 Join the Movement ░░░▒▒▓█
        </h1>

        <h2 className="fs-3 mt-3">“Every drop counts. Be a hero today.”</h2>

        <p className="fs-5 mt-4 text-muted">
          Thousands struggle every year due to unavailable blood. Be part of a
          life-saving network with LifeConnect.
        </p>

        <Link
          to="/cards/donar"
          className="fs-3 mt-4 d-inline-block p-3 px-5 hover-btn"
          style={{
            textDecoration: "none",
            background: "#cf2b2b",
            color: "white",
            borderRadius: "10px",
            transition: "0.3s",
          }}
        >
          🩸 Join as a Donor
        </Link>
      </div>
    </div>
  );
}
