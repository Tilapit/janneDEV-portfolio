import Section from "@/components/Section";

const projects = [
  {
    name: "mindy.fi",
    description:
      "The new home of Mindy's therapy services, built around matching people with the right therapist.",
    status: "In progress",
  },
  {
    name: "Myötä",
    description:
      "Therapist matching through a guided quiz. Built with a VES team, 10 therapists onboarded.",
    status: "Paused",
    href: "https://www.myota.app/fi",
  },
  {
    name: "Juristimo",
    description: "Website for a Finnish law practice.",
    status: "Live",
    href: "https://juristimo.com",
  },
  {
    name: "Startup Window",
    description: "Site for VES's annual startup event.",
    status: "Live",
    href: "https://www.startupwindow-ves.com",
  },
  {
    name: "Folio",
    description:
      "Tracks invoices and payment deadlines from email. Internal tool for VES.",
    status: "Internal",
  },
];

export default function Projects() {
  return (
    <Section id="projects" label="Projects">
      <div className="list" role="list">
        {projects.map((p) => {
          const cells = (
            <>
              <span className="project-name">
                {p.href ? `${p.name} ↗` : p.name}
              </span>
              <span className="project-desc">{p.description}</span>
              <span className="project-status">{p.status}</span>
            </>
          );
          // role="listitem" lives on a wrapper so links keep their link role.
          return (
            <div key={p.name} className="row-item" role="listitem">
              {p.href ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="row"
                >
                  {cells}
                </a>
              ) : (
                <div className="row">{cells}</div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
