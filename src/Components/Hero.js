import React from "react";
import "./Hero.css";
import { open_curtain, close_curtain } from "./app.py"; // import the functions

function Hero() {
  const handleOpenCurtain = () => {
    open_curtain(); // call the open_curtain function
  };

  const handleCloseCurtain = () => {
    close_curtain(); // call the close_curtain function
  };

  return (
    <section id="hero">
      <div className="Åben" id="åben-btn" onClick={handleOpenCurtain}>
        <img src="public/Åbent.PNG" alt="" />
        <p>Åben gardinerne</p>
        <button className="btn">Åben</button>
      </div>

      <div className="Lukke" id="lukke-btn" onClick={handleCloseCurtain}>
        <img src="public/Lukket.PNG" alt="" />
        <p>Luk gardinerne</p>
        <button className="btn">Lukke</button>
      </div>
    </section>
  );
}

export default Hero;
