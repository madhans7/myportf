import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";

export default function App() {
  const [light, setLight] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("light", light);
    const yearElement = document.getElementById("year");
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }

    const navbar = document.getElementById("navbar");
    const backTop = document.getElementById("backTop");
    const sections = [...document.querySelectorAll("main section[id]")];
    const links = [...document.querySelectorAll(".nav-link")];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (navbar) navbar.classList.toggle("scrolled", scrollY > 20);
      if (backTop) backTop.classList.toggle("show", scrollY > 550);

      let current = "home";
      for (const section of sections) {
        if (scrollY >= section.offsetTop - 160) current = section.id;
      }

      links.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href").slice(1) === current);
      });
    };

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

    const handleKey = event => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("keydown", handleKey);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("keydown", handleKey);
      observer.disconnect();
    };
  }, [light]);

  const handleContactSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const subject = form.elements.subject.value.trim();
    const message = form.elements.message.value.trim();

    if (!name || !email || !subject || !message) {
      alert("Please complete all fields.");
      return;
    }

    const body = `Hello Madhan,\n\n${message}\n\nRegards,\n${name}\n${email}`;
    window.location.href = `mailto:sm0294806@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="portfolio-app">
      <Navbar light={light} setLight={setLight} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection onSubmit={handleContactSubmit} />
      </main>

      <Footer />
      <BackToTopButton />
    </div>
  );
}
