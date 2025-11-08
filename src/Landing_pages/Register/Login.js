import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as React from "react";

export default function Login() {
  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col d-flex justify-content-center mt-5 p-3">
          <Box
            sx={{
              width: 400,
              display: "flex",
              flexDirection: "column",
              gap: 2, // spacing between fields
            }}
          >
            <h3 className="text-center mb-3">Login to LifeConnect</h3>

            <TextField
              fullWidth
              label="Email or Username"
              id="emailOrUsername"
            />
            <TextField
              fullWidth
              label="Password"
              id="password"
              type="password"
            />

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#cf2b2b",
                "&:hover": { backgroundColor: "#b12222" },
              }}
            >
              Login
            </Button>

            <p className="text-center mt-2">
              Don't have an account?{" "}
              <Link
                to="/signup"
                style={{ color: "#cf2b2b", textDecoration: "none" }}
              >
                Signup
              </Link>
            </p>
          </Box>
        </div>
      </div>
    </div>
  );
}
