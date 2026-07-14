import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const servicesList = [
    {
      id: 1,
      icon: "🩺",
      title: "Consulta de Primer Contacto",
      description: "Soy el doctor al que vas cuando no sabes con quién ir. Realizo una valoración integral inicial para darte el mejor camino a seguir para tu recuperación."
    },
    {
      id: 2,
      icon: "❤️",
      title: "Control de Diabetes e Hipertensión",
      description: "Manejo cuidadoso, actualizado y empático de enfermedades crónicas para que puedas llevar una vida plena, con la tranquilidad de estar controlado."
    },
    {
      id: 3,
      icon: "📋",
      title: "Valoraciones Preoperatorias",
      description: "Evaluaciones exhaustivas antes de cualquier cirugía para garantizar tu seguridad y bienestar en el quirófano, trabajando en equipo con tu cirujano."
    }
  ];

  return (
    <section className="services" id="servicios">
      <div className="container">
        <div className="services-header glass-panel">
          <h2 className="section-title">¿Cómo te puedo ayudar?</h2>
          <p className="section-subtitle">
            Servicios médicos diseñados para cuidar de ti con la mayor calidad humana, usando la mejor evidencia científica disponible.
          </p>
        </div>
        
        <div className="services-staggered-layout">
          {servicesList.map((service, index) => (
            <div className={`service-glass-card glass-panel staggered-${index}`} key={service.id}>
              <div className="service-icon-wrapper">
                <div className="service-icon">{service.icon}</div>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              {service.id === 2 && (
                <>
                  <ul>
                    <li>• Diagnóstico oportuno</li>
                    <li>• Planes de tratamiento actualizados (Ej. GLP-1)</li>
                    <li>• Monitoreo constante</li>
                    <li>• Prevención de complicaciones</li>
                  </ul>
                  <div style={{ marginTop: '1.5rem' }}>
                    <Link to="/guia-nutricional" className="btn btn-outline" style={{ width: '100%', textAlign: 'center', padding: '0.8rem' }}>Ver Guía Nutricional GLP-1</Link>
                  </div>
                </>
              )}
              <div className="card-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
