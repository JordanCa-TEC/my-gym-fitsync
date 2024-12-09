import React from 'react';
import '../sass/_shopDesktop.scss';
import { productHybro } from '../assets/assets';

const ShopDesktop = () => {
  return (
    <div className='shop'>
      <section className="shop__desktop">
                <div className="parent">
                  <div className="div1">
                    <img src={productHybro} alt="Hydro" />
                    <h2>Proteína Hidrolizada Hydrowhey 3.6lb – Optimum Nutrition</h2>
                    <h3>Proteínas</h3>
                    <h2>s/.365.00</h2>
                    <button>Agregar al carrito</button>
                  </div>
                  <div className="div2"> </div>
                  <div className="div3"> </div>
                  <div className="div4"> </div>
                  <div className="div5"> </div>
                  <div className="div6"> </div>
                  <div className="div7"> </div>
                  <div className="div8"> </div>
                  <div className="div9"> </div>
                </div>
      </section>
    </div>
  );
};

export default ShopDesktop;
