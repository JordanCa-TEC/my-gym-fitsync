import React from 'react';
import '../sass/_Footer.scss'; 

const Footer = () => {
  return (
    <footer className="footer">
    <p>&copy; 2024 FitSync Gym</p>
    <div className="footer__links">
      <a href="/privacy">Privacy Policy</a>
      <a href="/terms">Terms of Service</a>
    </div>
  </footer>
  );
};

export default Footer;