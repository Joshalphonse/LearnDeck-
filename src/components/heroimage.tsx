import React from "react";
import Heroimage from "../assets/heroimage.png";
import "./heroimage.css";

const Hero: React.FC = () => {
  return (
    <div>
      <h1 className="citrus-labs-logo">Hi Rob</h1>
      <img src={Heroimage} className="hero" alt="logo" />
    </div>
  );
};

export default Hero;
