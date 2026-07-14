import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import './NutritionGuide.css';

// --- Framer Motion Variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardItem = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const dangerZoom = {
  hidden: { opacity: 0, scale: 0.9, rotateX: -5 },
  visible: { opacity: 1, scale: 1, rotateX: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const NutritionGuide = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="nutrition-page">
      <div className="bg-blob bg-blob-1"></div>
      <div className="bg-blob bg-blob-2"></div>
      <div className="bg-blob bg-blob-3"></div>

      <div className="container nutrition-container">
        <Link to="/" className="back-link">← Volver al inicio</Link>
        
        {/* Header / Hero */}
        <motion.header 
          className="nutri-header glass-panel"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div className="nutri-header-content">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Guía Nutricional GLP-1
            </motion.h1>
            <motion.p 
              className="subtitle"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Optimizando tu salud y maximizando resultados
            </motion.p>
            <motion.div 
              className="nutri-intro-box"
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3>🧬 ¿Por qué importa la nutrición con tratamientos GLP-1?</h3>
              <p>
                Los agonistas del receptor GLP-1 (como la semaglutida o tirzepatida) reducen el apetito y la ingesta calórica en hasta un 40%. Sin orientación nutricional especializada, esto puede derivar en pérdida de masa muscular y deficiencias de nutrientes.
              </p>
              <p>
                Un consenso multidisciplinario (revista <em>Obesity</em>, 2025) concluye que <strong>sin acompañamiento nutricional adecuado, se pierde gran parte del potencial terapéutico de estos medicamentos</strong>. Esta guía está adaptada con alimentos accesibles en México para asegurar tu éxito.
              </p>
            </motion.div>
          </div>
        </motion.header>

        {/* Recomendados - Grid Interactivo */}
        <section className="nutri-section">
          <motion.h2 
            className="section-title text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
          >
            ✅ El Plato Ideal (Alimentos Recomendados)
          </motion.h2>
          
          <motion.div 
            className="nutri-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={cardItem} className="nutri-card glass-panel card-protein">
              <div className="card-icon">🥩</div>
              <h3>1. Proteínas Magras</h3>
              <p className="priority-tag">La prioridad #1 en cada comida</p>
              <p>Meta: 20–30 g por comida. Fundamental para evitar la pérdida de músculo.</p>
              <ul className="food-list">
                <li>Pechuga de pollo, pavo molido</li>
                <li>Pescado (tilapia, atún, mojarra, salmón)</li>
                <li>Huevo y claras de huevo</li>
                <li>Yogur griego natural y Queso cottage</li>
                <li><span className="star">⭐</span> Frijoles, lentejas y habas (proteína + fibra)</li>
              </ul>
            </motion.div>

            <motion.div variants={cardItem} className="nutri-card glass-panel card-veggies">
              <div className="card-icon">🥦</div>
              <h3>2. Verduras No Almidonadas</h3>
              <p className="priority-tag">La base del plato</p>
              <p>Altas en fibra, vitaminas y minerales con mínimo aporte calórico.</p>
              <ul className="food-list">
                <li><span className="star">⭐</span> Nopal (superalimento local, regula glucosa)</li>
                <li>Chayote, calabacita, pepino</li>
                <li>Brócoli, espinacas, jitomate</li>
                <li>Quelites, verdolagas, huazontles</li>
              </ul>
            </motion.div>

            <motion.div variants={cardItem} className="nutri-card glass-panel card-carbs">
              <div className="card-icon">🌾</div>
              <h3>3. Carbohidratos Complejos</h3>
              <p className="priority-tag">Bajo índice glucémico</p>
              <p>La estrategia no es eliminarlos, sino elegir los correctos. Siempre después de la proteína.</p>
              <ul className="food-list">
                <li><span className="star">⭐</span> Tortilla de maíz nixtamalizado (mejor que la de harina)</li>
                <li>Avena en grano, arroz integral</li>
                <li>Quinoa, amaranto, camote</li>
                <li>Tostadas de maíz horneadas</li>
              </ul>
            </motion.div>

            <motion.div variants={cardItem} className="nutri-card glass-panel card-fats">
              <div className="card-icon">🥑</div>
              <h3>4. Grasas Saludables</h3>
              <p className="priority-tag">Con moderación</p>
              <p>Esenciales para vitaminas A, D, E, K y la función hormonal.</p>
              <ul className="food-list">
                <li><span className="star">⭐</span> Aguacate</li>
                <li><span className="star">⭐</span> Pepitas y ajonjolí (ricas en zinc)</li>
                <li>Aceite de oliva extra virgen</li>
                <li>Nuez de Castilla, almendras</li>
                <li>Semillas de chía y linaza</li>
              </ul>
            </motion.div>

            <motion.div variants={cardItem} className="nutri-card glass-panel card-fruits">
              <div className="card-icon">🍓</div>
              <h3>5. Frutas (Enteras)</h3>
              <p className="priority-tag">Postre o snack inteligente</p>
              <p>Preferir enteras. Evitar jugos para no causar picos de glucosa.</p>
              <ul className="food-list">
                <li><span className="star">⭐</span> Guayaba (mucha vit C y fibra)</li>
                <li>Manzana, pera, ciruela</li>
                <li>Fresas y frutos rojos</li>
                <li>Tejocotes, tunas</li>
              </ul>
            </motion.div>

            <motion.div variants={cardItem} className="nutri-card glass-panel card-structure">
              <div className="card-icon">📐</div>
              <h3>6. Estructura de Comidas</h3>
              <p className="priority-tag">Reglas de Oro</p>
              <p>Claves para evitar molestias y maximizar el efecto:</p>
              <ul className="food-list">
                <li><span className="star">⭐</span> 4–6 comidas pequeñas al día</li>
                <li><span className="star">⭐</span> Empezar siempre con <strong>proteína</strong></li>
                <li>Luego verdura, carbohidrato al final en porción moderada</li>
                <li>Beber agua <em>entre</em> comidas (no durante)</li>
                <li>Mínimo 25–35 g de fibra al día</li>
              </ul>
            </motion.div>
          </motion.div>
        </section>

        {/* Zona a evitar */}
        <motion.section 
          className="nutri-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          variants={dangerZoom}
        >
          <div className="danger-card glass-panel">
            <div className="danger-header">
              <h2>❌ Alimentos a EVITAR o LIMITAR</h2>
              <p>Estos alimentos agravan los efectos secundarios gastrointestinales y dificultan el tratamiento.</p>
            </div>
            <div className="danger-list-wrapper">
              <ul className="danger-list">
                <li>Comida frita, carnitas, chicharrón</li>
                <li>Tortilla de harina y pan dulce</li>
                <li>Refrescos, jugos embotellados o naturales</li>
                <li>Alcohol y ultraprocesados</li>
                <li>Tamales de manteca</li>
                <li>Dietas extremas (riesgo de desnutrición)</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Hábitos e Hidratación */}
        <motion.section 
          className="habits-section"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={cardItem} className="habit-card glass-panel water-card">
            <div className="card-icon">💧</div>
            <h3>Hidratación Estratégica</h3>
            <p>El vaciado gástrico lento reduce la sensación de sed. El riesgo de deshidratación subclínica es alto.</p>
            <div className="habit-tip">
              <strong>Regla de oro:</strong> Beber agua PRINCIPALMENTE entre comidas. Evita tomar mucha agua durante la comida, ya que reduce la saciedad rápida y puede empeorar las náuseas.
            </div>
          </motion.div>
          
          <motion.div variants={cardItem} className="habit-card glass-panel supplement-card">
            <div className="card-icon">💊</div>
            <h3>Suplementación</h3>
            <p>Con menos apetito, es difícil cubrir todas las vitaminas. Nutrientes clave para el sistema inmune (Vit C, Vit D, Zinc) pueden requerir suplementación.</p>
            <p className="warning-text"><em>*Ningún suplemento debe iniciarse sin indicación médica o del nutriólogo.</em></p>
          </motion.div>
        </motion.section>

        {/* Fuentes */}
        <motion.footer 
          className="nutri-sources"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="disclaimer-alert">
            <p><strong>⚠️ Aviso Importante:</strong> Esta guía fue diseñada solo con fines informativos y de apoyo educativo. No es una consulta médica ni sustituye la valoración personalizada de un profesional de la salud. Consulta siempre a tu médico o nutriólogo antes de realizar cambios en tu dieta o tratamiento.</p>
          </div>
          <h4>📚 Fuentes Consultadas y Evidencia Clínica</h4>
          <ul>
            <li>Mozaffarian D, et al. Nutritional priorities to support GLP-1 therapy for obesity. <em>Obesity (Silver Spring)</em>. 2025;33:1475–1503.</li>
            <li>OMS. Global guideline on GLP-1 therapies for obesity in adults. <em>JAMA</em>, diciembre 2025.</li>
            <li>Manson JA, et al. Diet and lifestyle recommendations for GLP-1 users. <em>JAMA Internal Medicine</em>, julio 2025.</li>
            <li>NOM-008-SSA3-2017. Tratamiento integral del sobrepeso y la obesidad. Secretaría de Salud, México.</li>
            <li>Eduplace.mx / Clivi.com.mx / GNC México (fuentes con contexto mexicano).</li>
          </ul>
        </motion.footer>
      </div>
      <Footer />
    </div>
  );
};

export default NutritionGuide;
