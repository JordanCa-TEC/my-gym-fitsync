import React from 'react';
import '../sass/_homeDesktop.scss'; // Estilos de SASS

const HomeDesktop = () => {
  return (
    <div className="home">
      <header className="home__header">
        <nav className="navbar">
          <img src="/assets/logo.png" alt="FitSync Gym Logo" className="navbar__logo" />
          <ul className="navbar__menu">
            <li>Home</li>
            <li>Services</li>
            <li>Classes</li>
            <li>Contact</li>
          </ul>
          <button className="navbar__cta">Join Now</button>
        </nav>
      </header>

      <section className="home__hero">
        <h1>Welcome to FitSync Gym</h1>
        <p>Your fitness journey starts here</p>
        <button className="hero__cta">Join Us Today</button>
      </section>

      <section className="home__services">
        <h2>What We Offer</h2>
        <div className="services__list">
          <div className="service">
            <h3>Personal Training</h3>
            <p>One-on-one sessions with our expert trainers</p>
          </div>
          <div className="service">
            <h3>Group Classes</h3>
            <p>Dynamic and engaging fitness classes</p>
          </div>
          <div className="service">
            <h3>Nutrition Plans</h3>
            <p>Customized plans to fit your goals</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 FitSync Gym</p>
        <div className="footer__links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default HomeDesktop;
