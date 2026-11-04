import SectionHeading from "./SectionHeading";

const educationItems = [
  {
    period: "2024 – 2027",
    title: "REVA University, Bangalore",
    text: "BSc Cloud Computing and Big Data — CGPA: 7.45",
  },
  {
    period: "Nov 2024 – Ongoing",
    title: "Nxtwave Disruptive Technologies",
    text: "Industry Ready Certification in Full-Stack Development.",
  },
  {
    period: "2021 – 2024",
    title: "SVN, Erode",
    text: "Intermediate (MPC) — 68.0% | SSC — 67.0%",
  },
];

function TimelineItem({ period, title, text }) {
  return (
    <article className="timeline-item reveal">
      <div className="timeline-meta">{period}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export default function EducationSection() {
  return (
    <section className="section" id="education">
      <div className="container">
        <SectionHeading
          eyebrow="Education"
          title="Learning through academics and hands-on development."
        />

        <div className="timeline">
          {educationItems.map(item => (
            <TimelineItem key={item.title} period={item.period} title={item.title} text={item.text} />
          ))}
        </div>
      </div>
    </section>
  );
}
