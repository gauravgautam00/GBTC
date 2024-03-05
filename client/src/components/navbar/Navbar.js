import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <header class="navbar">
      <img src="gbtc-logo.png" alt="logo" className="gbtc-logo" />
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn">
        <span class="navicon"></span>
      </label>
      <ul class="menu">
        <li>
          <a href="#work">Feed</a>
        </li>
        <li>
          <a href="#about">Chat</a>
        </li>
        <li>
          <a href="#careers">LiveStreams</a>
        </li>
        <button className="navbar-login">Login</button>
        <button className="navbar-login">Sign Up</button>
      </ul>
    </header>
  );
};

export default Navbar;