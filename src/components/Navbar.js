// src/components/Navbar/Navbar.js
import React from 'react';
import '../sass/_Navbar.scss'; 

const Navbar = () => {
  return (
    <header className="home__header">
    <nav className="navbar">
      <img src="/assets/logo_fitsync-01.webp" alt="Logo__gym-fitsync" className="navbar__logo" />
      <ul className="navbar__menu">
        <li><a href='/pages/Homedesktop.jsx'>Inicio</a></li>

        <li><a href='/pages/AboutDesktop.jsx'>Quiénes somos</a></li>
        <li>Shop</li>
        <li>Contact</li>
      </ul>
      <button className="navbar__cta">Join Now</button>
    </nav>
  </header>
  );
};

export default Navbar;