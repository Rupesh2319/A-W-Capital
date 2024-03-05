import React from "react";
import "../css/home.css";

function HomeDescItem({ image, title }) {
  return (
    <div className='home-desc-item'>
      <img loading='lazy' src={image} alt='icons' />
      <div className='home-desc-item-text'>
        <h4>{title}</h4>
      </div>
    </div>
  );
}

export default HomeDescItem;
