import React from 'react';
import "./Action.css";
import {Link , useNavigate} from "react-router-dom";
export default function Action(){
        const navigate = useNavigate();
    function become(){
        navigate("/cards/donar")
    }
      function become1(){
        navigate("/cards/recipient")
    }
    return (
        <div className="container mt-5 mb-5">
        <div className="row mb-5">
            <h2 style={{backgroundColor:"#cf2b2b"}} className="text-center">Join Now - Be a Life Saver </h2>
            <div className="col-6 mt-4 mb-5 text-center " ><h3><button style={{border:"none" , borderRadius:"20px"}} className="button" onClick={become}>🔴 “Become a Donor”</button></h3></div>
             <div className="col-6 mt-4 mb-5 text-center "><h3><button style={{border:"none" , borderRadius:"20px"}} className="button" onClick={become1}>🩸 “Request Blood”</button></h3></div>
        </div>
        </div>
    )
}