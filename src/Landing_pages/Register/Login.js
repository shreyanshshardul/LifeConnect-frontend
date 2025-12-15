import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { handleError, handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";
import "./Signup.css";
const BACKEND_LINK =
  process.env.REACT_APP_BACKEND_LINK || "http://localhost:8080";

export default function Login() {
  const navigate = useNavigate();

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;

    if (!email || !password) {
      return handleError("Please enter all the values");
    }

    try {
      const uri = `${BACKEND_LINK}/login`;
      const response = await fetch(uri, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(loginInfo),
      });

      const result = await response.json();
      const { success, message, token } = result;

      if (success && token) {
        // ✅ Save token for authentication
        localStorage.setItem("token", token);

        handleSuccess("Logged in Successfully");

        // ✅ Redirect to Cards page
        navigate("/cards");
      } else {
        handleError(message || "Login failed");
      }
    } catch (err) {
      handleError("Error while logging in");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col d-flex justify-content-center mt-5 p-3">
          <Box
            sx={{
              width: { xs: "100%", sm: 400 },
              display: "flex",
              flexDirection: "column",
              padding: 3,
              boxShadow: "0px 0px 12px rgba(0,0,0,0.2)",
              borderRadius: 2,
            }}
          >
            <h3 className="text-center mb-3">Welcome Back</h3>

            <form
              onSubmit={handleLogin}
              style={{ display: "flex", flexDirection: "column", gap: "18px" }}
            >
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={loginInfo.email}
                onChange={handleChange}
              />

              <TextField
                fullWidth
                label="Password"
                type="password"
                name="password"
                value={loginInfo.password}
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
                Login
              </Button>

              <p className="text-center mt-2">
                Don't have an account?{" "}
                <Link to="/signup" style={{ color: "#cf2b2b", textDecoration: "none" }}>
                  Sign Up
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
