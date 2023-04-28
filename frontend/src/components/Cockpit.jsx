/* eslint-disable import/no-extraneous-dependencies */
import Typewriter from "typewriter-effect";
import React, { useRef, useState } from "react";
import CockpitPicture from "../assets/img/cockpit.png";
import PhoneVideo from "../assets/img/holo_phone.webm";
import PhoneVideoLoop from "../assets/img/holo_phone_loop.webm";
import "./Cockpit.css";

function Cockpit() {
  const phoneRef = useRef();

  const phoneLoopRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [typewriterVisible, setTypewriterVisible] = useState(false);

  const handleClick = () => {
    phoneRef.current.play();
    setTimeout(() => {
      setIsVisible(true);
      setTypewriterVisible(true); // démarre l'animation typewriter

      phoneLoopRef.current.play();
    }, 5000);
  };

  const handleButton = () => {
    setIsShown(!isShown);
  };

  return (
    <div className="cockpit-container">
      <video src={PhoneVideo} muted className="phone-video" ref={phoneRef} />
      <video
        src={PhoneVideoLoop}
        muted
        loop
        autoPlay
        className={isVisible ? "phone-video-loop" : "disable-video-loop"}
        ref={phoneLoopRef}
      />
      <button
        type="button"
        onClick={() => {
          handleButton();
          handleClick();
        }}
        className={isShown ? "disabled-start-mission" : "start-mission"}
      >
        Start mission
      </button>
      <img
        src={CockpitPicture}
        alt="Cockpit Vaisseau"
        className="cockpit-picture"
      />
      <div className="timer">
        {typewriterVisible && (
          <Typewriter
            options={{
              autoStart: false,
              delay: 50,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "Vous êtes un influenceur venu de la Planète QUINOA - AINOU 97X Votre mission si vous l’acceptez sera de découvrir les différents pays de la Planète Terre pour offrir une expérience authentique et immersive à vos abonnés"
                )

                .pauseFor(2500)

                .start();
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Cockpit;
