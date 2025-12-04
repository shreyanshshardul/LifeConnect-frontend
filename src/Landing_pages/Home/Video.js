import React from "react";
import "./Video.css";

export default function Video() {
  return (
    <div className="container mt-5 mb-5 video-section">
      <div className="row align-items-center mt-5 mb-5">
        
        <div className="col-5 d-flex justify-content-center align-items-center">
          <h3 className="text-muted fs-4 text-center px-3 mb-5 fade-text">
            “LifeConnect is a digital platform that bridges the gap between blood donors and recipients.
            Blood donation is now simpler, faster and safer — through one connected system.”
          </h3>
        </div>

        
        <div className="col-7 text-center mb-5">
          <div className="video-frame">
            <video autoPlay loop muted playsInline controls className="styled-video">
              <source src="/Donate_vedio.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

      </div>
    </div>
  );
}
