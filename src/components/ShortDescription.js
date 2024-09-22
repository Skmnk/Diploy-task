import React from 'react'
import './styles/ShortDescription.css'
import tshirt from './images/Tshirt.png'
export default function ShortDescription() {
  return (
    <div className="product-customizer">
      <div className="product-showcase">
        <img src={tshirt} alt="Product Showcase" className="showcase-image" />
        
        <div className="preview-window">
          
          <div className="preview-content">
            <img src={tshirt} alt="T-shirt Preview" className="preview-image" />
          </div>
        </div>
      </div>
      <div className="product-info">
        <h2 className="info-title">Easily add your design to a wide range of products</h2>
        <p className="info-description">
          With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and
          hundreds of other products.
        </p>
        <a href="#" className="info-link">
          All products →
        </a>
      </div>
    </div>
  )
}