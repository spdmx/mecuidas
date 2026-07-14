import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h3>Dr. Daniel Hernández S.</h3>
          <p className="footer-subtitle">Médico Internista</p>
          <p className="brand-tagline">El doctor que se ocupa de ti.</p>
        </div>
        
        <div className="footer-links">
          <h4>Enlaces</h4>
          <ul>
            <li><a href="#about">Acerca de</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><Link to="/conoce-al-doc">Conoce al Doc</Link></li>
            <li><Link to="/guia-nutricional">Guía Nutricional</Link></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h4>Atención</h4>
          <a href="https://www.google.com/maps/search/?api=1&query=Hospital+Angeles+Clinica+Londres,+Frontera+74,+Roma+Nte.,+CDMX" target="_blank" rel="noopener noreferrer" className="footer-map-link">
            <p className="hospital-name">Hospital Ángeles Clínica Londres</p>
            <p className="footer-sub-text">Frontera 74, Int. 725, Roma Nte.</p>
          </a>
          <p>Tel: <a href="tel:55255391" className="phone-link">55 25 53 91</a></p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Dr. Daniel Hernández Salcedo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
