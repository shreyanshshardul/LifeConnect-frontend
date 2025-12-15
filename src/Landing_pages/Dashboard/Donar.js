import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import "./Donar.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleSuccess, handleError } from "../utils";
const BACKEND_LINK =
  process.env.REACT_APP_BACKEND_LINK || "http://localhost:8080";

export default function Donar() {
  const navigate = useNavigate();

  const [donarInfo, setDonarInfo] = useState({
    name: "",
    email: "",
    blood_group: "",
    age: "",
    city: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setDonarInfo({ ...donarInfo, [name]: value });
  }

  const handleDonarSubmit = async (e) => {
    e.preventDefault();

    const { name, email, blood_group, age, city } = donarInfo;

    if (!name || !email || !blood_group || !age || !city) {
      return handleError("Please fill all fields");
    }

    try {
      const res = await fetch(`${BACKEND_LINK}/cards/donar`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(donarInfo),
      });

      const result = await res.json();
      const { success, message, error } = result;

      if (success) {
        handleSuccess("Donor Registered Successfully!");
        setTimeout(() => navigate("/cards"), 1200);
      } else if (error) {
        const errMsg = error?.details?.[0]?.message || "Validation Error";
        handleError(errMsg);
      } else {
        handleError(message || "Registration Failed");
      }
    } catch (err) {
      handleError("Error while registering donor");
    }
  };

  return (
    <div className="parallax-bg">
      <form onSubmit={handleDonarSubmit}>
        <Paper
          elevation={6}
          className="p-4"
          style={{
            width: "450px",
            borderRadius: "16px",
            background: "rgba(255,255,255,0.85)",
          }}
        >
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            style={{ fontWeight: "bold" }}
          >
            Become a Donor
          </Typography>

          <Typography
            variant="body2"
            align="center"
            color="text.secondary"
            className="mb-3"
          >
            Fill the details below to register as a donor
          </Typography>

          <Box
            component="div"
            sx={{ "& > :not(style)": { m: 1, width: "37ch" } }}
            noValidate
            autoComplete="off"
            className="d-flex flex-column align-items-center"
          >
            <TextField
              variant="standard"
              label="Full Name"
              name="name"
              onChange={handleChange}
              value={donarInfo.name}
            />

            <TextField
              variant="standard"
              label="Email"
              name="email"
              onChange={handleChange}
              value={donarInfo.email}
            />

            <TextField
              variant="standard"
              label="Blood Group"
              name="blood_group"
              onChange={handleChange}
              value={donarInfo.blood_group}
            />

            <TextField
              variant="standard"
              label="Age"
              type="number"
              name="age"
              onChange={handleChange}
              value={donarInfo.age}
            />

            <TextField
              variant="standard"
              label="City"
              name="city"
              onChange={handleChange}
              value={donarInfo.city}
            />
          </Box>

          <Stack direction="row" spacing={2} className="mt-4 justify-content-center">
            <Button
              variant="contained"
              size="large"
              style={{ padding: "10px 30px", borderRadius: "8px" }}
              type="submit"
            >
              Become Donor
            </Button>
          </Stack>
        </Paper>
      </form>

      <ToastContainer />
    </div>
  );
}
