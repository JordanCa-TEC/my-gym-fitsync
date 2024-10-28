import React from 'react';
import '../sass/_aboutDesktop.scss'; 

const AboutDesktop = () => {
  return (
    <div className="about">
      <header className="about__header">
        <h1>About FitSync Gym</h1>
      </header>

      <section className="about__mission">
        <h2>Our Mission</h2>
        <p>To inspire and support you on your fitness journey.</p>
      </section>

      <section className="about__team">
        <h2>Meet the Team</h2>
        <div className="team__list">
          <div className="team__member">
            <h3>John Doe</h3>
            <p>Lead Trainer</p>
          </div>
          <div className="team__member">
            <h3>Jane Smith</h3>
            <p>Nutrition Expert</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutDesktop;
