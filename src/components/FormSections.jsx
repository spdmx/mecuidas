import React from 'react';
import { motion } from 'framer-motion';

const fadeProps = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
  transition: { duration: 0.4 }
};

export const AnamnesisSection = ({ formData, onChange, isReadOnly }) => (
  <motion.div {...fadeProps}>
    <h3 style={{ marginBottom: '1.5rem', color: 'var(--color-primary)' }}>1. Anamnesis</h3>
    
    <div style={{ marginBottom: '2rem' }}>
      <h4 style={{ marginBottom: '1rem' }}>Ficha de identificación</h4>
      <div className="form-group">
        <label className="form-label">Título del caso clínico</label>
        <input 
          type="text" 
          className="form-control" 
          value={formData.titulo || ''}
          onChange={(e) => onChange('titulo', e.target.value)}
          placeholder="Ej. Presentación atípica de..." 
          disabled={isReadOnly}
        />
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div className="form-group">
          <label className="form-label">Género del paciente</label>
          <select 
            className="form-control"
            value={formData.genero || ''}
            onChange={(e) => onChange('genero', e.target.value)}
            disabled={isReadOnly}
          >
            <option value="">Seleccionar género</option>
            <option value="femenino">Femenino</option>
            <option value="masculino">Masculino</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Edad del paciente</label>
          <input 
            type="number" 
            className="form-control" 
            value={formData.edad || ''}
            onChange={(e) => onChange('edad', e.target.value)}
            placeholder="Años" 
            disabled={isReadOnly}
          />
        </div>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div className="form-group">
          <label className="form-label">Lugar de Residencia</label>
          <input 
            type="text" 
            className="form-control" 
            value={formData.residencia || ''}
            onChange={(e) => onChange('residencia', e.target.value)}
            placeholder="Ciudad, Estado, País" 
            disabled={isReadOnly}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Ocupación del paciente</label>
          <input 
            type="text" 
            className="form-control" 
            value={formData.ocupacion || ''}
            onChange={(e) => onChange('ocupacion', e.target.value)}
            placeholder="Ocupación actual" 
            disabled={isReadOnly}
          />
        </div>
      </div>
    </div>

    <div>
      <h4 style={{ marginBottom: '1rem' }}>Antecedentes</h4>
      <div className="form-group">
        <label className="form-label">Heredo-Familiares</label>
        <textarea 
          className="form-control" 
          value={formData.heredo_familiares || ''}
          onChange={(e) => onChange('heredo_familiares', e.target.value)}
          placeholder="Describa los antecedentes heredo-familiares relevantes"
          disabled={isReadOnly}
        ></textarea>
      </div>
      <div className="form-group">
        <label className="form-label">Personales no patológicos</label>
        <textarea 
          className="form-control" 
          value={formData.personales_no_patologicos || ''}
          onChange={(e) => onChange('personales_no_patologicos', e.target.value)}
          placeholder="Hábitos, vivienda, etc."
          disabled={isReadOnly}
        ></textarea>
      </div>
      <div className="form-group">
        <label className="form-label">Personales Patológicos</label>
        <textarea 
          className="form-control" 
          value={formData.personales_patologicos || ''}
          onChange={(e) => onChange('personales_patologicos', e.target.value)}
          placeholder="Enfermedades previas, cirugías, alergias"
          disabled={isReadOnly}
        ></textarea>
      </div>
    </div>
  </motion.div>
);

