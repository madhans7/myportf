
import { useEffect, useState } from "react";
import "./App.css";

const skills = [
  {
    icon: "</>",
    title: "Frontend",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "React.js"],
  },
  {
    icon: "API",
    title: "Backend",
    tags: ["Node.js", "Express.js", "Python", "REST APIs", "JWT"],
  },
  {
    icon: "☁",
    title: "Cloud & Systems",
    tags: ["AWS EC2", "Azure", "Linux", "Git", "C"],
  },
  {
    icon: "AI",
    title: "Data & AI/ML",
    tags: ["SQLite", "NumPy", "Pandas", "scikit-learn"],
  },
];

const projects = [
  {
    number: "PROJECT 01",
    title: "Jobby App",
    url: "https://jobbymad.ccbp.tech",
    description:
      "Dynamic job listing application with authentication, search, filtering, protected routing, and responsive React UI.",
    points: [
      "Built Login, Home, Jobs Listing, Job Details, and Logout experiences.",
      "Implemented JWT authentication and protected routes.",
      "Added filtering by job type, salary range, and employment criteria.",
      "Used client-side storage for persistent login behavior.",
    ],
    tags: ["React", "JavaScript", "JWT", "HTML", "CSS"],
  },
  {
    number: "PROJECT 02",
    title: "Wikipedia Search Application",
    url: "https://wikithrdu.ccbp.tech",
    description:
      "A custom Wikipedia search interface that retrieves and displays relevant results asynchronously in real time.",
    points: [
      "Integrated a GET REST API for asynchronous search results.",
      "Created responsive result layouts using CSS, Bootstrap, and Flexbox.",
      "Enabled result links to open conveniently in a new browser tab.",
    ],
    tags: ["JavaScript", "REST API", "Bootstrap", "HTML", "CSS"],
  },
  {
    number: "PROJECT 03",
    title: "AWS EC2 Web Server Deployment",
    description:
      "Cloud deployment project focused on provisioning and hosting a web application on an Amazon EC2 virtual server.",
    points: [
      "Launched and configured an Amazon Linux 2 t2.micro EC2 instance.",
      "Configured security groups for SSH and custom TCP access.",
      "Hosted a static application using Python's built-in HTTP server.",
      "Practiced cloud networking, public IPv4 access, and remote instance management.",
    ],
    tags: [
      "AWS EC2",
      "Amazon Linux 2",
      "Python",
      "Linux",
      "Cloud Networking",
    ],
  },
  {
    number: "PROFILE",
    title: "Continuous Learning",
    url: "https://linkedin.com/in/madhan-s-a7b3a9286",
    description:
      "Building a foundation across full-stack development, cloud computing, data technologies, and practical deployment workflows.",
    points: [
      "Currently pursuing BSc Cloud Computing and Big Data.",
      "Completing Nxtwave Industry Ready Full-Stack Development certification.",
      "Focused on entry-level software, full-stack, and cloud developer roles.",
    ],
    tags: ["Full Stack", "Cloud", "Software Development"],
  },
];

