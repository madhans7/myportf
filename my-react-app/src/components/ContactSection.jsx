import SectionHeading from "./SectionHeading";

export default function ContactSection({ onSubmit }) {
  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something useful."
          text="If you have an opportunity in software development, full-stack engineering, or cloud development, feel free to reach out."
        />

        <div className="contact-wrap">
          <aside className="contact-card reveal">
            <h3>Contact Details</h3>
            <div className="contact-list">
              <a className="contact-item" href="mailto:sm0294806@gmail.com">
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
                rel="noopener"
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

          <form className="contact-form reveal" id="contactForm" onSubmit={onSubmit}>
            <div className="form-grid">
              <input className="input" id="name" type="text" placeholder="Your name" required />
              <input className="input" id="email" type="email" placeholder="Your email" required />
              <input className="input" id="subject" type="text" placeholder="Subject" required />
              <textarea className="input" id="message" placeholder="Your message" required></textarea>
              <button className="btn btn-primary" type="submit">
                Send Message <span>↗</span>
              </button>
            </div>
            <p className="form-note">Submitting this form opens your default email application with the message pre-filled.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
