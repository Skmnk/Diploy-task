import React, { useEffect, useState } from 'react';
import './styles/Loader.css'; 
import logo from './images/logo-full.svg'; 
const Loader = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); 
    }, 3000);

    return () => clearTimeout(timer); 
  }, [onFinish]);

  return (
    <div className="loader-container">
      <img src={logo} alt="Loading..." className="loader-image" />
    </div>
  );
};

export default Loader;
