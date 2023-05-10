import React from "react";
import "./Hero.css";

function Hero() {
  
    const handleClickOpen = () => {
        //4. Fetch data from the backend
        fetch("/open")
            .then((response) => {
                // If the response is not ok, throw an error
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };


    const handleClickClose = () => {
        //4. Fetch data from the backend
        fetch("/close")
            .then((response) => {
                // If the response is not ok, throw an error
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

   
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