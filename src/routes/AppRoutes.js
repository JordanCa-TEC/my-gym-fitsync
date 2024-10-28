import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomeDesktop from '../pages/HomeDesktop';
import AboutDesktop from '../pages/AboutDesktop';

const AppRoutes = () => {
  return (
    <Router>
      <MainLayout>
          <Routes>
            <Route path="/" element={<HomeDesktop />} />
            <Route path="/about" element={<AboutDesktop />} />
            {/* Más rutas en el futuro */}
          </Routes>
      </MainLayout>   
    </Router>
  );
};

export default AppRoutes;
