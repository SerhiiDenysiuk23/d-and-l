import React from 'react';
import logo from "../assets/logo.png";
import burrito from "../assets/burrito.png";
import burger from "../assets/burger.png";

const Promotion = () => {
  return (
    <section className='promotion'>

      <div className="logo-big">
        <div>D&L</div>
        <div>takeaway</div>
        <img src={logo} alt=""/>
      </div>

      <div className="order-now">
        <div className="order-now__call">Order now!</div>
        <div className="order-now__phone">(406) 555-0120</div>
        <div className="order-now__address">FK11DU Falkirk 185-187 Hight Street</div>
      </div>

      <div className="arrow-down">
        <a href="#menu">
          <div/>
          <div/>
        </a>
      </div>

      <img className="food-img burrito" src={burrito} alt=""/>
      <img className="food-img burger" src={burger} alt=""/>
    </section>
  );
};

export default Promotion;