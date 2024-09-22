import React, { useState } from 'react';
import './styles/Header.css'
import logo from './images/logo-full.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src={logo} alt="Printify" />
        </a>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`navbar-menu ${isMenuOpen ? 'is-open' : ''}`}>
          <ul className="navbar-links">
            <li><a href="/catalog">Catalog</a></li>
            <li className="dropdown">
              <a href="/how-it-works">How it works</a>
              <span className="dropdown-arrow">▼</span>
            </li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/blog">Blog</a></li>
            <li className="dropdown">
              <a href="/services">Services</a>
              <span className="dropdown-arrow">▼</span>
            </li>
            <li className="dropdown">
              <a href="/use-cases">Use-cases</a>
              <span className="dropdown-arrow">▼</span>
            </li>
            <li className="dropdown">
              <a href="/help">Need help?</a>
              <span className="dropdown-arrow">▼</span>
            </li>
          </ul>
        </div>
        <div className="navbar-buttons">
            <a href="/login" className="btn btn-login">Log in</a>
            <a href="/signup" className="btn btn-signup">Sign up</a>
          </div>
      </div>
    </nav>
  );
};

export default Header;