import React from "react";
import {Link} from "react-router-dom"

export default function Choose() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row mb-5">
        <h1 className="text-center mt-5" style={{ color: "#cf2b2b" }}>
          🩸 Why Choose LifeConnect
        </h1>
      </div>
      <div className="row mt-5 mb-5">
        <div className="col mt-5 mb-5">
          <h1 className="fs-5 text-center">Feature</h1>
          <hr />
          <h1 className="fs-6 text-muted text-center mt-4">
            🔍 Smart Matching System
          </h1>
          <h1 className="fs-6 text-muted text-center mt-4">
            🧠 Verified Users
          </h1>
          <h1 className="fs-6 text-muted text-center mt-4">
            📱 User-Friendly Interface
          </h1>
          <h1 className="fs-6 text-muted text-center mt-4">
            ❤️ Life-Saving Impact
          </h1>
        </div>
        <div className="col mt-5 mb-5">
          <h1 className="fs-5 text-center">Description</h1>
          <hr />
          <h1 className="fs-6 text-muted text-center mt-4">
            Matches donors and recipients based on blood group and location.
          </h1>
          <h1 className="fs-6 text-muted text-center mt-4">
            Every donor and recipient profile is manually verified for safety.
          </h1>
          <h1 className="fs-6 text-muted text-center mt-4">
            Simple and intuitive design for quick access.
          </h1>
          <h1 className="fs-6 text-muted text-center mt-4">
            Every connection on LifeConnect can help save someone’s life.
          </h1>
        </div>
      </div>

      <div className="row mt-5 mb-5">
        <h1 className="fs-1 mt-5 text-center" style={{ color: "#cf2b2b" }}>
          {" "}
          █▓▒▒░░░🌍 Join the Movement░░░▒▒▓█
        </h1>
        <h2 className="fs-3 mt-3 text-center mb-5">
          “ᴇᴠᴇʀʏ ᴅʀᴏᴘ ᴄᴏᴜɴᴛꜱ. ʙᴇ ᴀ ʜᴇʀᴏ ᴛᴏᴅᴀʏ.”
        </h2>
        <h1 className="fs-5 mt-2 text-center mb-5 p-5">
          “Thousands of people struggle every year due to the unavailability of
          timely blood. With LifeConnect, you can become part of a network that
          saves lives — one donation at a time.”
        </h1>

        <Link to="/" className="text-center fs-3" style={{textDecoration:"none"}}>🩸 “Join as a Donor Now”</Link>
      </div>
    </div>
  );
}
