import React from "react";
import OutgoingMailIcon from "@mui/icons-material/OutgoingMail";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SmsIcon from "@mui/icons-material/Sms";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero-bg">

      <div className="container hero-container">

        {/* MAIN HEADER TEXT */}
        <div className="row text-center p-4 hero-fade">
          <h1 className="fs-2 fw-bold hero-title">
            Saving lives isn’t just an act — it’s a shared responsibility.
          </h1>

          <p className="mt-3 fs-6 hero-sub">
            LifeConnect ensures seamless, real-time assistance for donors and
            recipients — making blood support faster, smarter and reliable.
          </p>
        </div>

        {/* FEATURE + HELP CARDS */}
        <div className="row mt-4 d-flex align-items-center">

          {/* LEFT CARD */}
          <div className="col-lg-4 col-md-6 p-4">
            <div className="hero-card hero-slide">

              <h4 className="fw-bold mb-4 hero-heading">Support Features</h4>

              <div className="d-flex align-items-center mt-3">
                <AccessTimeIcon className="hero-icon" />
                <span className="ms-3">24×7 availability tracking</span>
              </div>

              <div className="d-flex align-items-center mt-3">
                <LocationOnIcon className="hero-icon" />
                <span className="ms-3">Smart location-based matching</span>
              </div>

              <div className="d-flex align-items-center mt-3">
                <SmsIcon className="hero-icon" />
                <span className="ms-3">Instant emergency alerts</span>
              </div>

              <div className="d-flex align-items-center mt-3">
                <PhoneInTalkIcon className="hero-icon" />
                <span className="ms-3">Immediate support assistance</span>
              </div>

            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="col-lg-8 col-md-6 p-4 mt-4 mt-md-0">
            <div className="hero-card text-center hero-slide">

              <SupportAgentIcon className="hero-big-icon" />

              <h4 className="mt-3 fw-bold hero-heading">Need Help?</h4>

              <p className="mt-2 text-dark">
                Contact our support team anytime — we’re always ready.
              </p>

              <a href="mailto:lifeconnect817@gmail.com" className="hero-mail">
                <OutgoingMailIcon style={{ fontSize: "40px" }} />
              </a>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
