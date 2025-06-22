import React from "react";
import "./Hero.css";
import image from "../../assets/image.png";

const Hero = () => {
  return (
    <div className="hero">
      <img src={image} alt="" />
      <h1>
        <span>I'm Mehtab Alam </span>,programmer based in India.
      </h1>
      <p>Just a guy who turns coffee into code and sometimes magic✨</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">
          <a href="/Resume(1).pdf" download>
            {" "}
            My resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
