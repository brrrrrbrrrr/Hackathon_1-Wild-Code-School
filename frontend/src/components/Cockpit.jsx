import React from "react";
import CockpitPicture from "../assets/img/cockpit.png";
import PhoneVideo from "../assets/img/holo_phone.webm";
import "./Cockpit.css";

function Cockpit() {
  return (
    <div className="cockpit-container">
      <video src={PhoneVideo} muted autoPlay className="phone-video" />
      <img
        src={CockpitPicture}
        alt="Cockpit Vaisseau"
        className="cockpit-picture"
      />
    </div>
  );
}

export default Cockpit;
