/*
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomeDesktop from '../pages/HomeDesktop';
import AboutDesktop from '../pages/AboutDesktop';
import Shop from '../pages/Shop';
import Contact from '../pages/Contact';

const AppRoutes = () => {
  return (
    <Router>
      <MainLayout>
          <Routes>
            <Route path="/" element={<HomeDesktop />} />
            <Route path="/about" element={<AboutDesktop />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </MainLayout>   
    </Router>
  );
};

export default AppRoutes;
*/
import React from 'react';
import { Routes, Route } from 'react-router-dom';  // Importa Routes y Route
import MainLayout from '../layouts/MainLayout';  // Importa MainLayout
import HomeDesktop from '../pages/HomeDesktop';  // Importa las páginas
import AboutDesktop from '../pages/AboutDesktop';
import Shop from '../pages/Shop';
import Contact from '../pages/Contact';

const AppRoutes = () => {
  return (
    <MainLayout>  {/* MainLayout es el contenedor de las rutas */}
      <Routes>
        <Route path="/" element={<HomeDesktop />} />
        <Route path="/about" element={<AboutDesktop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </MainLayout>
  );
};

export default AppRoutes;


