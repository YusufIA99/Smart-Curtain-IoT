import React from "react";
import "./Hero.css";

function Hero() {

    const handleClickOpen = () => {
        //4. Fetch data from the backend
        fetch('http://0.0.0.0:5000/open')

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
        fetch('http://0.0.0.0:5000/close')
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
            <div className="Åben åben-btn" id="åben-btn" onClick={handleClickOpen}>
                <img src="./Assets/Åbent.png" alt="" />
                <p>Åben gardinerne</p>
                <button className="btn">Åben</button>
            </div>

            <div className="Lukke" id="lukke-btn" onClick={handleClickClose}>
                <img src="./Assets/Åbent.png" alt="" />
                <p>Luk gardinerne</p>
                <button className="btn">Lukke</button>
            </div>
        </section>
    );
}

export default Hero;
