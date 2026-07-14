import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contacto">
      <div className="container">
        
        <div className="contact-fluid-layout">
          
          <div className="contact-info-container">
            <h2 className="section-title">Agenda tu cita</h2>
            <p className="contact-intro">
              Estoy aquí para ayudarte. Contáctame directamente por teléfono para agendar una cita o resolver cualquier duda.
            </p>
            
            <div className="contact-cards">
              <div className="contact-glass-card glass-panel">
                <div className="icon">📞</div>
                <div className="details">
                  <h3>Llámanos</h3>
                  <a href="tel:55255391" className="highlight">55 25 53 91</a>
                </div>
              </div>
              
              <a href="https://www.google.com/maps/search/?api=1&query=Hospital+Angeles+Clinica+Londres,+Frontera+74,+Roma+Nte.,+CDMX" target="_blank" rel="noopener noreferrer" className="contact-glass-card glass-panel clickable-card">
                <div className="icon">📍</div>
                <div className="details">
                  <h3>Ubicación</h3>
                  <p>Hospital Ángeles Clínica Londres</p>
                  <span className="sub-text">Frontera 74, Int. 725, Roma Nte., CDMX</span>
                </div>
              </a>
              
              <div className="contact-glass-card glass-panel">
                <div className="icon">🕒</div>
                <div className="details">
                  <h3>Horarios</h3>
                  <p>Lunes a Viernes</p>
                  <span className="sub-text">Previa cita</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-cta-wrapper">
            {/* Background decorative blob for the CTA */}
            <div className="cta-blob"></div>
            
            <div className="contact-cta-glass glass-panel">
              <div className="cta-content">
                <span className="cta-emoji">🩺</span>
                <h3>¿Tienes alguna urgencia o duda sobre un tratamiento?</h3>
                <p>La mejor manera de cuidar tu salud es la prevención. No dejes para mañana ese chequeo que necesitas hoy.</p>
                <a href="tel:55255391" className="btn btn-primary btn-cta">
                  <span>Llamar Ahora</span>
                  <div className="btn-glow"></div>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
