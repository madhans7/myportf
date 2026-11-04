import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHeading
          eyebrow="About"
          title="Development with a practical, end-to-end mindset."
          text="I enjoy turning requirements into responsive interfaces, connecting them to APIs, securing flows with authentication, and taking applications into cloud environments."
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
              I am pursuing a BSc in Cloud Computing and Big Data at REVA University, Bangalore, while also completing Nxtwave’s Industry Ready Certification in Full-Stack Development.
            </p>
            <p>
              My hands-on work includes React-based user interfaces, Node.js and Express backends, REST API integration, JWT authentication, asynchronous data handling, SQLite, Python, and AWS EC2 deployment.
            </p>
            <p>
              I am currently seeking an entry-level Software Developer, Full-Stack Developer, or Cloud Developer opportunity where I can continue building reliable applications and strengthen my engineering skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
