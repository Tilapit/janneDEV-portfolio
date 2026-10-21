import Section from "@/components/Section";

const roles = [
  {
    date: "Since 2026",
    title: "Product Development",
    org: "Mindy",
    description:
      "Building the new mindy.fi from the ground up, including the matching that connects people with the right therapist, and whatever else the team needs built.",
  },
  {
    date: "2026",
    title: "Volunteer Lead",
    org: "Slush",
    description:
      "Leading a volunteer team in the Production Help Office, the crew that keeps the event running behind the scenes.",
  },
  {
    date: "Since 2026",
    title: "Crew",
    org: "Founders House, Helsinki",
    description:
      "Volunteer crew at Founders House, a highly selective workspace and community for Finland's most ambitious startup founders.",
  },
  {
    date: "2026",
    title: "Applied AI Trainee",
    org: "Fondia, Stockholm",
    description:
      "Power Automate workflows for legal operations, a compliance self-assessment tool for the Swedish market, and a supplier contract and spend analysis presented to management.",
  },
  {
    date: "Since 2026",
    title: "Head of Finance",
    org: "VES, Vaasa Entrepreneurship Society",
    description:
      "Running the society's finances and fundraising. Grew the annual budget by over 20%, to nearly €70k.",
  },
  {
    date: "2024–2025",
    title: "Reconnaissance Group Leader",
    org: "Reserve Officer School",
    description: "Leading a team and making decisions under pressure.",
  },
  {
    date: "2022–2024",
    title: "Co-founder",
    org: "Grandpa's Closet",
    description:
      "Online vintage store with international customers, 10K+ followers on TikTok and a pop-up in Hanko.",
  },
];

const education = [
  {
    date: "Since 2026",
    name: "Aalto University",
    details: "Information and Service Management, minor in Computer Science",
  },
  {
    date: "2025–2026",
    name: "University of Vaasa",
    details: "Business and Economics, transferred to Aalto",
  },
];

export default function Experience() {
  return (
    <Section id="experience" label="Experience">
      <div className="experience">
        <div className="list">
          {roles.map((r) => (
            <div key={`${r.title}-${r.org}`} className="row">
              <span className="row-date">{r.date}</span>
              <div className="role">
                <span className="role-title">
                  {r.title}
                  <span className="muted"> · {r.org}</span>
                </span>
                <span className="role-desc">{r.description}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="education">
          <h3>Education</h3>
          <div>
            {education.map((e) => (
              <div key={e.name} className="row">
                <span className="row-date">{e.date}</span>
                <span>
                  <span className="education-name">{e.name}</span>
                  <span className="education-details"> · {e.details}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
