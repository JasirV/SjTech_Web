import React from "react";
import { FaBuilding, FaLeaf, FaGlassCheers, FaTools } from "react-icons/fa";
import { GiCrackedGlass, GiSteelClaws } from "react-icons/gi";

const TradingSection = () => {
  return (
    <>
      <style>
        {`
          .trading-section {
            padding: 60px 20px;
          }
          .trading-content {
            max-width: 1200px;
            margin: 0 auto;
            text-align: center;
          }
          .services {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 20px;
          }
          .service-item {
            background-color: white;
            padding: 40px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease;
            text-align: center;
            box-sizing: border-box;
            width: calc(33.33% - 20px); /* 3 items per row on large screens */
          }
          .service-item:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
          }
          .service-icon {
            font-size: 3rem;
            color: #312D81; /* Primary color */
            margin-bottom: 15px;
          }
          .service-title {
            font-size: 1.5rem;
            color: #312D81; /* Primary color */
            margin-bottom: 10px;
          }
          .service-description {
            color: #555;
            font-size: 1rem;
            line-height: 1.5;
          }

          /* Tablet Screens (1024px and smaller) */
          @media (max-width: 1024px) {
            .services {
              justify-content: center;
            }
            .service-item {
              width: 48%; /* 2 items per row */
            }
          }

          /* Mobile Screens (768px and smaller) */
         @media (max-width: 768px) {
    .trading-section {
        // background-color: red;
        padding: 20px;
        margin-top: -9rem; /* Added margin-top */
    }
    .services {
        flex-direction: column;
        align-items: center;
    }
    .service-item {
        width: 100%; /* Full width */
    }
    .service-icon {
        font-size: 2.5rem; /* Adjusted for mobile */
    }
    .service-title {
        font-size: 1.2rem; /* Adjusted for mobile */
    }
    .service-description {
        font-size: 0.9rem; /* Adjusted for mobile */
    }
}
        `}
      </style>

      <section className="trading-section">
        <div className="trading-content">
          <div className="services">
            <div className="service-item">
              <GiSteelClaws className="service-icon" />
              <h3 className="service-title">Stainless Steel</h3>
              <p className="service-description">
                High-quality stainless steel solutions for construction.
              </p>
            </div>
            <div className="service-item">
              <FaBuilding className="service-icon" />
              <h3 className="service-title">Mild Steel</h3>
              <p className="service-description">
                Reliable mild steel materials for structural integrity.
              </p>
            </div>
            <div className="service-item">
              <FaLeaf className="service-icon" />
              <h3 className="service-title">Aluminium</h3>
              <p className="service-description">
                Durable and lightweight aluminium products for varied use.
              </p>
            </div>
            <div className="service-item">
              <FaBuilding className="service-icon" />
              <h3 className="service-title">Mashrabiya</h3>
              <p className="service-description">
                Traditional and modern mashrabiya designs for aesthetic appeal.
              </p>
            </div>
            <div className="service-item">
              <GiCrackedGlass className="service-icon" />
              <h3 className="service-title">Glass Work</h3>
              <p className="service-description">
                Quality glass installations for buildings and structures.
              </p>
            </div>
            <div className="service-item">
              <FaTools className="service-icon" />
              <h3 className="service-title">Civil Work</h3>
              <p className="service-description">
                Expert civil construction services with attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TradingSection;
