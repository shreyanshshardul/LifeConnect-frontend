import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from "./Landing_pages/Navbar";
import Homepage from "./Landing_pages/Home/Homepage";
import Footer from './Landing_pages/Footer';
import Aboutpage from "./Landing_pages/About/Aboutpage";
import Supportpage from "./Landing_pages/Support/Supportpage";
import Signup from "./Landing_pages/Register/Signup";
import Login from "./Landing_pages/Register/Login";
import FAQs from "./Landing_pages/FAQs";
import PrivatePolicy from "./Landing_pages/PrivatePolicy";
import Termcondition from "./Landing_pages/Termcondition";
import Cards from "./Landing_pages/Dashboard/Cards";
import Error from "./Landing_pages/Error";
import Navbar1 from "./Landing_pages/Dashboard/Navbar1";
import Donar from "./Landing_pages/Dashboard/Donar";
import Recipient from "./Landing_pages/Dashboard/Recipient";

import ProtectedRoute from "./ProtectedRoute";

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

function App() {
  const location = useLocation();

  // Dashboard pages par Navbar1 show, baki pages par normal Navbar
  const hideNavbar = location.pathname.startsWith("/cards");

  // 🔹 Search state
  const [search, setSearch] = useState("");

  return (
    <>
      {/* Navbar me search prop pass */}
      {hideNavbar ? <Navbar1 setSearch={setSearch} /> : <Navbar setSearch={setSearch} />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/support" element={<Supportpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/FAQs" element={<FAQs />} />
        <Route path="/PrivatePolicy" element={<PrivatePolicy />} />
        <Route path="/Termcondition" element={<Termcondition />} />

        {/* Protected Routes */}
        <Route
          path="/cards/*"
          element={
            <ProtectedRoute>
              <Cards search={search} /> {/* 🔹 search prop pass */}
            </ProtectedRoute>
          }
        />

        <Route
          path="/cards/donar"
          element={
            <ProtectedRoute>
              <Donar />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cards/recipient"
          element={
            <ProtectedRoute>
              <Recipient />
            </ProtectedRoute>
          }
        />

        {/* Catch-all */}
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </>
  );
}

// RENDER
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppWrapper />);

reportWebVitals();
