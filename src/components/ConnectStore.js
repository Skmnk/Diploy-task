import React from 'react';
import './styles/ConnectStore.css';
import BigC from './images/BIGC.svg'
import squarespace from './images/squarespace.svg'
import wix from './images/wix.svg'
import etsy from './images/etsy.svg'
import shopify from './images/shopify.svg'
import andmore from './images/and-more.svg'
import woo from './images/woo.svg'
import printify from './images/printify-E3TBSF5R.svg'
const ConnectStore = () => {
  return (
    <div className="connect-store">
      <h1>Connect your store</h1>
      <p>Printify easily integrates with major e-commerce platforms and marketplaces</p>
      <div className="platform-grid">
        <div className="platform big-square">
          <img src={BigC} alt="BigCommerce" className="big-icon" />
        </div>
        <div className="platform">
          <img src={wix} alt="Wix" />
        </div>
        <div className="platform">
          <img src={squarespace} alt="Squarespace" />
        </div>
        <div className="platform">
          <img src={woo} alt="WooCommerce" />
        </div>
        <div className="platform big-square green">
          <img src={printify} alt="Printify" className="big-icon" />
        </div>
        <div className="platform">
          <img src={etsy} alt="Etsy" />
        </div>
        <div className="platform big-square">
          <span>API</span>
        </div>
        <div className="platform">
          <img src={shopify} alt="Shopify" />
        </div>
        <div className="platform">
          <img  src={andmore} alt="And More" className="and-more" />
        </div>
      </div>
    </div>
  );
}

export default ConnectStore;