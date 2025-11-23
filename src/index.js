import React from 'react';
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
import Recipient from "./Landing_pages/Dashboard/Recipient"

// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//   WRAPPER COMPONENT (NEW)
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

function App() {
  const location = useLocation();

  // yaha conditions bana sakte ho future me
  // example: dashboard pages par navbar/footer hide karna
  const hideNavbar = location.pathname.startsWith("/cards");

  return (
    <>
      {hideNavbar ? <Navbar1/> : <Navbar/>}

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/support" element={<Supportpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/FAQs" element={<FAQs />} />
        <Route path="/PrivatePolicy" element={<PrivatePolicy />} />
        <Route path="/Termcondition" element={<Termcondition />} />
        <Route path="/cards/*" element={<Cards />} />
         <Route path="/cards/donar" element={<Donar />} />
         <Route path="/cards/recipient" element={<Recipient />} />
        <Route path="*" element={<Error />} />
      </Routes>

      {<Footer />}
    </>
  );
}

// ▬▬▬▬▬▬▬▬▬▬▬▬
//   RENDER
// ▬▬▬▬▬▬▬▬▬▬▬▬

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
         <App />
    </BrowserRouter>
   
 
);

reportWebVitals();
