import React from "react";

export default function Content() {
  return (
    <div className="container mt-5 mb-5">
      <h3 className="mt-5 " style={{ color: "#cf2b2b" }}>
        How LifeConnect works:
      </h3>
      <h5 className="text-muted mt-3 fs-3">Steps:</h5>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-7">
          <li>
            <h1 className="fs-5 text-muted p-3">
              Sign Up – Register as a donor or a recipient.
            </h1>
            </li>
            <li>
            <h1 className="fs-5 text-muted p-3">
              Post Availability or Requirement – Donors share their available
              blood group and location; recipients post their needs.
            </h1>
            </li>
            <li>
            <h1 className="fs-5 text-muted p-3">
              Connect & Save Lives – LifeConnect matches and connects both parties instantly through our secure system.
            </h1>
            </li>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}
