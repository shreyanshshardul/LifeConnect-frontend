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

export default function Recipient() {
  const navigate = useNavigate();

  const [recipient, setRecipient] = useState({
    name: "",
    email: "",
    blood_group: "",
    age: "",
    city: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setRecipient({ ...recipient, [name]: value });
  }

  const handleRecipientSubmit = async (e) => {
    e.preventDefault();

    const { name, email, blood_group, age, city } = recipient;

    if (!name || !email || !blood_group || !age || !city) {
      return handleError("Please fill all fields");
    }

    try {
      const res = await fetch(`${BACKEND_LINK}/cards/recipient`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(recipient),
      });

      const result = await res.json();
      const { success, message, error } = result;

      if (success) {
        handleSuccess("Recipient Registered Successfully!");
        setTimeout(() => navigate("/cards"), 1200);
      } else if (error) {
        const errMsg = error?.details?.[0]?.message || "Validation Error";
        handleError(errMsg);
      } else {
        handleError(message || "Registration Failed");
      }
    } catch (err) {
      handleError("Error while registering recipient");
    }
  };

  return (
    <div className="parallax-bg">
      <form onSubmit={handleRecipientSubmit}>
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
            Become a Recipient
          </Typography>

          <Typography
            variant="body2"
            align="center"
            color="text.secondary"
            className="mb-3"
          >
            Fill the details below to request required blood
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
              value={recipient.name}
            />

            <TextField
              variant="standard"
              label="Email"
              name="email"
              onChange={handleChange}
              value={recipient.email}
            />

            <TextField
              variant="standard"
              label="Required Blood Group"
              name="blood_group"
              onChange={handleChange}
              value={recipient.blood_group}
            />

            <TextField
              variant="standard"
              label="Age"
              type="number"
              name="age"
              onChange={handleChange}
              value={recipient.age}
            />

            <TextField
              variant="standard"
              label="City"
              name="city"
              onChange={handleChange}
              value={recipient.city}
            />
          </Box>

          <Stack direction="row" spacing={2} className="mt-4 justify-content-center">
            <Button
              variant="contained"
              size="large"
              style={{ padding: "10px 30px", borderRadius: "8px" }}
              type="submit"
            >
              Request Blood
            </Button>
          </Stack>
        </Paper>
      </form>

      <ToastContainer />
    </div>
  );
}
