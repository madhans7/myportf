import SectionHeading from "./SectionHeading";

const skillItems = [
  {
    icon: "&lt;/&gt;",
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

function SkillCard({ icon, title, tags }) {
  return (
    <article className="skill-card reveal">
      <div className="skill-icon" dangerouslySetInnerHTML={{ __html: icon }} />
      <h3>{title}</h3>
      <div className="tags">
        {tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </article>
  );
}

export default function SkillsSection() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHeading
          eyebrow="Technical Skills"
          title="Tools I use to build and deploy."
          text="A focused stack covering modern frontend development, backend services, databases, cloud fundamentals, and applied AI/ML tools."
        />

        <div className="skills-grid">
          {skillItems.map(skill => (
            <SkillCard key={skill.title} icon={skill.icon} title={skill.title} tags={skill.tags} />
          ))}
        </div>
      </div>
    </section>
  );
}
