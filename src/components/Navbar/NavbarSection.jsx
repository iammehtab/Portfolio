import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <h2>MA</h2>

      <ul className={`list-container ${menuOpen ? "active" : ""}`}>
        <li>Home</li>
        <li>About-Us</li>
        <li>Project</li>
        <li>Contact</li>
      </ul>

      {/* Hide this on mobile via CSS */}
      <div className="nav-connect">
        <a href="#contact">Connect with me</a>
      </div>

      {/* Hamburger toggler */}
      <div className="hamburger-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <img
          src="https://img.icons8.com/?size=100&id=52946&format=png&color=000000"
          alt="menu"
        />
      </div>
    </div>
  );
};

export default Navbar;
