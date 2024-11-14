import React from "react";

const HeadeingSlider = ({ bg_color, dir }) => {
  return (
    <div className={`marquee-wrapper text-slider ${bg_color}`}>
      <div className={`marquee-inner ${dir}`}>
        <ul className="marqee-list d-flex">
          <li className="marquee-item">
            <span className="stroke-text">Leader in</span> Refractory{" "}
            <span className="stroke-text">Construction &</span>
            Trading <span className="stroke-text">Services</span>, Experts in{" "}
            <span className="stroke-text">Stainless Steel</span> Fabrication &{" "}
            <span className="stroke-text">Installation</span>, Specialists in{" "}
            <span className="stroke-text">Aluminum</span> &{" "}
            <span className="stroke-text">Glass</span> Work,{" "}
            <span className="stroke-text">Mild Steel</span> Solutions,{" "}
            <span className="stroke-text">Mashrabiya</span> Design, and{" "}
            <span className="stroke-text">Quality Commitment</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeadeingSlider;
