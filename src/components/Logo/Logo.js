import React from "react";
import Tilt from "react-tilt";
import faceLogo from './icons8-face-logo-80.png';
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 55 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner pa3"><img style={{paddingTop: '25px'}} src={faceLogo} alt="Logo" /></div>
      </Tilt>
    </div>
  );
};

export default Logo;
