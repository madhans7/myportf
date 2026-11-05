import profileImage from "../assets/image.png";
import { MapPin, Mail, Phone } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="reveal visible">
          <div className="availability">
            <span className="availability-dot"></span>
            Open to Software, Full-Stack & Cloud Developer opportunities
          </div>

          <h1>
            Building modern web
            <span className="gradient-text">experiences.</span>
          </h1>

          <p className="hero-copy">
            I’m Madhan S, a full-stack development student focused on building responsive web applications with React.js, Node.js, REST APIs, authentication, and practical cloud deployment using AWS.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View Projects <span>↗</span>
            </a>
            <a className="btn btn-secondary" href="https://github.com/madhans7" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a className="btn btn-secondary" href="https://linkedin.com/in/madhan-s-a7b3a9286" target="_blank" rel="noopener">
              LinkedIn
            </a>
          </div>

          <div className="contact-info">
          <span>
              <MapPin size={16} />
              Bangalore, Karnataka
          </span>

          <span>
              <Mail size={16} />
              sm0294806@gmail.com
          </span>

          <span>
          <Phone size={16} />
             +91 8754092379
            </span>
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="orb one"></div>
          <div className="orb two"></div>

          <div className="profile-card">
            <div className="terminal-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <img src={profileImage} alt="Madhan S." className="avatar" />
            <h3>Madhan S</h3>
            <div className="profile-role">Full Stack • Cloud • Software Development</div>

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
  );
}
