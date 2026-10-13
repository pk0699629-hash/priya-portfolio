
import { useState } from "react";
import "./index.css";

const skills = [
  { name: "Python", icon: "🐍", level: "Programming" },
  { name: "JavaScript", icon: "⚡", level: "Programming" },
  { name: "React.js", icon: "⚛️", level: "Frontend" },
  { name: "HTML & CSS", icon: "🎨", level: "Frontend" },
  { name: "Tailwind CSS", icon: "💎", level: "Frontend" },
  { name: "Firebase", icon: "🔥", level: "Backend & Auth" },
  { name: "Pandas & NumPy", icon: "📊", level: "Data Science" },
  { name: "Scikit-learn", icon: "🤖", level: "Machine Learning" },
  { name: "Flask", icon: "🧪", level: "Backend" },
  { name: "SQLite", icon: "🗄️", level: "Database" },
];

const projects = [
  {
    number: "01",
    icon: "🤖",
    category: "AI / MACHINE LEARNING",
    name: "AI Agent",
    description:
      "An AI-powered application designed to assist users with intelligent responses and useful interactions.",
    tech: ["Python", "Flask", "SQLite", "OpenRouter"],
    color: "violet",
  },
  {
    number: "02",
    icon: "📈",
    category: "DATA SCIENCE",
    name: "Customer Churn Prediction",
    description:
      "A machine learning project that analyzes customer data to identify customers who may leave a service.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    color: "blue",
  },
  {
    number: "03",
    icon: "🚀",
    category: "AI CAREER PLATFORM",
    name: "CareerPilotAI",
    description:
      "A career guidance platform featuring career recommendations, skill-gap analysis and learning resources.",
    tech: ["React", "JavaScript", "Firebase"],
    color: "pink",
  },
  {
    number: "04",
    icon: "🛡️",
    category: "SOCIAL IMPACT",
    name: "SafeHer",
    description:
      "A women-safety website concept designed to make safety resources and emergency information accessible.",
    tech: ["React", "JavaScript", "CSS", "Firebase"],
    color: "orange",
  },
  {
    number: "05",
    icon: "🎮",
    category: "WEB EXPERIMENT",
    name: "Overthinker Simulator",
    description:
      "A creative web experience exploring overthinking through an interactive and engaging interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    color: "green",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />

      <header className="site-header">
        <nav className="navbar container">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand-mark">P.</span>
            <span>priya<span className="brand-light">.dev</span></span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Projects", "#projects"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={label} href={href} onClick={closeMenu}>
                {label}
              </a>
            ))}
            <a className="nav-cta" href="#contact" onClick={closeMenu}>
              Let's Talk <span>↗</span>
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot" />
              OPEN TO LEARNING & OPPORTUNITIES
            </div>

            <p className="eyebrow">HELLO WORLD, I'M</p>

            <h1>
              Priya
              <br />
              <span className="gradient-text">Kumari.</span>
            </h1>

            <h2 className="hero-role">
              Developer <span>×</span> AI Explorer
            </h2>

            <p className="hero-description">
              I build thoughtful digital experiences and explore the
              possibilities of AI, machine learning and modern web development.
              Turning ideas into projects, one line of code at a time.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore My Work <span>↗</span>
              </a>
              <a className="button button-secondary" href="#contact">
                Let's Connect
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <strong>05<span>+</span></strong>
                <small>Projects explored</small>
              </div>
              <div className="stat-divider" />
              <div>
                <strong>10<span>+</span></strong>
                <small>Technologies</small>
              </div>
              <div className="stat-divider" />
              <div>
                <strong>∞</strong>
                <small>Ideas to build</small>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="profile-frame">
              <div className="profile-topline">
                <span>CREATIVE MINDSET</span>
                <span className="live-dot" />
              </div>

              <div className="profile-image-wrap">
                <img
                  className="profile-image"
                  src="/WhatsApp Image 2026-10-13 at 7.54.49 PM.jpeg"
                  alt="Priya Kumari"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                    event.currentTarget.nextElementSibling.style.display = "grid";
                  }}
                />
                <div className="profile-placeholder">PK</div>
              </div>

              <div className="profile-caption">
                <div>
                  <strong>Priya Kumari</strong>
                  <span>Developer in progress ✨</span>
                </div>
                <span className="profile-arrow">↗</span>
              </div>
            </div>

            <div className="floating-note note-code">
              <span className="note-icon">{"</>"}</span>
              <div>
                <strong>Code with purpose</strong>
                <small>Build. Learn. Repeat.</small>
              </div>
            </div>

            <div className="floating-note note-ai">
              <span className="note-icon">✳</span>
              <div>
                <strong>AI + Creativity</strong>
                <small>Ideas into reality</small>
              </div>
            </div>

            <div className="visual-orb">✦</div>
          </div>

          <a className="scroll-indicator" href="#about">
            <span /> SCROLL TO EXPLORE
          </a>
        </section>

        <section className="section container" id="about">
          <div className="section-heading">
            <span className="section-kicker">01 / A LITTLE ABOUT ME</span>
            <h2>
              Curious by nature.
              <br />
              <span className="gradient-text">Builder by choice.</span>
            </h2>
            <p>
              I believe the best way to learn technology is to use it to solve
              real problems.
            </p>
          </div>

          <div className="about-grid">
            <div className="glass-card about-card">
              <div className="card-symbol">✳</div>
              <h3>My Journey</h3>
              <p>
                I'm Priya, an aspiring developer interested in web development,
                artificial intelligence and data science. I enjoy learning new
                technologies and turning what I learn into practical projects.
              </p>
              <p>
                Every project helps me understand something new—from building
                interfaces to exploring data and AI-powered applications.
              </p>
            </div>

            <div className="about-side">
              <div className="glass-card mini-card">
                <span className="mini-icon">💻</span>
                <div>
                  <h3>Web Development</h3>
                  <p>Building responsive and user-friendly experiences.</p>
                </div>
              </div>
              <div className="glass-card mini-card">
                <span className="mini-icon">🧠</span>
                <div>
                  <h3>AI & Data Science</h3>
                  <p>Exploring machine learning and intelligent systems.</p>
                </div>
              </div>
              <div className="glass-card mini-card">
                <span className="mini-icon">🌱</span>
                <div>
                  <h3>Always Learning</h3>
                  <p>Growing through experimentation and hands-on projects.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section container" id="skills">
          <div className="section-heading">
            <span className="section-kicker">02 / MY TOOLKIT</span>
            <h2>
              Skills that power
              <br />
              <span className="gradient-text">my ideas.</span>
            </h2>
            <p>Technologies I'm learning, practising and building with.</p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill.name}>
                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="skill-icon">{skill.icon}</span>
                <h3>{skill.name}</h3>
                <span className="skill-level">{skill.level}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section container" id="projects">
          <div className="projects-heading">
            <div className="section-heading">
              <span className="section-kicker">03 / SELECTED WORK</span>
              <h2>
                Ideas made
                <br />
                <span className="gradient-text">into projects.</span>
              </h2>
            </div>
            <p className="projects-intro">
              A collection of projects exploring AI, data, web experiences and
              technology for meaningful problems.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article
                className={`project-card project-${project.color}`}
                key={project.number}
              >
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-icon">{project.icon}</span>
                </div>

                <span className="project-category">{project.category}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <div className="tech-list">
                  {project.tech.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <a
                  className="project-link"
                  href="#contact"
                  aria-label={`Ask about ${project.name}`}
                >
                  Discuss this project <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section container" id="resume">
          <div className="resume-panel">
            <div className="resume-decoration">✳</div>
            <div>
              <span className="section-kicker">04 / MY RESUME</span>
              <h2>
                Want to know
                <br />
                <span className="gradient-text">more about me?</span>
              </h2>
              <p>
                Explore my background, technical skills and learning journey.
                Add your latest resume to make it available here.
              </p>
            </div>
            <a className="button button-primary" href="/resume.pdf" target="_blank" rel="noreferrer">
              View Resume <span>↗</span>
            </a>
          </div>
        </section>

        <section className="section container" id="contact">
          <div className="contact-panel">
            <span className="section-kicker">05 / LET'S CONNECT</span>
            <h2>
              Have an idea?
              <br />
              <span className="gradient-text">Let's build it.</span>
            </h2>
            <p>
              Interested in technology, creative ideas or collaboration?
              I'd love to hear from you.
            </p>

            <a
              className="button button-primary contact-button"
              href="mailto:your.email@example.com?subject=Portfolio%20Enquiry"
            >
              Say Hello <span>↗</span>
            </a>

            <div className="social-links">
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <span>⌘</span> GitHub ↗
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                <span>in</span> LinkedIn ↗
              </a>
              <a href="mailto:your.email@example.com">
                <span>✉</span> Email ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">P.</span>
            <span>priya<span className="brand-light">.dev</span></span>
          </a>
          <p>Designed with curiosity and built with code.</p>
          <a href="#home" className="back-top">
            Back to top ↑
          </a>
        </div>
        <div className="container copyright">
          © {new Date().getFullYear()} Priya Kumari. Keep learning, keep building.
        </div>
      </footer>
    </div>
  );
}

export default App;
