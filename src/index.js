import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter , Routes , Route} from 'react-router-dom';  // ✅ ye line add karo
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from "./Landing_pages/Navbar"
import Homepage from "./Landing_pages/Home/Homepage"
import Footer from './Landing_pages/Footer';
import Aboutpage from "./Landing_pages/About/Aboutpage";
import Supportpage from "./Landing_pages/Support/Supportpage";
import Signup from "./Landing_pages/Register/Signup";
import Login from "./Landing_pages/Register/Login";
import FAQs from "./Landing_pages/FAQs";
import PrivatePolicy from "./Landing_pages/PrivatePolicy";
import Termcondition from "./Landing_pages/Termcondition";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <BrowserRouter>   {/* ✅ Wrap App with BrowserRouter */}
     <Navbar/>
     <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/about" element={<Aboutpage/>}></Route>
            <Route path="/support" element={<Supportpage/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/FAQs" element={<FAQs/>}></Route>
            <Route path="PrivatePolicy" element={<PrivatePolicy/>}></Route>
             <Route path="/Termcondition" element={<Termcondition/>}></Route>
     </Routes>
     <Footer/>
    </BrowserRouter>
 
);

reportWebVitals();
