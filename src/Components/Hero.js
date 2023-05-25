import React, { useEffect } from "react";
import "./Hero.css";

function Hero() {
  const handleClickOpen = () => {
    fetch("http://0.0.0.0:5000/open")
      .then((response) => {
        if (!response.ok) {
          throw new Error("");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleClickClose = () => {
    fetch("http://0.0.0.0:5000/close")
      .then((response) => {
        if (!response.ok) {
          throw new Error("");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    const åbenBtn = document.getElementById("åben-btn");
    const lukkeBtn = document.getElementById("lukke-btn");

    åbenBtn.addEventListener("click", handleClickOpen);
    lukkeBtn.addEventListener("click", handleClickClose);

    return () => {
      åbenBtn.removeEventListener("click", handleClickOpen);
      lukkeBtn.removeEventListener("click", handleClickClose);
    };
  }, []);

  return (
    <section id="hero">
      <div className="Åben åben-btn" id="åben-btn">
        <img src="./Åbent.png" alt="" />
        <p></p>
        <button className="btn">Åben</button>
      </div>

      <div className="Lukke" id="lukke-btn">
        <img src="./Lukket.png" alt="" />
        <p></p>
        <button className="btn">Lukke</button>
      </div>
    </section>
  );
}

export default Hero;
