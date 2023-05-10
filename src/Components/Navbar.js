import './Navbar.css';

function Navbar() {
  return (
    <div className="Navbar">
        <img src="Images/MatterLogo.svg" alt="Logo" />
        <h1>Smart Gardin</h1>
        <div>
          <ul id="navbar">
            <li><a href="#hero">Hjem</a></li>
            <li><a href="#vejr-hero">Vejret</a></li>
            <li><a href="#om-os">Om os</a></li>
          </ul>
        </div>
        <div class="toggle_btn">
          <i class="fa-solid fa-bars"></i>
        </div>
    </div>
  );
}

export default Navbar;