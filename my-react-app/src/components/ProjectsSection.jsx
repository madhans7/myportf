import SectionHeading from "./SectionHeading";

const projectItems = [
  {
    number: "PROJECT 01",
    title: "Jobby App",
    description:
      "Dynamic job listing application with authentication, search, filtering, protected routing, and responsive React UI.",
    points: [
      "Built Login, Home, Jobs Listing, Job Details, and Logout experiences.",
      "Implemented JWT authentication and protected routes.",
      "Added filtering by job type, salary range, and employment criteria.",
      "Used client-side storage for persistent login behavior.",
    ],
    tags: ["React", "JavaScript", "JWT", "HTML", "CSS"],
    link: "https://jobbymad.ccbp.tech",
    linkLabel: "Open Jobby App",
  },
  {
    number: "PROJECT 02",
    title: "Wikipedia Search Application",
    description:
      "A custom Wikipedia search interface that retrieves and displays relevant results asynchronously in real time.",
    points: [
      "Integrated a GET REST API for asynchronous search results.",
      "Created responsive result layouts using CSS, Bootstrap, and Flexbox.",
      "Enabled result links to open conveniently in a new browser tab.",
    ],
    tags: ["JavaScript", "REST API", "Bootstrap", "HTML", "CSS"],
    link: "https://wikithrdu.ccbp.tech",
    linkLabel: "Open Wikipedia Search Application",
  },
  {
    number: "PROJECT 03",
    title: "AWS EC2 Web Server Deployment",
    description:
      "Cloud deployment project focused on provisioning and hosting a web application on an Amazon EC2 virtual server.",
    points: [
      "Launched and configured an Amazon Linux 2 t2.micro EC2 instance.",
      "Configured security groups for SSH and custom TCP access.",
      "Hosted a static application using Python’s built-in HTTP server.",
      "Practiced cloud networking, public IPv4 access, and remote instance management.",
    ],
    tags: ["AWS EC2", "Amazon Linux 2", "Python", "Linux", "Cloud Networking"],
    link: null,
    linkLabel: "",
  },
  {
    number: "PROFILE",
    title: "Continuous Learning",
    description:
      "Building a foundation across full-stack development, cloud computing, data technologies, and practical deployment workflows.",
    points: [
      "Currently pursuing BSc Cloud Computing and Big Data.",
      "Completing Nxtwave Industry Ready Full-Stack Development certification.",
      "Focused on entry-level software, full-stack, and cloud developer roles.",
    ],
    tags: ["Full Stack", "Cloud", "Software Development"],
    link: "https://linkedin.com/in/madhan-s-a7b3a9286",
    linkLabel: "Open LinkedIn",
  },
];

function ProjectCard({ number, title, description, points, tags, link, linkLabel }) {
  return (
    <article className="project-card reveal">
      <div className="project-top">
        <span className="project-number">{number}</span>
        {link ? (
          <a className="project-link" href={link} target="_blank" rel="noopener" aria-label={linkLabel}>
            ↗
          </a>
        ) : (
          <span className="project-link" aria-hidden="true">☁</span>
        )}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="project-points">
        {points.map(point => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <div className="tags project-tags">
        {tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects built around real application flows."
          text="From authenticated job search experiences to REST API integration and cloud deployment."
        />

        <div className="projects-grid">
          {projectItems.map(project => (
            <ProjectCard
              key={project.title}
              number={project.number}
              title={project.title}
              description={project.description}
              points={project.points}
              tags={project.tags}
              link={project.link}
              linkLabel={project.linkLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
