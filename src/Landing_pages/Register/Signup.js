import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { handleError, handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";
import "./Signup.css";

export default function Signup() {
  const navigate = useNavigate();

  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo({ ...signupInfo, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;

    if (!name || !email || !password) {
      return handleError("Please enter all the values");
    }

    try {
      const uri = "http://localhost:8080/signup";
      const response = await fetch(uri, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(signupInfo),
      });

      const result = await response.json();
      const { success, error, message } = result;

      if (success) {
        handleSuccess("Registered Successfully");
        setTimeout(() => navigate("/login"), 1000);
      } else if (error) {
        const details = error?.details?.[0]?.message;
        handleError(details || "Validation Error");
      } else {
        handleError(message || "Failed!!");
      }
    } catch (err) {
      handleError("Error while registering");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col d-flex justify-content-center mt-5 p-3">
          <Box
            sx={{
              width: { xs: "100%", sm: 400 }, // responsive width
              display: "flex",
              flexDirection: "column",
              padding: 3,
              boxShadow: "0px 0px 12px rgba(0,0,0,0.2)",
              borderRadius: 2,
            }}
          >
            <h3 className="text-center mb-3">Create Your LifeConnect Account</h3>

            <form
              onSubmit={handleSignup}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px", // ⭐ gap between input fields
              }}
            >
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={signupInfo.name}
                onChange={handleChange}
              />

              <TextField
                fullWidth
                label="Email"
                name="email"
                value={signupInfo.email}
                onChange={handleChange}
              />

              <TextField
                fullWidth
                label="Password"
                type="password"
                name="password"
                value={signupInfo.password}
                onChange={handleChange}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 1,
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
            </form>

            <ToastContainer />
          </Box>
        </div>
      </div>
    </div>
  );
}
