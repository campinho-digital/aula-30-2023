import React from "react";
import "./NavBar.css";
import img from "../../assets/Logo/rico_logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="../../assets/Logo/rico_logo.png" alt="" />
      </div>

      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
