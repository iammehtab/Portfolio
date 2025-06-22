import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2>MA</h2>
      <ul className="list-container">
        <li>Home</li>
        <li>About-Us</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">
        <a href="#contact">Connect with me</a>
      </div>
    </div>
  );
};

export default Navbar;
