import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as React from "react";

export default function Signup() {
  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col d-flex justify-content-center mt-5 p-3 bold">
          <Box
            sx={{
              width: 400,
              display: "flex",
              flexDirection: "column",
              gap: 2, // ye har field ke beech equal space dega
            }}
          >
            <h3 className="text-center mb-3">Create Your LifeConnect Account</h3>

            <TextField fullWidth label="Full Name" id="fullName" />
            <TextField fullWidth label="Email" id="email" />
            <TextField fullWidth label="Password" id="password" type="password" />

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#cf2b2b",
                "&:hover": { backgroundColor: "#b12222" },
              }}
            >
              Sign Up
            </Button>

            <p className="text-center mt-2">
              Already have an account?{" "}
              <Link to="/login" style={{ color: "#cf2b2b", textDecoration: "none" }}>
                Login
              </Link>
            </p>
          </Box>
        </div>
      </div>
    </div>
  );
}
