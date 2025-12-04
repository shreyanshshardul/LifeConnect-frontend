import React from "react";
import "./Image.css";

export default function Image() {
  return (
    <div className="image-section-container mt-5 mb-5">
      <div className="image-wrapper">
        <img src="/Hero.jpg" className="hero-image" alt="LifeConnect Hero" />
        <div className="image-overlay">
          <h2 className="overlay-title">“Every Drop Counts — Save Lives Today”</h2>
          <p className="overlay-sub">
            LifeConnect bridges donors & recipients with a seamless real-time system.
          </p>
        </div>
      </div>
    </div>
  );
}
