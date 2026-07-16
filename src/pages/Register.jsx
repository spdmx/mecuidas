import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    grado: '',
    hospital: '',
    usuario: '',
    password: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Simulamos un retraso de red
    setTimeout(() => {
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
          <motion.div 
            className="glass-panel animate-fade-in"
            style={{ padding: '4rem 2rem' }}
          >
            <div style={{ color: 'var(--color-success)', marginBottom: '1.5rem' }}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h2 style={{ color: 'var(--color-primary)' }}>¡Registro Exitoso!</h2>
            <p style={{ color: 'var(--color-text-muted)', margin: '1rem 0 2rem' }}>
              Tu cuenta ha sido creada. Ahora puedes iniciar sesión en la plataforma.
            </p>
            <button className="btn btn-primary" onClick={() => navigate('/login')}>
              Ir a Iniciar Sesión
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div className="container" style={{ maxWidth: '500px' }}>
        <button 
          className="btn btn-secondary" 
          onClick={() => navigate('/')}
          style={{ marginBottom: '2rem', padding: '0.5rem 1rem', fontSize: '0.9rem' }}
        >
          ← Volver al Inicio
        </button>
        <motion.div 
          className="glass-panel"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ padding: '3rem 2rem' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ color: 'var(--color-primary)' }}>Registro de Doctores</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>Crea tu cuenta para participar en los concursos de casos clínicos.</p>
          </div>

          <form onSubmit={handleRegister}>
            <div className="form-group">
              <label className="form-label" htmlFor="nombre">Nombre Completo</label>
              <input 
                id="nombre"
                type="text" 
                className="form-control" 
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ej. Dr. Juan Pérez"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="grado">Grado / Especialidad</label>
              <input 
                id="grado"
                type="text" 
                className="form-control" 
                value={formData.grado}
                onChange={handleChange}
                placeholder="Ej. Endocrinólogo"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="hospital">Hospital o Clínica</label>
              <input 
                id="hospital"
                type="text" 
                className="form-control" 
                value={formData.hospital}
                onChange={handleChange}
                placeholder="Nombre de tu institución"
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="usuario">Nombre de Usuario</label>
              <input 
                id="usuario"
                type="text" 
                className="form-control" 
                value={formData.usuario}
                onChange={handleChange}
                placeholder="Crea tu usuario"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="password">Contraseña</label>
              <input 
                id="password"
                type="password" 
                className="form-control" 
                value={formData.password}
                onChange={handleChange}
                placeholder="Crea una contraseña"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
              Registrarse
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Register;
