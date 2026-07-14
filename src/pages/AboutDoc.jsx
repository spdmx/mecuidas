import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { cvData } from '../data/cvData';
import './AboutDoc.css';

const AboutDoc = () => {
  const [showFullCV, setShowFullCV] = useState(false);

  return (
    <div className="about-doc-page">
      <div className="bg-blob bg-blob-1"></div>
      <div className="bg-blob bg-blob-2"></div>
      
      <div className="container about-doc-container">
        <Link to="/" className="back-link">← Volver al inicio</Link>
        
        <div className="doc-header glass-panel animate-fade-in">
          <div className="doc-photo">
            <img src="/images/doctor.png" alt="Dr. Daniel Hernández Salcedo" />
          </div>
          <div className="doc-intro">
            <h1>El lado humano de la medicina</h1>
            <p className="subtitle">Más de cuatro décadas dedicadas a la salud integral de mis pacientes.</p>
            <div className="human-side">
              <p>
                La medicina no solo se trata de prescribir medicamentos o interpretar estudios de laboratorio; se trata de entender al paciente como un ser humano completo. Mi filosofía siempre ha sido brindar una atención empática, escuchando activamente y explicando cada diagnóstico sin tecnicismos innecesarios.
              </p>
              <p>
                A lo largo de mi carrera, mi mayor satisfacción ha sido ver a mis pacientes recuperar no solo su salud, sino su tranquilidad. Creo firmemente que un médico debe ser un aliado y un guía en los momentos donde más vulnerables nos sentimos. Por eso, cuando cruzas la puerta de mi consultorio, sabes que estás en manos de alguien que realmente <strong>se ocupa de ti</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Highlight CV Section */}
        <div className="cv-highlights animate-fade-in" style={{animationDelay: '0.2s'}}>
          <h2 className="section-title text-center">Trayectoria Profesional</h2>
          <div className="title-underline mx-auto"></div>
          
          <div className="highlights-grid">
            <div className="glass-panel highlight-card">
              <h3>🎓 Formación Académica</h3>
              <ul>
                {cvData.education.map((item, i) => (
                  <li key={i}>
                    <strong>{item.year}</strong> - {item.title} <br/>
                    <span className="inst">{item.institution}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass-panel highlight-card">
              <h3>💼 Experiencia Destacada</h3>
              <ul>
                {cvData.experience.map((item, i) => (
                  <li key={i}>
                    <strong>{item.role}</strong> <br/>
                    <span className="inst">{item.place} ({item.period})</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Full CV Toggle */}
        <div className="full-cv-section text-center animate-fade-in" style={{animationDelay: '0.4s'}}>
          <button 
            className="btn btn-primary btn-large toggle-cv-btn"
            onClick={() => setShowFullCV(!showFullCV)}
          >
            <span>{showFullCV ? "Ocultar Curriculum Completo" : "Ver Curriculum Vitae Completo"}</span>
            <div className="btn-glow"></div>
          </button>

          {showFullCV && (
            <div className="full-cv-content glass-panel animate-fade-in">
              <h3>Resumen Curricular Extendido</h3>
              <p className="cv-intro">
                El Dr. Daniel Ramón Hernández Salcedo cuenta con una de las trayectorias más sólidas en el ámbito de la Medicina Interna y la Terapia Intensiva en México, avalada por constantes recertificaciones y reconocimientos académicos.
              </p>
              
              <div className="cv-stats">
                <div className="stat-box">
                  <span className="number">{cvData.stats.publications.split(' ')[0]}</span>
                  <span className="label">Publicaciones<br/>Científicas</span>
                </div>
                <div className="stat-box">
                  <span className="number">{cvData.stats.conferences.split(' ')[0]}</span>
                  <span className="label">Conferencias<br/>Impartidas</span>
                </div>
                <div className="stat-box">
                  <span className="number">40+</span>
                  <span className="label">Años de<br/>Experiencia</span>
                </div>
              </div>

              <div className="cv-details-text text-left">
                <h4>Certificaciones</h4>
                <ul className="cert-list">
                  {cvData.certifications.map((cert, i) => <li key={i}>✓ {cert}</li>)}
                </ul>

                <h4>Investigación y Publicaciones Destacadas</h4>
                <p>
                  Autor y coautor de decenas de artículos en prestigiosas revistas médicas (como la <em>Revista de Medicina Interna de México</em>, <em>Cirugía y Cirujanos</em>, entre otras). Su investigación abarca temas críticos como Medicina Geriátrica, Pancreatitis, Ventilación Mecánica, Diabetes, y Síndrome Nefrótico. Su labor incansable ha contribuido al avance científico de la medicina en el país.
                </p>
                
                <h4>Labor Docente (Formando a las nuevas generaciones)</h4>
                <p>
                  Como Profesor Titular del curso de Medicina Interna avalado por la <strong>UNAM</strong> (2010 - Actualidad), ha formado a numerosas generaciones de especialistas. Además, ha sido profesor titular, conferencista e instructor en programas vitales como ACLS y ATLS. En 2021, recibió el <strong>Reconocimiento por labor como profesor titular de la Especialidad de Medicina Interna</strong> por parte del Consejo Mexicano de Medicina Interna.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutDoc;
