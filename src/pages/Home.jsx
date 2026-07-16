import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const navigate = useNavigate();

  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 2rem' }}>
      <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3rem' }}
        >
          <h1 style={{ fontSize: '3.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
            Plataforma de Casos Clínicos
          </h1>
          <h2 style={{ fontSize: '2rem', color: 'var(--color-accent)', fontWeight: 400 }}>
            Bienvenido al nuevo mundo del tratamiento del pie diabético
          </h2>
        </motion.div>

        <motion.div
          className="glass-panel"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ padding: '3rem 2rem', marginBottom: '3rem', textAlign: 'left' }}
        >
          <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>
            Sobre Heberprot
          </h3>
          <p style={{ color: 'var(--color-text-dark)', fontSize: '1.1rem', lineHeight: 1.8 }}>
            Heberprot representa una oportunidad para generar un impacto significativo en la salud pública en México. Más allá del lanzamiento de un medicamento, este proyecto busca contribuir a transformar el abordaje del pie diabético, una de las complicaciones más graves y discapacitantes de la diabetes, que cada año afecta a miles de pacientes y representa un importante reto para el sistema de salud.
          </p>
        </motion.div>

        <motion.div 
          style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button 
            className="btn btn-primary" 
            style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}
            onClick={() => navigate('/login')}
          >
            Ingreso
          </button>
          <button 
            className="btn btn-secondary" 
            style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}
            onClick={() => navigate('/register')}
          >
            Registro
          </button>
          <button 
            className="btn btn-secondary" 
            style={{ padding: '1rem 3rem', fontSize: '1.1rem', border: '1px solid var(--color-accent)', color: 'var(--color-accent)' }}
            onClick={() => navigate('/heberprot')}
          >
            Conoce más de Heberprot
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
