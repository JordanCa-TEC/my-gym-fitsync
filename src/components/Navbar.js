// src/components/Navbar/Navbar.js
import React from 'react';
import '../sass/_Navbar.scss'; 
import {logo} from '../assets/assets.js';
import {carrito} from '../assets/assets.js';
import {account_login} from '../assets/assets.js';

const Navbar = () => {
  return (
    <header className="home__header">
    <nav className="navbar">
      <img src={logo} alt="Logo__gym-fitsync" className="navbar__logo" />
      <ul className="navbar__menu">
        <li><a href='/pages/Homedesktop.jsx'>Inicio</a></li>
        <li><a href='/pages/AboutDesktop.jsx'>Quiénes somos</a></li>
        <li><a href='#'>Shop</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>
      <div className="navbar__menu">
      <a href='#'><img src={carrito} alt="shopping cart" ></img></a>
      <a href='#' >Login<img src={account_login} alt="shopping cart" ></img></a>
      </div>
    </nav>
  </header>
  );
};

export default Navbar;