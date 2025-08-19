import React from 'react';
import "./Banner.css";

function Banner() {
  return (
    <div className='banner'>
        <img src="./banner1.jpg" alt="banner" />
        <div className='banner-text'>
            <h2>Chez vous, partout et ailleurs</h2>
        </div>
    </div>
  )
}

export default Banner;