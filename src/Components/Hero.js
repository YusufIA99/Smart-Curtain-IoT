import React from "react";
import "./Hero.css";

function Hero() {
  const handleClickOpen = () => {
    fetch('/open')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  const handleClickClose = () => {
    fetch('/close')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  return (
    <section id="hero">
      <div className="Åben" id="åben-btn" onClick={handleClickOpen}>
        <img src="public/Åbent.PNG" alt="" />
        <p>Åben gardinerne</p>
        <button className="btn">Åben</button>
      </div>

      <div className="Lukke" id="lukke-btn" onClick={handleClickClose}>
        <img src="public/Lukket.PNG" alt="" />
        <p>Luk gardinerne</p>
        <button className="btn">Lukke</button>
      </div>
    </section>
  );
}

export default Hero;
