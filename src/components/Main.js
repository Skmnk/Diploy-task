import React from 'react';
import './styles/Main.css';
import tshirt from './images/Tshirt.png'
export default function Main() {
  return (
    <div className="custom-product-landing">
      <div className="content">
        <h1>Create and sell custom products</h1>
        <ul>
          <li className='main-li'>100% Free to use</li>
          <li className='main-li'>900+ High-Quality Products</li>
          <li className='main-li'>Largest global print network</li>
        </ul>
        <div className="cta-buttons">
          <button className="start-button">Start for free</button>
          <button className="how-it-works-button">How it works?</button>
        </div>
        <p className="trust-text">Trusted by over 8M sellers around the world</p>
      </div>
      <div className="image-container">
        <img src={tshirt} alt="Person pointing at custom t-shirt" className="product-image" />
      </div>
    </div>
  );
}