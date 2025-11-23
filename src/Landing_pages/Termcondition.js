import React from "react";
import { Container, Typography, Box, Divider } from "@mui/material";
import "./Termcondition.css"; // ✅ Import CSS for parallax background

export default function TermsAndConditions() {
  return (
    <div className="parallax-terms">  {/* ✅ Added parallax wrapper */}
      <Container maxWidth="md" sx={{ mt: 8, mb: 8, backgroundColor: "rgba(255, 255, 255, 0.85)", borderRadius: 3, p: 4 }}>
        <Typography variant="h3" gutterBottom align="center" sx={{ fontWeight: "bold", color: "#cf2b2b" }}>
          Terms & Conditions
        </Typography>

        <Divider sx={{ mb: 4 }} />

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom>
            1. Introduction
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Welcome to <strong>LifeConnect</strong>. By accessing or using our platform, you agree to comply with and be
            bound by these Terms & Conditions. Please read them carefully before using our services.
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom>
            2. Purpose of the Platform
          </Typography>
          <Typography variant="body1" color="text.secondary">
            LifeConnect is designed to connect blood donors and recipients, making it easier to save lives. The platform
            does not sell or distribute blood and acts solely as a medium for connection and communication.
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom>
            3. User Responsibilities
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Users are responsible for providing accurate information while registering and posting blood availability or
            requests. Any misuse of the platform or false information may lead to permanent suspension of the account.
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom>
            4. Data Privacy
          </Typography>
          <Typography variant="body1" color="text.secondary">
            We respect your privacy and handle your data in accordance with our{" "}
            <strong>Privacy Policy</strong>. Personal details are shared only with verified users for genuine
            blood-related needs.
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom>
            5. Limitation of Liability
          </Typography>
          <Typography variant="body1" color="text.secondary">
            LifeConnect shall not be held liable for any medical complications, disputes, or misuse of information shared
            on the platform. Users must verify donors or recipients before proceeding with any arrangements.
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom>
            6. Modification of Terms
          </Typography>
          <Typography variant="body1" color="text.secondary">
            LifeConnect reserves the right to modify or update these Terms at any time. Continued use of the platform
            implies acceptance of the revised Terms & Conditions.
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="body2" align="center" color="text.secondary">
            Last updated on: November 6, 2025
          </Typography>
        </Box>
      </Container>
    </div>
  );
}
