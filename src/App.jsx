import { motion } from 'framer-motion';

const placeholderShots = [
  { title: 'Escena en spotlight', ratio: 'landscape', image: '/images/28-08/10.jpg' },
  { title: 'Backstage', ratio: 'portrait', image: '/images/28-08/12.jpg' },
  { title: 'Ritmo de escenario', ratio: 'square', image: '/images/28-08/09.jpg' },
  { title: 'Luz teatral', ratio: 'landscape', image: '/images/28-08/14.jpg' },
  { title: 'Atmósfera íntima', ratio: 'portrait', image: '/images/sea-and-coffee/04.jpg' },
  { title: 'Detalle autoral', ratio: 'square', image: '/images/sea-and-coffee/08.jpg' },
];

const services = [
  'Retratos',
  'Editorial',
  'Lifestyle',
  'Cobertura de eventos',
];

export default function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="brand-block">
          <span className="brand-kicker">Portfolio</span>
          <div className="brand-name">Lucila Aguilar</div>
        </div>
        <nav className="topnav">
          <a href="#trabajos">Trabajos</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow">Fotografía</span>
            <h1>Imágenes con piel, atmósfera y memoria.</h1>
            <p>
              Portfolio de Lucila Aguilar. Retratos, editoriales y escenas con una mirada íntima, femenina y cinematográfica.
            </p>
            <div className="hero-actions">
              <a href="#trabajos" className="primary-link">Ver trabajos</a>
              <a href="#contacto" className="secondary-link">Trabajemos juntas</a>
            </div>
          </motion.div>

          <motion.div
            className="hero-frame"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <img className="hero-photo ph-a" src="/images/28-08/09.jpg" alt="Lucila Aguilar portfolio hero" />
            <div className="hero-note">Selección inicial armada con material real del portfolio.</div>
          </motion.div>
        </section>

        <section className="services-strip">
          {services.map((item) => (
            <div key={item} className="service-pill">{item}</div>
          ))}
        </section>

        <section id="trabajos" className="gallery-section">
          <div className="section-heading">
            <span className="eyebrow">Selección</span>
            <h2>Una base visual para después reemplazar con sus fotos reales.</h2>
          </div>

          <div className="masonry-grid">
            {placeholderShots.map((shot, index) => (
              <motion.article
                key={shot.title}
                className={`shot-card ${shot.ratio}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: index * 0.04 }}
              >
                <img className="shot-visual" src={shot.image} alt={shot.title} loading="lazy" />
                <div className="shot-meta">
                  <span>{shot.title}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="sobre-mi" className="about-section">
          <div className="about-copy">
            <span className="eyebrow">Sobre mí</span>
            <h2>Una fotógrafa que trabaja desde la emoción, la luz y el detalle.</h2>
            <p>
              Esta sección está lista para que después pongamos su bio real. La idea es que se sienta editorial, sensible y profesional al mismo tiempo, sin parecer una plantilla genérica.
            </p>
          </div>
          <div className="about-panel">
            <div className="about-stat">
              <span className="stat-label">Estilo</span>
              <strong>Editorial · Íntimo · Cinemático</strong>
            </div>
            <div className="about-stat">
              <span className="stat-label">Ideal para</span>
              <strong>Retratos, marcas, campañas y contenido visual</strong>
            </div>
          </div>
        </section>

        <section id="contacto" className="contact-section">
          <div>
            <span className="eyebrow">Contacto</span>
            <h2>Cuando me pases su info, acá van Instagram, WhatsApp y mail.</h2>
          </div>
          <div className="contact-box">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://wa.me" target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="mailto:hola@lucilaaguilar.com">Mail</a>
          </div>
        </section>
      </main>
    </div>
  );
}
