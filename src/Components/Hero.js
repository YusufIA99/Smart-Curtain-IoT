import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section id="hero">
      <div className="Åben" id="åben-btn">
        <img src="public/Åbent.PNG" alt="" />
        <p>Åben gardinerne</p>
        <button className="btn">Åben</button>
      </div>

      <div className="Lukke" id="lukke-btn">
        <img src="public/Lukket.PNG" alt="" />
        <p>Luk gardinerne</p>
        <button className="btn">Lukke</button>
      </div>
    </section>
  );
}

export default Hero;
