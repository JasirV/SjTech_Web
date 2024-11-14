import React from "react";
import { FaStar, FaStarHalfStroke, FaRegStar } from "react-icons/fa6";

const Rating = ({ star }) => {
  const starRating = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <li key={index}>
        {star >= index + 1 ? (
          <FaStar className="sm-font fa-star" />
        ) : star >= number ? (
          <FaStarHalfStroke className="sm-font fa-star" />
        ) : (
          <FaRegStar className="sm-font fa-star" />
        )}
      </li>
    );
  });
  return <ul className="d-flex gap-1">{starRating}</ul>
};

export default Rating;