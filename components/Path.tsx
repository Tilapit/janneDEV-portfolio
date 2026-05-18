import type { ReactNode } from "react";

type Event = {
  date: string;
  title: ReactNode;
  sub?: ReactNode;
  body: ReactNode;
  badge?: string;
};

type YearGroup = {
  year: string;
  events: Event[];
};

const groups: YearGroup[] = [
  {
    year: "2026",
    events: [
      {
        date: "Since 05/2026",
        title: <>Applied AI Trainee</>,
        sub: <>Fondia — Stockholm / Remote</>,
        body: (
          <>
            Building internal tools that make day-to-day work better. Currently
            shipping <em>Växthuset</em>, an office attendance app for the
            Stockholm team.
          </>
        ),
      },
      {
        date: "12 March",
        title: <>Greenstep CFO Hackathon</>,
        sub: <>Helsinki · 24-hour finance &amp; analytics challenge</>,
        body: (
          <>
            Built a predictive analytics dashboard for Stockmann that forecasts
            visitor numbers from upcoming events and recommends staffing
            adjustments.
          </>
        ),
        badge: "🥉 Top 3 of 47",
      },
      {
        date: "Since 01/2026",
        title: <>Treasurer</>,
        sub: <>VES — Vaasa Entrepreneurship Society</>,
        body: (
          <>
            €50K+ budget oversight. Day-to-day finance, reimbursements, and
            reporting for the society.
          </>
        ),
      },
    ],
  },
  {
    year: "2025",
    events: [
      {
        date: "27 September",
        title: <>Junction Hackathon · Vaasa</>,
        sub: <>Vaasa · Wärtsilä Challenge · Europe&apos;s leading hackathon</>,
        body: (
          <>
            Business and innovation challenge focused on sustainability and
            industrial problem-solving.
          </>
        ),
        badge: "🥉 Top 3 of 27",
      },
      {
        date: "Since 08/2025",
        title: <>University of Vaasa</>,
        sub: <>School of Business and Economics</>,
        body: (
          <>
            Core studies in business, economics, and finance. Applied to
            transfer to Aalto.
          </>
        ),
      },
      {
        date: "Since 05/2025",
        title: <>Promoter</>,
        sub: <>MyBnb Agency</>,
        body: (
          <>
            Customer-facing brand representation at events and shopping
            centres for consumer brands.
          </>
        ),
      },
    ],
  },
  {
    year: "2024",
    events: [
      {
        date: "11/2024 — 02/2025",
        title: <>Reserve Officer School</>,
        sub: (
          <>
            Reconnaissance Group Leader · Course 265 &ldquo;Teräs&rdquo; ·
            Hamina
          </>
        ),
        body: (
          <>
            High-pressure leadership, tactical decision-making, and team
            responsibility under demanding conditions.
          </>
        ),
      },
      {
        date: "June",
        title: <>Matriculation Examination</>,
        sub: <>Lauttasaaren yhteiskoulu, Helsinki</>,
        body: (
          <>
            Graduated upper secondary school with the Finnish Matriculation
            Diploma.
          </>
        ),
      },
    ],
  },
  {
    year: "2022 — 24",
    events: [
      {
        date: "2022 — 2024",
        title: <>Co-founder · Grandpa&apos;s Closet</>,
        sub: <>Online vintage clothing store</>,
        body: (
          <>
            International customers, organic TikTok growth to 10K+ followers,
            and a Hanko pop-up. End-to-end ownership of a real small business
            while in high school.
          </>
        ),
      },
    ],
  },
];

export default function Path() {
  return (
    <section id="path" className="path section">
      <div className="container">
        <div className="section-num reveal">03 — Path so far</div>
        <h2 className="section-title reveal d1">
          How I got <em>here</em>.
        </h2>
        <div className="path-list">
          {groups.map((g) => (
            <div key={g.year} className="year-group reveal">
              <div className="year-label">{g.year}</div>
              <div className="event-list">
                {g.events.map((e, idx) => (
                  <div key={idx} className="event">
                    <span className="event-date">{e.date}</span>
                    <div className="event-content">
                      <h3 className="event-title">{e.title}</h3>
                      {e.sub && <div className="event-sub">{e.sub}</div>}
                      <p className="event-desc">{e.body}</p>
                      {e.badge && <span className="badge">{e.badge}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
