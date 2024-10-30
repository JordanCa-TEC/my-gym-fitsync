import React from 'react';
import '../sass/_homeDesktop.scss';
import PromotionSlider from '../components/PromotionSlider';
import {phone_home, promo_01, promo_02, promo_03} from '../assets/assets.js'

const HomeDesktop = () => {
  return (
    <div className="home">

      <section className="home__hero">
        <div className='home__hero--box'>
        <img src={phone_home} alt="FitSync Gym Image" className="home__phone-image" />
        <h1><spawn className="highcolor_Gold">Controla</spawn> tu entrenamiento en la palma de <spawn className="highcolor_Gold">tu mano</spawn></h1>
        </div>
      </section>

      <section className="home__services">
        <PromotionSlider/>
        <button className="Service__cta">Contactar</button>
      </section>
      <section className='home__services'>
      <h2 className='Promocion__title' >PROMOCIONES DEL MES</h2>
      <div className="services__list">
          <div className="service__box">
          <img src={promo_01} alt="Inscripcion-en-fitsync" className="service__image" />
          </div>
          <div className="service__box">
            <img src={promo_02} alt="matricul-cero-en-fitsync" className="service__image" />
          </div>
          <div className="service__box">
          <img src={promo_03} alt="suplementos-fitsync" className="service__image" />
          </div>
        </div> 
      </section>

    </div>
  );
};

export default HomeDesktop;
