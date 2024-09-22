import React from "react";
import './styles/StartSelling.css'
import tshirt from './images/Tshirt.png'

const StartSelling = () => {
    return (
      <div className="promo-card">
        <div className="promo-card-left">
          <h2>Make Money, Risk-Free</h2>
          <p>You pay for fulfillment only when you make a sale</p>
          <div className="price-details">
            <div className="detail">
              <span>You sell a t-shirt</span>
              <span>$30</span>
            </div>
            <div className="detail">
              <span>You pay for its production</span>
              <span>$12</span>
            </div>
            <hr />
            <div className="profit-detail">
              <span>Your profit</span>
              <span className="profit">$18</span>
            </div>
          </div>
          <button className="start-selling-button">Start Selling</button>
          <p className="footer-text">100% Free to use · 900+ Products · Largest print network</p>
        </div>
        <div className="promo-card-right">
          <img src={tshirt} alt="Selling Illustration" />
        </div>
      </div>
    );
  };
  
  export default StartSelling;