import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <section className="about" id="nosotros">
      <div className="container">
        <div className="about-anti-grid">
          
          <div className="about-text-content glass-panel">
            <h2 className="section-title">El doctor al que vas cuando no sabes con quién ir</h2>
            <div className="title-underline"></div>
            <p>
              Elegir un médico a veces puede ser abrumador. Como médico internista, mi enfoque es ver tu salud como un todo, no solo tratar síntomas aislados.
            </p>
            <p>
              Me dedico a escucharte, entender tu situación y guiarte de la manera más clara posible, sin llenarte de tecnicismos. Mi objetivo es que te sientas cuidado, seguro y acompañado en cada paso hacia tu bienestar.
            </p>
            <ul className="about-features">
              <li>
                <div className="icon">✓</div>
                <span>Atención empática y sin prisas</span>
              </li>
              <li>
                <div className="icon">✓</div>
                <span>Diagnósticos precisos y comprensibles</span>
              </li>
              <li>
                <div className="icon">✓</div>
                <span>Seguimiento verdaderamente personalizado</span>
              </li>
            </ul>
            
            <div style={{ marginTop: '2.5rem' }}>
              <Link to="/conoce-al-doc" className="btn btn-primary">
                Conoce más del Doc
              </Link>
            </div>
          </div>
          
          <div className="about-visuals">
            <div className="doctor-image-wrapper">
              <img src="/images/doctor.png" alt="Dr. Daniel Hernández Salcedo" />
            </div>
            
            <div className="experience-glass-badge glass-panel">
              <span className="number">+10</span>
              <span className="text">Años de<br/>Experiencia</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
