import Section from "@/components/Section";

type Card = {
  place: string;
  of?: number;
  date: string;
  event: string;
  partner: string;
  project?: string;
  description: string;
  footer: React.ReactNode;
};

const cards: Card[] = [
  {
    place: "1st",
    date: "Oct 2026",
    event: "Aaltoes Prompt Operations",
    partner: "Velho",
    project: "Velho Network.",
    description:
      "A tool that finds warm intro paths in a team's own LinkedIn network, ranks who to contact this week and suggests which teammate should send the message. The team uses it from their own Claude through an MCP server. Built end to end with Claude Code in about 48 hours.",
    footer: (
      <div className="card-footer-split">
        <span>€1,000 prize.</span>
        <a
          href="https://github.com/Tilapit/warm-paths"
          target="_blank"
          rel="noopener noreferrer"
          className="ul"
        >
          Open source version ↗
        </a>
      </div>
    ),
  },
  {
    place: "5th",
    of: 26,
    date: "Oct 2026",
    event: "Quantum x Finance",
    partner: "Hanken",
    project: "Zero to One.",
    description:
      "Ranking money-laundering alerts with machine learning and a quantum feature map. With about one confirmed case it ranked alerts 9% better, and the result held on VTT's 50-qubit quantum computer. From 25 cases on, the classical model wins, and we said so in the pitch.",
    footer: "€400 prize.",
  },
  {
    place: "3rd",
    of: 47,
    date: "Mar 2026",
    event: "Greenstep Finance Hackathon",
    partner: "Helsinki",
    description:
      "Came alone and joined a team on site for Stockmann's challenge. We built visitor forecasting from weather and event data, so stores can plan staffing ahead.",
    footer: "24-hour finance and analytics challenge.",
  },
  {
    place: "2nd",
    of: 27,
    date: "Sep 2025",
    event: "Junction x Vaasa",
    partner: "Wärtsilä",
    description:
      "Wärtsilä's challenge on sustainability and industrial problem-solving. My first hackathon.",
    footer: "Business and innovation track.",
  },
];

export default function Hackathons() {
  return (
    <Section id="hackathons" label="Hackathons">
      <div className="cards">
        {cards.map((c) => (
          <article key={`${c.event}-${c.partner}`} className="card">
            <div className="card-top">
              <span className="card-result">
                {c.place}
                {c.of && <span className="muted"> / {c.of}</span>}
              </span>
              <span className="card-date">{c.date}</span>
            </div>
            <h3>
              {c.event}
              <span className="muted"> · {c.partner}</span>
            </h3>
            <p>
              {c.project && (
                <>
                  <span className="card-project">{c.project}</span>{" "}
                </>
              )}
              {c.description}
            </p>
            <div className="card-footer">{c.footer}</div>
          </article>
        ))}
      </div>
    </Section>
  );
}
