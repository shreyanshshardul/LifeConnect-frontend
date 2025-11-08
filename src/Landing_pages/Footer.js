import React from 'react';
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <div style={{backgroundColor:"#F2F0F0"}}>
      <div className="row border-top mt-5" >
        <h3 className="text-center mt-5 mb-3" style={{ color: "#cf2b2b" }}>
          “𝓛𝓲𝓯𝓮𝓒𝓸𝓷𝓷𝓮𝓬𝓽 — 𝓑𝓻𝓲𝓭𝓰𝓲𝓷𝓰 𝓽𝓱𝓮 𝓰𝓪𝓹 𝓫𝓮𝓽𝔀𝓮𝓮𝓷 𝓱𝓸𝓹𝓮 𝓪𝓷𝓭 𝓱𝓮𝓵𝓹.”
        </h3>
      </div>

      <div className="row">

        {/* Right side links */}
        <div className="col-12 text-center mt-5 mb-5">
          {/* Top row: navigation links */}
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-4">
            <Link to="/about" className="text-muted fs-6 text-decoration-none icons">About</Link>
            <Link to="/support" className="text-muted fs-6 text-decoration-none icons">Contact</Link>
            <Link to="/FAQs" className="text-muted fs-6 text-decoration-none icons">FAQs</Link>
            <Link to="/PrivatePolicy" className="text-muted fs-6 text-decoration-none icons">Privacy Policy</Link>
            <Link to="/Termcondition" className="text-muted fs-6 text-decoration-none icons">Terms & Conditions</Link>
            <Link to="/about" className="text-muted fs-6 text-decoration-none icons">
              <i className="fa-solid fa-earth-americas me-2"></i>Join the Movement
            </Link>
          </div>

          {/* Bottom row: social media icons */}
          <div className="d-flex justify-content-center align-items-center gap-4 mt-3">
            <Link to="/" className="text-muted fs-5 text-decoration-none icons"><i className="fa-brands fa-instagram"></i></Link>
            <Link to="/" className="text-muted fs-5 text-decoration-none icons"><i className="fa-brands fa-linkedin"></i></Link>
            <Link to="/" className="text-muted fs-5 text-decoration-none icons"><i className="fa-brands fa-whatsapp"></i></Link>
            <Link to="/" className="text-muted fs-5 text-decoration-none icons"><i className="fa-brands fa-x-twitter"></i></Link>
            <Link to="/" className="text-muted fs-5 text-decoration-none icons"><i className="fa-brands fa-youtube"></i></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
