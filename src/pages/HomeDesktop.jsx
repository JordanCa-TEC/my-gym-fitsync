import React from 'react';
import '../sass/_homeDesktop.scss'; // Estilos de SASS

const HomeDesktop = () => {
  return (
    <div className="home">
      <header className="home__header">
        <nav className="navbar">
          <img src="/assets/logo_fitsync-01.webp" alt="Logo__gym-fitsync" className="navbar__logo" />
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
        <h1>Controla tu entrenamiento en la palma de tu mano</h1>
        <img src="/assets/phone_fitsync.png" alt="FitSync Gym Image" className="home__phone-image" />
      </section>

      <section className="home__services">
        <h2>CONOCE NUESTROS PLANES</h2>
        <ul className='home__list-plans'>
          <li>Permiso para el uso de las Instalaciones</li>
          <li>Sala de masajes</li>
          <li>Danza Aeróbica</li>
          <li>Personal Trainer presencial / App</li>
          <li>Nutricionista vía App</li>
          <li>APP de rutina & asesoramiento</li>
          <li>Promociones adicionales en la store</li>
        </ul>
        <button className="Service__cta">Contactar</button>
      </section>
      <section className='home__services'>
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
