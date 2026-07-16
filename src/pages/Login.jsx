import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'doctor' && password === 'concurso2026') {
      navigate('/dashboard');
    } else {
      setError('Credenciales incorrectas. (Pista: doctor / concurso2026)');
    }
  };

  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container" style={{ maxWidth: '400px' }}>
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
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{ color: 'var(--color-primary)' }}
            >
              Concurso Casos Clínicos
            </motion.h2>
            <p style={{ color: 'var(--color-text-muted)' }}>Ingreso para Doctores</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label className="form-label" htmlFor="username">Usuario</label>
              <input 
                id="username"
                type="text" 
                className="form-control" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Ingresa tu usuario"
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="password">Contraseña</label>
              <input 
                id="password"
                type="password" 
                className="form-control" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingresa tu contraseña"
                required
              />
            </div>

            {error && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ color: 'var(--color-error)', fontSize: '0.9rem', marginBottom: '1.5rem', textAlign: 'center' }}
              >
                {error}
              </motion.div>
            )}

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Ingresar a la Plataforma
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Login;
