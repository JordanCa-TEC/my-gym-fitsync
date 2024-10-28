import React from 'react';
import '../sass/_homeDesktop.scss';
import PromotionSlider from '../components/PromotionSlider';
import {phone_home} from '../assets/assets.js'

const HomeDesktop = () => {
  return (
    <div className="home">

      <section className="home__hero">
        <div className='home__hero--box'>
        <img src={phone_home} alt="FitSync Gym Image" className="home__phone-image" />
        <h1>Controla tu entrenamiento en la palma de tu mano</h1>
        </div>
      </section>

      <section className="home__services">
        <PromotionSlider />
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

    </div>
  );
};

export default HomeDesktop;
