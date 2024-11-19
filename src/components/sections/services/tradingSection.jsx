import React from 'react';
import {  FaBuilding, FaLeaf, FaGlassCheers, FaTools } from 'react-icons/fa';
import { GiCrackedGlass, GiSteelClaws } from "react-icons/gi";


const TradingSection = () => {
  return (
    <section className="trading-section">
      <div className="trading-content">
        <div className="services">
          <div className="service-item">
            <GiSteelClaws className="service-icon" />
            <h3 className="service-title">Stainless Steel</h3>
            <p>High-quality stainless steel solutions for construction.</p>
          </div>
          <div className="service-item">
            <FaBuilding className="service-icon" />
            <h3 className="service-title">Mild Steel</h3>
            <p>Reliable mild steel materials for structural integrity.</p>
          </div>
          <div className="service-item">
            <FaLeaf className="service-icon" />
            <h3 className="service-title">Aluminium</h3>
            <p>Durable and lightweight aluminium products for varied use.</p>
          </div>
          <div className="service-item">
            <FaBuilding className="service-icon" />
            <h3 className="service-title">Mashrabiya</h3>
            <p>Traditional and modern mashrabiya designs for aesthetic appeal.</p>
          </div>
          <div className="service-item">
            <GiCrackedGlass className="service-icon" />
            <h3 className="service-title">Glass Work</h3>
            <p>Quality glass installations for buildings and structures.</p>
          </div>
          <div className="service-item">
            <FaTools className="service-icon" />
            <h3 className="service-title">Civil Work</h3>
            <p>Expert civil construction services with attention to detail.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingSection;
