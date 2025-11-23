import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { handleSuccess, handleError } from "../utils";


export default function Hero() {
  const [loggedInuser, setLoggedInuser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("loggedInuser");
    setLoggedInuser(user || "");
  }, []);

  const handlelogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInuser");
    handleSuccess("Logged out Successfully");
    setTimeout(() => navigate("/home"), 1000);
  };

  return (
    <div className="container">
      <div className="row">
        <button onClick={handlelogout}>Log out</button>

        {loggedInuser && (
          <h3 className="mt-3">
            Logged in as: <b>{loggedInuser}</b>
          </h3>
        )}

        <ToastContainer />
      </div>
    </div>
  );
}
