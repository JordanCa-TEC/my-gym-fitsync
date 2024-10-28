// PromotionSlider.js
import React, { useState } from 'react';
import '../sass/_PromotionSlider.scss'; 

const promotions = [
  {
    id: 1,
    title: "PREMIUM",
    benefits: [
      "Permiso para el uso de las Instalaciones",
      "Sala de masajes",
      "Danza Aeróbica",
      "Personal Trainer presencial / App",
      "Nutricionista vía App",
      "APP de rutina y asesoramiento",
      "Promociones adicionales en la store"
    ]
  },
  {
    id: 2,
    title: "REGULAR",
    benefits: [
      "Permiso para el uso de las Instalaciones",
      "Personal Trainer vía App",
      "APP de rutina básica",
      "Promociones básicas en la store"
    ]
  }
];

const PromotionSlider = () => {
  const [currentPromo, setCurrentPromo] = useState(0);

  const handleNextPromo = () => {
    setCurrentPromo((prevPromo) => (prevPromo + 1) % promotions.length);
  };

  return (
    <div className="promotion-slider">
      <h2>CONOCE NUESTROS <span className="highlight">PLANES</span></h2>
      <ul className="promotion-slider__benefits">
        {promotions[currentPromo].benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
      <button className="promotion-slider__button">Contactar</button>

      <div className="promotion-slider__image-container" onClick={handleNextPromo}>
        <div className={`promotion-slider__card ${currentPromo === 0 ? 'active' : ''}`}>
          <p>{promotions[currentPromo].title}</p>
        </div>
      </div>
      <div className="promotion-slider__dots">
        {promotions.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentPromo ? 'active' : ''}`}
            onClick={() => setCurrentPromo(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default PromotionSlider;