export const PadecimientoSection = ({ formData, onChange, isReadOnly }) => (
  <motion.div {...fadeProps}>
    <h3 style={{ marginBottom: '1.5rem', color: 'var(--color-primary)' }}>2. Padecimiento Actual</h3>
    
    <div className="form-group">
      <label className="form-label">Signos y síntomas</label>
      <textarea 
        className="form-control" 
        value={formData.signos_sintomas || ''}
        onChange={(e) => onChange('signos_sintomas', e.target.value)}
        placeholder="Evolución y presentación clínica"
        disabled={isReadOnly}
      ></textarea>
    </div>
    
    <div className="form-group">
      <label className="form-label">Exploración Física</label>
      <textarea 
        className="form-control" 
        value={formData.exploracion_fisica || ''}
        onChange={(e) => onChange('exploracion_fisica', e.target.value)}
        placeholder="Hallazgos relevantes a la exploración"
        disabled={isReadOnly}
      ></textarea>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
      <div className="form-group">
        <label className="form-label">Laboratorios</label>
        <textarea 
          className="form-control" 
          value={formData.laboratorios_iniciales || ''}
          onChange={(e) => onChange('laboratorios_iniciales', e.target.value)}
          placeholder="Resultados de pruebas de laboratorio iniciales"
          disabled={isReadOnly}
        ></textarea>
      </div>
      <div className="form-group">
        <label className="form-label">Gabinete</label>
        <textarea 
          className="form-control" 
          value={formData.gabinete_iniciales || ''}
          onChange={(e) => onChange('gabinete_iniciales', e.target.value)}
          placeholder="Estudios de imagen u otros estudios iniciales"
          disabled={isReadOnly}
        ></textarea>
      </div>
    </div>

    <div className="form-group">
      <label className="form-label">Diagnóstico definitivo</label>
      <input 
        type="text" 
        className="form-control" 
        value={formData.diagnostico || ''}
        onChange={(e) => onChange('diagnostico', e.target.value)}
        placeholder="Ingrese el diagnóstico principal" 
        disabled={isReadOnly}
      />
    </div>

    <div className="form-group">
      <label className="form-label">Eventos adversos (Si aplica)</label>
      <textarea 
        className="form-control" 
        value={formData.eventos_adversos || ''}
        onChange={(e) => onChange('eventos_adversos', e.target.value)}
        placeholder="Complicaciones durante la evolución del padecimiento"
        disabled={isReadOnly}
      ></textarea>
    </div>
  </motion.div>
);

export const TratamientoSection = ({ formData, onChange, isReadOnly }) => (
  <motion.div {...fadeProps}>
    <h3 style={{ marginBottom: '1.5rem', color: 'var(--color-primary)' }}>3. Tratamiento y Evolución</h3>
    
    <div className="form-group">
      <label className="form-label">Tratamiento</label>
      <textarea 
        className="form-control" 
        value={formData.tratamiento || ''}
        onChange={(e) => onChange('tratamiento', e.target.value)}
        placeholder="Médico, quirúrgico o intervenciones realizadas"
        disabled={isReadOnly}
      ></textarea>
    </div>
    
    <div className="form-group">
      <label className="form-label">Estado actual del paciente</label>
      <input 
        type="text" 
        className="form-control" 
        value={formData.estado_actual || ''}
        onChange={(e) => onChange('estado_actual', e.target.value)}
        placeholder="Condición clínica actual" 
        disabled={isReadOnly}
      />
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
      <div className="form-group">
        <label className="form-label">Laboratorios (Evolución)</label>
        <textarea 
          className="form-control" 
          value={formData.laboratorios_evolucion || ''}
          onChange={(e) => onChange('laboratorios_evolucion', e.target.value)}
          placeholder="Estudios de control"
          disabled={isReadOnly}
        ></textarea>
      </div>
      <div className="form-group">
        <label className="form-label">Gabinete (Evolución)</label>
        <textarea 
          className="form-control" 
          value={formData.gabinete_evolucion || ''}
          onChange={(e) => onChange('gabinete_evolucion', e.target.value)}
          placeholder="Imágenes de control"
          disabled={isReadOnly}
        ></textarea>
      </div>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
      <div className="form-group">
        <label className="form-label">Pronóstico</label>
        <input 
          type="text" 
          className="form-control" 
          value={formData.pronostico || ''}
          onChange={(e) => onChange('pronostico', e.target.value)}
          placeholder="Ej. Favorable, reservado" 
          disabled={isReadOnly}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Post-tratamiento</label>
        <input 
          type="text" 
          className="form-control" 
          value={formData.post_tratamiento || ''}
          onChange={(e) => onChange('post_tratamiento', e.target.value)}
          placeholder="Seguimiento e indicaciones" 
          disabled={isReadOnly}
        />
      </div>
    </div>

    <div className="form-group">
      <label className="form-label">Conclusiones</label>
      <textarea 
        className="form-control" 
        value={formData.conclusiones || ''}
        onChange={(e) => onChange('conclusiones', e.target.value)}
        placeholder="Discusión y lecciones aprendidas del caso"
        disabled={isReadOnly}
      ></textarea>
    </div>
  </motion.div>
);

