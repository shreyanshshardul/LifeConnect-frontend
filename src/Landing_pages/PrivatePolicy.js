import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./PrivatePolicy.css";

export default function PrivacyPolicy() {
  return (
    <div className="parallax-privacy">
      <div className="container mt-5 mb-5">
        <Box sx={{ width: "100%", maxWidth: 900, mx: "auto" }}>
          <Typography
            variant="h4"
            gutterBottom
            align="center"
            sx={{ color: "#cf2b2b", fontWeight: "bold" }}
          >
            Privacy Policy
          </Typography>

          <Typography variant="body1" paragraph>
            <strong>Last Updated:</strong> November 2025
          </Typography>

          <Typography variant="body1" paragraph>
            Welcome to <strong>LifeConnect</strong>. Your privacy is very important
            to us. This Privacy Policy explains how we collect, use, and protect
            your personal information when you use our platform to connect donors
            and recipients.
          </Typography>

          <Typography variant="h6" sx={{ color: "#cf2b2b", mt: 3 }}>
            1. Information We Collect
          </Typography>
          <Typography variant="body1" paragraph>
            We may collect the following types of information:
            <ul>
              <li>Personal details such as your name, email, phone number, and city</li>
              <li>Blood group, age, and availability status (for donors)</li>
              <li>Hospital and request details (for recipients)</li>
              <li>Login credentials and usage data</li>
            </ul>
          </Typography>

          <Typography variant="h6" sx={{ color: "#cf2b2b", mt: 3 }}>
            2. How We Use Your Information
          </Typography>
          <Typography variant="body1" paragraph>
            The information you provide helps us:
            <ul>
              <li>Connect donors with recipients efficiently</li>
              <li>Verify user authenticity and eligibility</li>
              <li>Improve our platform’s performance and user experience</li>
              <li>Send important updates or alerts</li>
            </ul>
          </Typography>

          <Typography variant="h6" sx={{ color: "#cf2b2b", mt: 3 }}>
            3. Data Protection
          </Typography>
          <Typography variant="body1" paragraph>
            We take all necessary precautions to safeguard your personal data.
            Your information is encrypted and securely stored. We do not sell or
            share your data with unauthorized third parties.
          </Typography>

          <Typography variant="h6" sx={{ color: "#cf2b2b", mt: 3 }}>
            4. Sharing of Information
          </Typography>
          <Typography variant="body1" paragraph>
            Your contact information is only shared with verified hospitals,
            registered recipients, or donors — and only when necessary for
            life-saving purposes.
          </Typography>

          <Typography variant="h6" sx={{ color: "#cf2b2b", mt: 3 }}>
            5. Cookies
          </Typography>
          <Typography variant="body1" paragraph>
            Our website may use cookies to enhance your experience. Cookies help
            us analyze traffic and improve site functionality.
          </Typography>

          <Typography variant="h6" sx={{ color: "#cf2b2b", mt: 3 }}>
            6. Your Rights
          </Typography>
          <Typography variant="body1" paragraph>
            You have the right to access, modify, or delete your personal data
            anytime. For assistance, contact our support team at{" "}
            <a
              href="mailto:support@lifeconnect.org"
              style={{ color: "#cf2b2b", textDecoration: "none" }}
            >
              support@lifeconnect.org
            </a>
            .
          </Typography>

          <Typography variant="h6" sx={{ color: "#cf2b2b", mt: 3 }}>
            7. Changes to This Policy
          </Typography>
          <Typography variant="body1" paragraph>
            We may update this Privacy Policy periodically. Any changes will be
            reflected here with a new “Last Updated” date.
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{ fontStyle: "italic", mt: 4, textAlign: "center" }}
          >
            “At LifeConnect, we value trust and transparency — because saving
            lives starts with keeping your data safe.”
          </Typography>
        </Box>
      </div>
    </div>
  );
}
