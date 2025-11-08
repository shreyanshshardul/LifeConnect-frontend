import React from "react";
import "./Video.css";

export default function Video() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center mt-5 mb-5">
        {/* Left Text Column */}
        <div className="col-5 d-flex justify-content-center align-items-center">
          <h3 className="text-muted fs-4 text-center px-3 mb-5 text-muted">
            “LifeConnect is a digital platform that bridges the gap between blood donors and recipients.
            Now, blood donation is simpler, faster, and more reliable — all through one connected system.”
          </h3>
        </div>

        {/* Right Video Column */}
        <div className="col-7 text-center mb-5">
          <div className="vedio">
            <video autoPlay loop muted playsInline controls>
              <source src="/Donate_vedio.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
