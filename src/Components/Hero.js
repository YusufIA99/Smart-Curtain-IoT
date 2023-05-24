import React from "react";
import "./Hero.css"; 

function Hero() {

    const handleClickOpen = () => {
        //Fetch data
        fetch('http://0.0.0.0:5000/open')

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
        //Fetch data
        fetch('http://0.0.0.0:5000/close')
            .then((response) => {
                if (!response.ok) {
                    throw new Error("");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };


    return (
        <section id="hero">
            <div className="Åben åben-btn" id="åben-btn" onClick={handleClickOpen}>
                <img src="./Åbent.png" alt="" />
                <p>Åben gardinerne</p>
                <button className="btn">Åben</button>
            </div>

            <div className="Lukke" id="lukke-btn" onClick={handleClickClose}>
                <img src="./Lukket.png" alt="" />
                <p>Luk gardinerne</p>
                <button className="btn">Lukke</button>
            </div>
        </section>
    );
}

export default Hero;
