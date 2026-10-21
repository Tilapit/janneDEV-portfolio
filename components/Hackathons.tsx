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
    place: "24h",
    date: "2026",
    event: "Junction x Vaasa",
    partner: "VILPE",
    project: "VILPE Guardian.",
    description:
      "A service built on VILPE's moisture sensors for developers who carry ten years of defect liability. It takes a moisture issue from detection through automatic ventilation and repair to a documented close. Demo ran on 16 months of real sensor data.",
    footer: (
      <div className="card-footer-split">
        <span>React demo and video pitch.</span>
        <a
          href="https://vilpe-guardian-demo.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="ul"
        >
          Open the demo ↗
        </a>
      </div>
    ),
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
