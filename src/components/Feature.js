  import React from 'react';
  import './styles/Feature.css';

  export default function Feature({ iconSrc, title, description }) {
    return (
          <div className="feature-card">
        <div className="icon-container">
          <img src={iconSrc} alt={title} className="icon" />
        </div>
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
      </div>
    );
  }