export const AdjuntosSection = ({ formData, onChange, isReadOnly }) => {
  const images = formData.images || [];
  const pdfs = formData.pdfs || [];

  const handleSimulateUpload = (e, type) => {
    if (isReadOnly) return;
    if (e.target.files.length > 0) {
      const fileNames = Array.from(e.target.files).map(file => file.name);
      onChange(type, [...(formData[type] || []), ...fileNames]);
    }
  };

  return (
    <motion.div {...fadeProps}>
      <h3 style={{ marginBottom: '1.5rem', color: 'var(--color-primary)' }}>4. Adjuntos y Bibliografía</h3>
      
      <div className="form-group">
        <label className="form-label">Bibliografía consultada</label>
        <textarea 
          className="form-control" 
          value={formData.bibliografia || ''}
          onChange={(e) => onChange('bibliografia', e.target.value)}
          placeholder="Formato APA, Vancouver, etc."
          disabled={isReadOnly}
        ></textarea>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
        <div className="form-group">
          <label className="form-label">Tablas, imágenes y figuras</label>
          {!isReadOnly && (
            <div className="file-upload-wrapper">
              <input 
                type="file" 
                className="file-upload-input" 
                multiple 
                accept="image/*"
                onChange={(e) => handleSimulateUpload(e, 'images')}
              />
              <div style={{ color: 'var(--color-primary)' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginBottom: '0.5rem' }}>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
                <p style={{ margin: 0, fontWeight: 500 }}>Clic para subir imágenes</p>
                <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Solo formatos de imagen</p>
              </div>
            </div>
          )}
          {images.length > 0 ? (
            <div style={{ marginTop: '1rem' }}>
              <p style={{ fontSize: '0.9rem', fontWeight: 600 }}>Archivos seleccionados:</p>
              <ul style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                {images.map((img, i) => <li key={i}>✓ {img}</li>)}
              </ul>
            </div>
          ) : isReadOnly && (
             <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>No hay imágenes adjuntas.</p>
          )}
        </div>

        <div className="form-group">
          <label className="form-label">Archivos adjuntos en formato PDF</label>
          {!isReadOnly && (
            <div className="file-upload-wrapper">
              <input 
                type="file" 
                className="file-upload-input" 
                multiple 
                accept=".pdf"
                onChange={(e) => handleSimulateUpload(e, 'pdfs')}
              />
              <div style={{ color: 'var(--color-error)' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginBottom: '0.5rem' }}>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                <p style={{ margin: 0, fontWeight: 500 }}>Clic para subir PDF</p>
                <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Solo formato .pdf</p>
              </div>
            </div>
          )}
          {pdfs.length > 0 ? (
            <div style={{ marginTop: '1rem' }}>
              <p style={{ fontSize: '0.9rem', fontWeight: 600 }}>Archivos seleccionados:</p>
              <ul style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                {pdfs.map((pdf, i) => <li key={i}>✓ {pdf}</li>)}
              </ul>
            </div>
          ) : isReadOnly && (
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>No hay PDFs adjuntos.</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};
