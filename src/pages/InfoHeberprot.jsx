import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const InfoHeberprot = () => {
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section style={{ minHeight: '100vh', padding: '4rem 0' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <button 
          className="btn btn-secondary" 
          onClick={() => navigate('/')}
          style={{ marginBottom: '2rem', padding: '0.5rem 1rem', fontSize: '0.9rem' }}
        >
          ← Volver al Inicio
        </button>
        
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ color: 'var(--color-primary)', fontSize: '2.5rem', marginBottom: '1rem' }}>
            Conoce más de Heberprot
          </h1>
          <div style={{ height: '4px', width: '80px', background: 'var(--color-accent)', margin: '0 auto', borderRadius: '2px', marginBottom: '2rem' }}></div>
          
          <motion.img 
            src="/heberprot.jpg" 
            alt="Heberprot-P 75" 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ 
              width: '100%', 
              maxWidth: '500px', 
              borderRadius: '16px', 
              boxShadow: '0 12px 32px rgba(0, 90, 156, 0.15)',
              marginBottom: '2rem',
              objectFit: 'cover'
            }}
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800"; // Fallback placeholder
            }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Sección: Introducción */}
          <motion.div 
            className="glass-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ padding: '2.5rem 3rem' }}
          >
            <p style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--color-primary-light)', marginBottom: '1.5rem' }}>
              Heberprot representa una oportunidad para generar un impacto significativo en la salud pública en México. Más allá del lanzamiento de un medicamento, este proyecto busca contribuir a transformar el abordaje del pie diabético, una de las complicaciones más graves y discapacitantes de la diabetes, que cada año afecta a miles de pacientes y representa un importante reto para el sistema de salud.
            </p>
            <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-dark)', lineHeight: 1.8 }}>
              El impacto de esta iniciativa trasciende el ámbito comercial. Su propósito es impulsar el conocimiento, promover un diagnóstico y tratamiento oportunos y contribuir a que un mayor número de pacientes tenga acceso a alternativas terapéuticas que puedan mejorar su calidad de vida. Cada paciente que conserva su movilidad representa un beneficio para su familia, para el sistema de salud y para la sociedad en su conjunto.
            </p>
            <p style={{ fontWeight: 600, color: 'var(--color-primary)', lineHeight: 1.8 }}>
              Este proyecto no busca únicamente posicionar un medicamento; busca impulsar un cambio en la manera en que México enfrenta el pie diabético.
            </p>
          </motion.div>

          {/* Sección: Antecedentes */}
          <motion.div 
            className="glass-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ padding: '2.5rem 3rem' }}
          >
            <h2 style={{ color: 'var(--color-primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.5rem' }}>📚</span> Antecedentes
            </h2>
            <div style={{ color: 'var(--color-text-dark)', lineHeight: 1.8 }}>
              <p style={{ marginBottom: '1rem' }}>
                La diabetes mellitus representa uno de los mayores desafíos para los sistemas de salud del siglo XXI. Su crecimiento sostenido refleja la interacción de factores demográficos, sociales y epidemiológicos como el envejecimiento poblacional, la urbanización, el sedentarismo y la elevada prevalencia de sobrepeso y obesidad.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                De acuerdo con la International Diabetes Federation (IDF), México se encuentra entre los diez países con mayor número de adultos que viven con diabetes. Las estimaciones más recientes sitúan esta población entre 14 y 15 millones de personas, mientras que la Encuesta Nacional de Salud y Nutrición (ENSANUT) confirma una prevalencia cercana al 17 % en la población adulta. A ello se suma un porcentaje considerable de personas que desconocen su diagnóstico, lo que favorece la progresión silenciosa de las complicaciones.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                La diabetes es responsable de una parte importante de la carga de enfermedad asociada a insuficiencia renal, retinopatía, enfermedad cardiovascular y pie diabético. Estas complicaciones consumen una proporción creciente de los recursos hospitalarios y afectan de manera desproporcionada a poblaciones vulnerables.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                El pie diabético constituye una de las expresiones más complejas de esta problemática. La combinación de neuropatía periférica, enfermedad arterial y procesos infecciosos incrementa el riesgo de ulceración y amputación cuando no existe una intervención temprana.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                Diversas publicaciones científicas estiman que entre el 19 % y el 34 % de las personas con diabetes desarrollarán una úlcera del pie a lo largo de su vida. Asimismo, alrededor del 85 % de las amputaciones mayores están precedidas por una lesión ulcerosa que pudo identificarse y tratarse oportunamente.
              </p>
              <p style={{ fontWeight: 500, color: 'var(--color-primary-light)' }}>
                Esta evidencia modifica profundamente la manera de entender el problema. El desafío no consiste únicamente en tratar la enfermedad avanzada, sino en desarrollar la capacidad del sistema para identificar el riesgo antes de que aparezcan complicaciones irreversibles.
              </p>
            </div>
          </motion.div>

          {/* Sección: Situación Actual */}
          <motion.div 
            className="glass-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ padding: '2.5rem 3rem' }}
          >
            <h2 style={{ color: 'var(--color-primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.5rem' }}>📊</span> Situación Actual
            </h2>
            <div style={{ color: 'var(--color-text-dark)', lineHeight: 1.8 }}>
              <p style={{ marginBottom: '1.5rem', fontWeight: 600 }}>
                El impacto del pie diabético trasciende el ámbito hospitalario y constituye un desafío para la sostenibilidad del sistema de salud.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                Cada paciente que desarrolla una úlcera requiere una atención compleja que involucra consultas especializadas, procedimientos diagnósticos, curaciones frecuentes, antibióticos, estudios vasculares y, en numerosos casos, hospitalización. Cuando la evolución clínica es desfavorable, el tratamiento puede culminar en amputaciones menores o mayores, con un profundo impacto sobre la autonomía del paciente.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                La evidencia internacional demuestra que la supervivencia después de una amputación mayor relacionada con diabetes es limitada y comparable con la observada en diversas enfermedades oncológicas. Además, los pacientes presentan un elevado riesgo de nuevas ulceraciones y de amputación de la extremidad contralateral.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                En México, la magnitud del problema también tiene una dimensión económica. El costo acumulado de hospitalizaciones, rehabilitación, prótesis, incapacidad laboral y pérdida de productividad supera ampliamente la inversión requerida para fortalecer programas preventivos y modelos de atención temprana.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                La transición demográfica del país anticipa que el número absoluto de personas con diabetes continuará creciendo durante las próximas décadas. Sin cambios estructurales en la atención, el sistema enfrentará un incremento proporcional de las complicaciones y de la demanda de servicios especializados.
              </p>
              <p style={{ fontWeight: 500, color: 'var(--color-primary-light)' }}>
                Esta tendencia convierte al pie diabético en un problema estratégico que requiere políticas públicas orientadas a la prevención, la coordinación interinstitucional y el fortalecimiento del primer nivel de atención.
              </p>
            </div>
          </motion.div>

          {/* Sección: Necesidad */}
          <motion.div 
            className="glass-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ padding: '2.5rem 3rem' }}
          >
            <h2 style={{ color: 'var(--color-primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.5rem' }}>🎯</span> Necesidad
            </h2>
            <div style={{ color: 'var(--color-text-dark)', lineHeight: 1.8 }}>
              <p style={{ marginBottom: '1rem', fontWeight: 600 }}>
                El costo del pie diabético no puede medirse únicamente en términos financieros.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                Detrás de cada amputación existe una historia de deterioro funcional, pérdida de independencia, impacto psicológico y transformación de la dinámica familiar.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                Desde la perspectiva institucional, las complicaciones avanzadas generan una elevada utilización de recursos hospitalarios. Los pacientes suelen requerir múltiples ingresos, procedimientos quirúrgicos, terapias antimicrobianas prolongadas, rehabilitación y seguimiento especializado.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                A ello se suman los costos indirectos derivados de incapacidades laborales, jubilaciones anticipadas, necesidad de cuidadores y disminución de la productividad. En muchos casos, la amputación modifica de manera permanente la capacidad económica de una familia.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Diversos estudios internacionales concluyen que los programas integrales de prevención del pie diabético logran reducir el número de amputaciones y generan una mejor relación costo-beneficio que los modelos centrados exclusivamente en la atención hospitalaria.
              </p>
              <div style={{ background: 'rgba(42, 157, 143, 0.1)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid var(--color-success)' }}>
                <p style={{ margin: 0, fontWeight: 600, color: 'var(--color-success)' }}>
                  La decisión de invertir en prevención no debe entenderse como un gasto adicional, sino como una estrategia para preservar vidas, optimizar recursos públicos y fortalecer la sostenibilidad del sistema de salud.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfoHeberprot;
