import React from "react";
import OutgoingMailIcon from '@mui/icons-material/OutgoingMail';
import {Link} from "react-router-dom";

export default function Hero() {
  return (
    <div className="container mt-5">
      <div className="row mt-5 text-center p-5">
        <h1 className="fs-2 mt-5" style={{ color: "#cf2b2b" }}>
          “We believe that saving lives is not just an act — it’s a shared
          responsibility.”
        </h1>
        <h1 className="mt-3 fs-5 text-muted p-5">
          “LifeConnect ensures that both donors and recipients get real-time,
          reliable assistance throughout their blood donation journey. Our team
          and technology are designed to make the process transparent, easy, and
          efficient.”
        </h1>
      </div>

      <div className="row mt-5">
        <div className="col-4 ">
            <h1 className="mt-3 fs-5" style={{color:"#cf2b2b"}}>Support Features:</h1>
            
                <h1 className="mt-4 fs-6 text-center">🕒 24×7 availability tracking</h1>
                <h1 className="mt-3 fs-6 text-center">📍 Smart location-based recommendations</h1>
                <h1 className="mt-3 fs-6 text-center">💬 In-app messaging and emergency alerts</h1>
                <h1 className="mt-3 fs-6 text-center">📞 Quick support team for urgent cases</h1>
           
        </div>
        <div className="col-8 mt-5">
             <h1 className="mt-4 fs-6 text-center">📧 Need Help?</h1>
             <h1 className="mt-3 fs-6 text-center">You can reach our support team anytime at</h1>
            <h1 className="mt-3 fs-4 text-center"> <a href="mailto:lifeconnect817@gmail.com"><i class="fa-solid fa-envelope-circle-check"></i></a></h1>
        </div>
      </div>
    </div>
  );
}
