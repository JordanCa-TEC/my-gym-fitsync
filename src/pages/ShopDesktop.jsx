import React from 'react';
import '../sass/_shopDesktop.scss';
import { productHybro } from '../assets/assets';

const ShopDesktop = () => {
  return (
    <div className='shop'>
      <section className="shop__desktop">
                <div className="parent">
                  <div className="shop__item--1 parent__content--div">
                    <img src={productHybro} alt="Hydro" />
                    <h2>Proteína Hidrolizada Hydrowhey 3.6lb – Optimum Nutrition</h2>
                    <h3>Proteínas</h3>
                    <h2 className='item__price'>s/.365.00</h2>
                    <button>Agregar al carrito</button>
                  </div>
                  <div className="shop__item--2 parent__content--div"> </div>
                  <div className="shop__item--3 parent__content--div"> </div>
                  <div className="shop__item--4 parent__content--div"> </div>
                  <div className="shop__item--5 parent__content--div"> </div>
                  <div className="shop__item--6 parent__content--div"> </div>
                  <div className="shop__item--7 parent__content--div"> </div>
                  <div className="shop__item--8 parent__content--div"> </div>
                  <div className="shop__item--9 parent__content--div"> </div>
                </div>
      </section>
    </div>
  );
};

export default ShopDesktop;
