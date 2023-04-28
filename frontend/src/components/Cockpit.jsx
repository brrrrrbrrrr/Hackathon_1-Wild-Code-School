/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
import Typewriter from "typewriter-effect";
import React, { useEffect, useRef, useState } from "react";
import CockpitPicture from "../assets/img/cockpit.png";
import PhoneVideo from "../assets/img/holo_phone.webm";
import PhoneVideoLoop from "../assets/img/holo_phone_loop.webm";
import HoloMap from "../assets/img/holo_map.webm";
import Map from "./map/Map";
import "./Cockpit.css";

function Cockpit() {
  const phoneRef = useRef();
  const phoneLoopRef = useRef();
  const holoMapRef = useRef();

  const [isVisible, setIsVisible] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [typewriterVisible, setTypewriterVisible] = useState(false);
  const [phoneOff, setPhoneOff] = useState(true);
  const [map, setMap] = useState(false);
  const [holomap, setHoloMap] = useState(false);
  const [toggleMapButton, setToggleMapButton] = useState(false);
  const [holoMapButton, setHoloMapButton] = useState(false);

  useEffect(() => {
    if (typewriterVisible) {
      setTimeout(() => {
        setPhoneOff(false);
        setTypewriterVisible(false);
        setMap(true);
        setHoloMap(true);
        holoMapRef.current.play();
      }, 17000);
    }
  }, [typewriterVisible]);

  const handleClick = () => {
    phoneRef.current.play();
    setTimeout(() => {
      setIsVisible(true); // démarre l'animation phone
      setTypewriterVisible(true); // démarre l'animation typewriter
      phoneLoopRef.current.play();
    }, 5000);
  };
  const handleButton = () => {
    setIsShown(!isShown);
  };

  return (
    <div className="cockpit-container">
      {phoneOff && (
        <video
          src={PhoneVideo}
          muted
          className={phoneOff ? "phone-video" : "disable-video"}
          ref={phoneRef}
        />
      )}
      {phoneOff && (
        <video
          src={PhoneVideoLoop}
          muted
          loop
          autoPlay
          className={isVisible ? "phone-video-loop" : "disable-video-loop"}
          ref={phoneLoopRef}
        />
      )}
      <video
        src={HoloMap}
        muted
        loop
        autoPlay
        className={holomap ? "holo-map" : "disable-holo-map"}
        ref={holoMapRef}
      />
      <video
        src={HoloMap}
        muted
        loop
        autoPlay
        className={holoMapButton ? "holo-map" : "disable-holo-map"}
        ref={holoMapRef}
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
      <button
        type="button"
        className="map-button"
        onClick={() => {
          holoMapRef.current.play();
          setToggleMapButton(!toggleMapButton);
          setHoloMapButton(!holoMapButton);
        }}
      >
        MAP
      </button>
      <img
        src={CockpitPicture}
        alt="Cockpit Vaisseau"
        className="cockpit-picture"
      />
      <div className={typewriterVisible ? "timer" : "disable-timer"}>
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
      {map ? <Map /> : ""}
      {toggleMapButton ? <Map /> : ""}
    </div>
  );
}

export default Cockpit;
