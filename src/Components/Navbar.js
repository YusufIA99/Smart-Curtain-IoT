import './Navbar.css';
import React from "react";

function Header() {
  return (
    <div className="container">
      <section id="header">
        <img src="Images/MatterLogo.svg" alt="Logo" />
        <h1>Smart Gardin</h1>
        <div>
          <ul id="navbar">
            <li>
              <a href="#hero">Hjem</a>
            </li>
            <li>
              <a href="#vejr-hero">Vejret</a>
            </li>
            <li>
              <a href="#om-os">Om os</a>
            </li>
          </ul>
        </div>
        <div className="toggle_btn">
          <i className="fa-solid fa-bars"></i>
        </div>
      </section>
    </div>
  );
}

export default Header;

