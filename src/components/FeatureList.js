import React from 'react';
import Feature from './Feature';
import './styles/Feature.css';

export default function FeatureList({ features }) {
  return (
    <div className='feature-container'>
      {features.map((feature, index) => (
        <Feature
          key={index}
          iconSrc={feature.iconSrc}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
}
