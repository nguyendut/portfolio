import React from 'react';
import './Navigation.css';
import logo from '../assets/logo.png';

const Navigation = ({ currentPage }) => (
  <nav className="navbar">
    <a href="#home" className="logo-link" title="Go to home">
      <img src={logo} alt="logo" className="logo" />
    </a>
    <div className="nav-links">
      <a href="#home" className={currentPage === 'home' ? 'nav-link active' : 'nav-link'}>Home</a>
      <a href="#experience" className={currentPage === 'experience' ? 'nav-link active' : 'nav-link'}>Experience</a>
      <a href="#about" className={currentPage === 'about' ? 'nav-link active' : 'nav-link'}>About</a>
      <a href="#contact" className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
    </div>
  </nav>
);

export default Navigation;
