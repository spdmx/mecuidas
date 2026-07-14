import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getCases } from '../utils/storage';

const Dashboard = () => {
  const [cases, setCases] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Load cases from localStorage
    setCases(getCases());
  }, []);

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <section style={{ minHeight: '100vh', padding: '4rem 0' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
          <div>
            <h1 style={{ color: 'var(--color-primary)', fontSize: '2.5rem' }}>Dashboard</h1>
            <p style={{ color: 'var(--color-text-muted)' }}>Bienvenido, Doctor. Gestiona tus casos clínicos aquí.</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button 
              className="btn btn-secondary" 
              onClick={handleLogout}
            >
              Cerrar Sesión
            </button>
            <button 
              className="btn btn-primary" 
              onClick={() => navigate('/case-entry')}
            >
              + Nuevo Caso
            </button>
          </div>
        </div>

        {/* Cases Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {cases.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="glass-panel" 
              style={{ gridColumn: '1 / -1', padding: '4rem 2rem', textAlign: 'center' }}
            >
              <div style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <h3 style={{ marginBottom: '0.5rem' }}>Aún no tienes casos clínicos</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                Comienza creando un nuevo caso para el concurso.
              </p>
              <button className="btn btn-primary" onClick={() => navigate('/case-entry')}>
                Crear Mi Primer Caso
              </button>
            </motion.div>
          ) : (
            cases.map((c, index) => (
              <motion.div 
                key={c.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel"
                style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <span style={{ 
                    padding: '0.3rem 0.8rem', 
                    borderRadius: '20px', 
                    fontSize: '0.8rem', 
                    fontWeight: 600,
                    backgroundColor: c.status === 'published' ? 'rgba(42, 157, 143, 0.15)' : 'rgba(0, 90, 156, 0.15)',
                    color: c.status === 'published' ? 'var(--color-success)' : 'var(--color-primary)'
                  }}>
                    {c.status === 'published' ? '✓ Publicado' : '✎ Guardado'}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                    {new Date(c.updatedAt).toLocaleDateString()}
                  </span>
                </div>
                
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', flexGrow: 1 }}>
                  {c.titulo || 'Caso Clínico sin título'}
                </h3>
                
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {c.diagnostico || 'Sin diagnóstico registrado'}
                </p>

                <button 
                  className={c.status === 'published' ? 'btn btn-secondary' : 'btn btn-primary'}
                  style={{ width: '100%', padding: '0.6rem' }}
                  onClick={() => navigate(`/case-entry/${c.id}`)}
                >
                  {c.status === 'published' ? 'Ver Caso' : 'Editar Caso'}
                </button>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
