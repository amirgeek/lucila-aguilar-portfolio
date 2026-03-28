import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    slug: 'escena-28-08',
    category: 'Cobertura / Escena',
    title: '28/08 — Escena y backstage',
    description:
      'Una serie con luces duras, escenario, momentos detrás de cámara y retratos con atmósfera teatral.',
    cover: '/images/28-08/09.jpg',
    hero: '/images/28-08/10.jpg',
    photos: Array.from({ length: 18 }, (_, i) => `/images/28-08/${String(i + 7).padStart(2, '0')}.jpg`),
  },
  {
    slug: 'sea-and-coffee',
    category: 'Lifestyle / Detalle',
    title: 'Sea and Coffee',
    description:
      'Una serie más íntima y observacional, con detalles, objetos, café, comida y una mirada más cotidiana.',
    cover: '/images/sea-and-coffee/04.jpg',
    hero: '/images/sea-and-coffee/08.jpg',
    photos: Array.from({ length: 10 }, (_, i) => `/images/sea-and-coffee/${String(i + 1).padStart(2, '0')}.jpg`),
  },
];

const services = ['Retratos', 'Editorial', 'Lifestyle', 'Cobertura de eventos'];

export default function App() {
  const [activeProject, setActiveProject] = useState(null);

  const currentProject = useMemo(
    () => projects.find((project) => project.slug === activeProject) || null,
    [activeProject]
  );

  if (currentProject) {
    return <ProjectView project={currentProject} onBack={() => setActiveProject(null)} />;
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="brand-block">
          <span className="brand-kicker">Portfolio</span>
          <div className="brand-name">Lucila Aguilar</div>
        </div>
        <nav className="topnav">
          <a href="#proyectos">Proyectos</a>
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
              Portfolio de Lucila Aguilar. Retratos, editoriales y coberturas con una mirada íntima, sensible y cinematográfica.
            </p>
            <div className="hero-actions">
              <a href="#proyectos" className="primary-link">Ver proyectos</a>
              <a href="#contacto" className="secondary-link">Trabajemos juntas</a>
            </div>
          </motion.div>

          <motion.div
            className="hero-frame"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <img className="hero-photo ph-a" src={projects[0].hero} alt={projects[0].title} />
            <div className="hero-note">Portfolio en construcción con material real seleccionado del archivo.</div>
          </motion.div>
        </section>

        <section className="services-strip">
          {services.map((item) => (
            <div key={item} className="service-pill">{item}</div>
          ))}
        </section>

        <section id="proyectos" className="projects-section">
          <div className="section-heading">
            <span className="eyebrow">Proyectos</span>
            <h2>Series armadas por sesión, no una galería suelta.</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.button
                key={project.slug}
                className="project-card"
                onClick={() => setActiveProject(project.slug)}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <img src={project.cover} alt={project.title} className="project-cover" />
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span className="project-cta">Ver proyecto completo</span>
                </div>
              </motion.button>
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
            <a href="https://www.instagram.com/lucilaaguilar" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://wa.me/5492235041316" target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="https://wa.me/5492235041316" target="_blank" rel="noreferrer">Reservar sesión</a>
          </div>
        </section>
      </main>
    </div>
  );
}

function ProjectView({ project, onBack }) {
  return (
    <div className="site-shell project-shell">
      <header className="topbar detail-topbar">
        <button className="back-project" onClick={onBack}>← Volver al portfolio</button>
        <div className="brand-name small-brand">Lucila Aguilar</div>
      </header>

      <main>
        <section className="project-hero">
          <div className="project-hero-copy">
            <span className="eyebrow">{project.category}</span>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
          </div>
          <img className="project-hero-image" src={project.hero} alt={project.title} />
        </section>

        <section className="project-gallery">
          {project.photos.map((src, index) => (
            <motion.figure
              key={src}
              className={`project-shot ${index % 5 === 0 ? 'wide' : index % 3 === 0 ? 'tall' : ''}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: (index % 6) * 0.04 }}
            >
              <img src={src} alt={`${project.title} ${index + 1}`} loading="lazy" />
            </motion.figure>
          ))}
        </section>
      </main>
    </div>
  );
}
