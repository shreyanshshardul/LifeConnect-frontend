import React from "react";

export default function Content() {
  return (
    <div className="container mt-5 mb-5 animate-slide">
      <h3 style={{ color: "#cf2b2b", fontWeight: 600 }}>How LifeConnect Works:</h3>
      <h5 className="text-secondary fs-4 mt-2 mb-4">Steps:</h5>

      <div
        className="p-4"
        style={{
          borderLeft: "5px solid #cf2b2b",
          background: "rgba(255,255,255,0.8)",
          backdropFilter: "blur(4px)",
          borderRadius: "10px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        }}
      >
        <ul style={{ listStyle: "none", padding: 0 }}>
          {[
            "Sign Up – Register as a donor or a recipient.",
            "Post Availability or Requirement – Share blood group and location.",
            "Connect & Save Lives – Instant matching through our secure system.",
          ].map((text, i) => (
            <li
              key={i}
              className="hover-step"
              style={{ transition: "0.3s" }}
            >
              <h1 className="fs-5 text-muted p-2">{text}</h1>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
