import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { getCaseById, saveCase } from '../utils/storage';
import {
  AnamnesisSection,
  PadecimientoSection,
  TratamientoSection,
  AdjuntosSection
} from '../components/FormSections';

const CaseEntry = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({});
  const [isReadOnly, setIsReadOnly] = useState(false);

  const totalSteps = 4;

  useEffect(() => {
    if (id) {
      const existingCase = getCaseById(id);
      if (existingCase) {
        setFormData(existingCase);
        if (existingCase.status === 'published') {
          setIsReadOnly(true);
        }
      } else {
        // If ID doesn't exist, just go to dashboard or start a new case
        navigate('/dashboard');
      }
    }
  }, [id, navigate]);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) setCurrentStep(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  const handleSave = (status) => {
    setIsSubmitting(true);
    
    // Minimal mock delay
    setTimeout(() => {
      const caseToSave = { ...formData, status };
      saveCase(caseToSave);
      setIsSubmitting(false);
      navigate('/dashboard');
    }, 800);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStep !== totalSteps) {
      handleNext();
    }
  };

  return (
    <section style={{ minHeight: '100vh', padding: '4rem 0' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div>
            <h2 style={{ color: 'var(--color-primary)' }}>
              {isReadOnly ? 'Visualizando Caso Clínico' : id ? 'Editando Caso Clínico' : 'Nuevo Caso Clínico'}
            </h2>
            {isReadOnly && <span style={{ color: 'var(--color-success)', fontWeight: 600, fontSize: '0.9rem' }}>✓ Estado: Publicado</span>}
          </div>
          <button 
            className="btn btn-secondary" 
            style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}
            onClick={() => navigate('/dashboard')}
          >
            Volver al Dashboard
          </button>
        </div>

        {/* Stepper Progress */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3rem', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '50%', left: '0', right: '0', height: '4px', background: 'rgba(0, 90, 156, 0.1)', zIndex: 0, transform: 'translateY(-50%)', borderRadius: '2px' }}></div>
          <div style={{ position: 'absolute', top: '50%', left: '0', width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%`, height: '4px', background: isReadOnly ? 'var(--color-success)' : 'var(--color-primary)', zIndex: 0, transform: 'translateY(-50%)', borderRadius: '2px', transition: 'width 0.4s ease' }}></div>
          
          {[1, 2, 3, 4].map(step => (
            <div 
              key={step}
              onClick={() => {
                // Allow direct navigation if readOnly
                if (isReadOnly) setCurrentStep(step);
              }}
              style={{ 
                width: '40px', height: '40px', borderRadius: '50%', 
                background: currentStep >= step ? (isReadOnly ? 'var(--color-success)' : 'var(--color-primary)') : 'var(--color-white)',
                color: currentStep >= step ? 'var(--color-white)' : 'var(--color-text-muted)',
                border: `2px solid ${currentStep >= step ? (isReadOnly ? 'var(--color-success)' : 'var(--color-primary)') : 'rgba(0, 90, 156, 0.2)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 'bold', zIndex: 1, transition: 'all 0.4s ease',
                boxShadow: currentStep >= step ? `0 4px 10px ${isReadOnly ? 'rgba(42, 157, 143, 0.3)' : 'rgba(0, 90, 156, 0.3)'}` : 'none',
                cursor: isReadOnly ? 'pointer' : 'default'
              }}
            >
              {step}
            </div>
          ))}
        </div>

        <motion.div className="glass-panel" style={{ padding: '3rem' }}>
          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {currentStep === 1 && <AnamnesisSection key="step1" formData={formData} onChange={handleChange} isReadOnly={isReadOnly} />}
              {currentStep === 2 && <PadecimientoSection key="step2" formData={formData} onChange={handleChange} isReadOnly={isReadOnly} />}
              {currentStep === 3 && <TratamientoSection key="step3" formData={formData} onChange={handleChange} isReadOnly={isReadOnly} />}
              {currentStep === 4 && <AdjuntosSection key="step4" formData={formData} onChange={handleChange} isReadOnly={isReadOnly} />}
            </AnimatePresence>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(0, 90, 156, 0.1)' }}>
              <button 
                type="button" 
                className="btn btn-secondary" 
                onClick={handlePrev}
                disabled={currentStep === 1 || isSubmitting}
                style={{ visibility: currentStep === 1 ? 'hidden' : 'visible' }}
              >
                Anterior
              </button>
              
              <div style={{ display: 'flex', gap: '1rem' }}>
                {!isReadOnly && (
                  <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={() => handleSave('draft')}
                    disabled={isSubmitting}
                  >
                    Guardar Borrador
                  </button>
                )}
                
                {currentStep < totalSteps ? (
                  <button 
                    type="submit" 
                    className={isReadOnly ? 'btn btn-secondary' : 'btn btn-primary'}
                    disabled={isSubmitting}
                  >
                    Siguiente Sección
                  </button>
                ) : (
                  !isReadOnly && (
                    <button 
                      type="button" 
                      className="btn btn-primary"
                      onClick={() => handleSave('published')}
                      disabled={isSubmitting}
                      style={{ background: 'linear-gradient(145deg, var(--color-success), #21867a)' }}
                    >
                      {isSubmitting ? 'Guardando...' : 'Publicar Caso Definitivo'}
                    </button>
                  )
                )}
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseEntry;