const navigation = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Education", "education"],
  ["Contact", "contact"],
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading reveal">
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function SkillCard({ icon, title, tags }) {
  return (
    <article className="skill-card reveal">
      <div className="skill-icon">{icon}</div>
      <h3>{title}</h3>
      <div className="tags">
        {tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card reveal">
      <div className="project-top">
        <span className="project-number">{project.number}</span>

        {project.url ? (
          <a
            className="project-link"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title}`}
          >
            ↗
          </a>
        ) : (
          <span className="project-link" aria-hidden="true">
            ☁
          </span>
        )}
      </div>

      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <ul className="project-points">
        {project.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      <div className="tags project-tags">
        {project.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

function App() {
  const [isLight, setIsLight] = useState(
    () => localStorage.getItem("madhanPortfolioTheme") === "light"
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("light", isLight);
    localStorage.setItem("madhanPortfolioTheme", isLight ? "light" : "dark");
  }, [isLight]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setScrolled(scrollY > 20);
      setShowBackTop(scrollY > 550);

      let current = "home";

      document.querySelectorAll("main section[id]").forEach((section) => {
        if (scrollY >= section.offsetTop - 160) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleTheme = () => setIsLight((current) => !current);

  const closeMenu = () => setMenuOpen(false);

  const handleContactSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const subject = formData.get("subject").trim();
    const message = formData.get("message").trim();

    if (!name || !email || !subject || !message) {
      alert("Please complete all fields.");
      return;
    }

    const body = `Hello Madhan,

${message}

Regards,
${name}
${email}`;

    const mailto =
      `mailto:sm0294806@gmail.com?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
        <div className="container nav-inner">
          <a
            href="#home"
            className="logo"
            aria-label="Madhan portfolio home"
            onClick={closeMenu}
          >
            <span className="logo-badge">M</span>
            <span>Madhan S</span>
          </a>

          <nav>
            <ul
              className={`nav-links ${menuOpen ? "open" : ""}`}
              id="navLinks"
            >
              {navigation.map(([label, id]) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`nav-link ${
                      activeSection === id ? "active" : ""
                    }`}
                    onClick={closeMenu}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-actions">
            <button
              className="icon-btn"
              id="themeBtn"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              {isLight ? "☀" : "☾"}
            </button>

            <button
              className="icon-btn menu-btn"
              id="menuBtn"
              onClick={() => setMenuOpen((current) => !current)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              title="Menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="reveal visible">
              <div className="availability">
                <span className="availability-dot" />
                Open to Software, Full-Stack &amp; Cloud Developer opportunities
              </div>

              <h1>
                Building modern web{" "}
                <span className="gradient-text">experiences.</span>
              </h1>

              <p className="hero-copy">
                I’m Madhan S, a full-stack development student focused on
                building responsive web applications with React.js, Node.js,
                REST APIs, authentication, and practical cloud deployment
                using AWS.
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary" href="#projects">
                  View Projects <span>↗</span>
                </a>
                <a
                  className="btn btn-secondary"
                  href="mailto:sm0294806@gmail.com"
                >
                  Contact Me <span>→</span>
                </a>
                <a
                  className="btn btn-secondary"
                  href="https://linkedin.com/in/madhan-s-a7b3a9286"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>

              <div className="quick-info">
                <span>⌖ Bangalore, Karnataka</span>
                <span>✉ sm0294806@gmail.com</span>
                <span>☎ 8754092379</span>
              </div>
            </div>

            <div className="hero-visual reveal">
              <div className="orb one" />
              <div className="orb two" />

              <div className="profile-card">
                <div className="terminal-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="avatar">MS</div>
                <h3>Madhan S</h3>
                <div className="profile-role">
                  Full Stack • Cloud • Software Development
                </div>

                <div className="code-lines">
                  <div>
                    <strong>const</strong> developer = {"{"}
                  </div>
                  <div>&nbsp;&nbsp;frontend: "React.js",</div>
                  <div>&nbsp;&nbsp;backend: "Node.js / Python",</div>
                  <div>&nbsp;&nbsp;cloud: "AWS EC2",</div>
                  <div>&nbsp;&nbsp;focus: "Clean, scalable experiences"</div>
                  <div>{"};"}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <SectionHeading
              eyebrow="About"
              title="Development with a practical, end-to-end mindset."
              description="I enjoy turning requirements into responsive interfaces, connecting them to APIs, securing flows with authentication, and taking applications into cloud environments."
            />

            <div className="about-grid">
              <div className="about-card reveal">
                <div className="stat-grid">
                  <div className="stat">
                    <strong>3</strong>
                    <span>Featured Projects</span>
                  </div>
                  <div className="stat">
                    <strong>7.45</strong>
                    <span>Current CGPA</span>
                  </div>
                  <div className="stat">
                    <strong>AWS</strong>
                    <span>EC2 Deployment</span>
                  </div>
                  <div className="stat">
                    <strong>JWT</strong>
                    <span>Authentication</span>
                  </div>
                </div>
              </div>

              <div className="about-text reveal">
                <p>
                  I am pursuing a BSc in Cloud Computing and Big Data at REVA
                  University, Bangalore, while also completing Nxtwave’s
                  Industry Ready Certification in Full-Stack Development.
                </p>
                <p>
                  My hands-on work includes React-based user interfaces,
                  Node.js and Express backends, REST API integration, JWT
                  authentication, asynchronous data handling, SQLite, Python,
                  and AWS EC2 deployment.
                </p>
                <p>
                  I am currently seeking an entry-level Software Developer,
                  Full-Stack Developer, or Cloud Developer opportunity where I
                  can continue building reliable applications and strengthen
                  my engineering skills.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="container">
            <SectionHeading
              eyebrow="Technical Skills"
              title="Tools I use to build and deploy."
              description="A focused stack covering modern frontend development, backend services, databases, cloud fundamentals, and applied AI/ML tools."
            />

            <div className="skills-grid">
              {skills.map((skill) => (
                <SkillCard key={skill.title} {...skill} />
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <SectionHeading
              eyebrow="Selected Work"
              title="Projects built around real application flows."
              description="From authenticated job search experiences to REST API integration and cloud deployment."
            />

            <div className="projects-grid">
              {projects.map((project) => (
                <ProjectCard key={project.number} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="education">
          <div className="container">
            <SectionHeading
              eyebrow="Education"
              title="Learning through academics and hands-on development."
            />

            <div className="timeline">
              <article className="timeline-item reveal">
                <div className="timeline-meta">2024 – 2027</div>
                <h3>REVA University, Bangalore</h3>
                <p>BSc Cloud Computing and Big Data — CGPA: 7.45</p>
              </article>

              <article className="timeline-item reveal">
                <div className="timeline-meta">Nov 2024 – Ongoing</div>
                <h3>Nxtwave Disruptive Technologies</h3>
                <p>Industry Ready Certification in Full-Stack Development.</p>
              </article>

              <article className="timeline-item reveal">
                <div className="timeline-meta">2021 – 2024</div>
                <h3>SVN, Erode</h3>
                <p>Intermediate (MPC) — 68.0% &nbsp; | &nbsp; SSC — 67.0%</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <SectionHeading
              eyebrow="Contact"
              title="Let’s build something useful."
              description="If you have an opportunity in software development, full-stack engineering, or cloud development, feel free to reach out."
            />

            <div className="contact-wrap">
              <aside className="contact-card reveal">
                <h3>Contact Details</h3>

                <div className="contact-list">
                  <a
                    className="contact-item"
                    href="mailto:sm0294806@gmail.com"
                  >
                    <span>✉</span>
                    <span>sm0294806@gmail.com</span>
                  </a>

                  <a className="contact-item" href="tel:+918754092379">
                    <span>☎</span>
                    <span>8754092379</span>
                  </a>

                  <a
                    className="contact-item"
                    href="https://linkedin.com/in/madhan-s-a7b3a9286"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>in</span>
                    <span>linkedin.com/in/madhan-s-a7b3a9286</span>
                  </a>

                  <div className="contact-item">
                    <span>⌖</span>
                    <span>Bangalore, Karnataka</span>
                  </div>
                </div>
              </aside>

              <form
                className="contact-form reveal"
                id="contactForm"
                onSubmit={handleContactSubmit}
              >
                <div className="form-grid">
                  <input
                    className="input"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    autoComplete="name"
                    required
                  />

                  <input
                    className="input"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    autoComplete="email"
                    required
                  />

                  <input
                    className="input"
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    required
                  />

                  <textarea
                    className="input"
                    name="message"
                    placeholder="Your message"
                    required
                  />

                  <button className="btn btn-primary" type="submit">
                    Send Message <span>↗</span>
                  </button>
                </div>

                <p className="form-note">
                  Submitting this form opens your default email application
                  with the message pre-filled.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <span>
            © {new Date().getFullYear()} Madhan S. All rights reserved.
          </span>
          <span>Designed as a React portfolio.</span>
        </div>
      </footer>

      <button
        className={`back-top ${showBackTop ? "show" : ""}`}
        id="backTop"
        aria-label="Back to top"
        title="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </>
  );
}

export default App;
