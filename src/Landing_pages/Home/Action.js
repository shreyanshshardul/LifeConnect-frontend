import React from 'react';
import "./Action.css";
import { Link, useNavigate } from "react-router-dom";

export default function Action() {
  const navigate = useNavigate();

  return (
    <div className="container mt-5 mb-5 action-box">
      <div className="row mb-5">
        <h2 className="text-center join-title">Join Now - Be a Life Saver</h2>

        <div className="col-6 mt-4 mb-5 text-center">
          <button className="button neon-btn" onClick={() => navigate("/cards/donar")}>
            🔴 Become a Donor
          </button>
        </div>

        <div className="col-6 mt-4 mb-5 text-center">
          <button className="button neon-btn" onClick={() => navigate("/cards/recipient")}>
            🩸 Request Blood
          </button>
        </div>
      </div>
    </div>
  );
}
