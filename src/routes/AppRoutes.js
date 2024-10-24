import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeDesktop from '../pages/HomeDesktop';
import AboutDesktop from '../pages/AboutDesktop';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeDesktop />} />
        <Route path="/about" element={<AboutDesktop />} />
        {/* Más rutas en el futuro */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
