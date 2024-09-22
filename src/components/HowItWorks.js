import React from "react";
import './styles/HowItWorks.css'
export default function HowItWorks({ iconSrc, title, description, descriptionText }) {
    return (
          <div className="work-card">
        <div className="work-icon-container">
          <img src={iconSrc} alt={title} className="work-icon" />
        </div>
        <h6 className="work-title">{title}</h6>
        <h4 className="work-description">{description}</h4>
        <p className="work-p">{descriptionText}</p>
        
      </div>
      
    );
  }