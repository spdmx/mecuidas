import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <header className="hero" id="inicio">
      {/* Background blobs for organic feel */}
      <div className="bg-blob bg-blob-1"></div>
      <div className="bg-blob bg-blob-2"></div>
      
      <div className="container">
        <div className="hero-grid">
          {/* Organic shape image */}
          <div className="hero-image-container animate-fade-in">
            <div className="organic-blob-image">
              <img src="/images/hero.png" alt="Consultorio moderno y amigable" />
            </div>
            {/* Floating Glass element */}
            <div className="floating-glass-badge glass-panel">
              <span className="emoji">✨</span>
              <span>Medicina Moderna</span>
            </div>
          </div>

          {/* Overlapping Glass Content */}
          <div className="hero-content glass-panel animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="badges-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <div className="badge" style={{ marginBottom: 0 }}>Especialista en Medicina Interna</div>
              <div className="badge" style={{ marginBottom: 0 }}>CÉDULA PROFESIONAL: 611895 | MEDICINA INTERNA: AE 01055 | TERAPIA INTENSIVA: 3444764</div>
            </div>
            <h1>Dr. Daniel Hernández Salcedo</h1>
            <p className="hero-subtitle">
              El doctor que se ocupa de ti. Atención médica integral, humana y sin complicaciones. Tu salud en buenas manos.
            </p>
            <div className="hero-actions">
              <a href="tel:55255391" className="btn btn-primary">Llamar para Agendar: 55 25 53 91</a>
              <a href="#servicios" className="btn btn-secondary">Conoce mis servicios</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
