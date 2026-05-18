import type { ReactNode } from "react";

type Project = {
  meta: string;
  name: string;
  role: string;
  stack: string[];
  body: ReactNode;
  href?: string;
  button?: string;
};

const projects: Project[] = [
  {
    meta: "01 / Co-founded",
    name: "Myötä",
    role: "Therapist matching · 2025 — currently paused",
    stack: ["Next.js", "Supabase", "OpenAI API", "TypeScript"],
    href: "https://www.myota.app/fi",
    button: "Visit Myötä ↗",
    body: (
      <>
        <p>
          A service that helps people find the right therapist on the first
          try. Most people try <strong>2–3 therapists</strong> before finding
          one that fits — months lost, money spent, motivation drained.
        </p>
        <p>
          Myötä replaces directory-style search with a{" "}
          <em>5–10 minute guided quiz</em> that returns three explained
          recommendations — and a direct booking.{" "}
          <strong>10 therapists currently onboarded</strong>, demoed at
          Startup Window.
        </p>
        <p>
          <em>Currently paused</em> while I focus on other commitments —
          picking it back up when I have the time it deserves.
        </p>
      </>
    ),
  },
  {
    meta: "02 / Shipping at Fondia",
    name: "Växthuset",
    role: "Office attendance app · 2026 — present",
    stack: ["Next.js", "TypeScript", "Power Automate", "MS Teams", "SharePoint"],
    href: "https://vaxthuset-app.vercel.app",
    body: (
      <>
        <p>
          A Teams app that makes office attendance feel motivating instead of
          surveillance-y. Employees &ldquo;water&rdquo; a shared virtual{" "}
          <strong>monstera deliciosa</strong> when they come into the Fondia
          Stockholm office — when the team is in, the plant thrives.
        </p>
        <p>
          The metaphor (<em>&ldquo;Växthuset&rdquo;</em> means &ldquo;The
          Greenhouse&rdquo; in Swedish) replaces messy free-text Teams replies
          with a calendar view that creates a positive magnet effect — you see
          who&apos;s coming Tuesday, you decide to come too. No leaderboards.
          No shaming. Built end-to-end: data collection with Power Automate
          and Adaptive Cards, dashboard in Next.js.
        </p>
      </>
    ),
  },
  {
    meta: "03 / Personal tool",
    name: "Folio",
    role: "AI invoice management · 2026 — present",
    stack: ["Next.js 15", "Supabase", "Gmail API", "Claude API", "TypeScript"],
    href: "https://folio-9hfaxu7in-tilapits-projects.vercel.app",
    body: (
      <>
        <p>
          A personal AI-powered dashboard built for my role as{" "}
          <strong>VES treasurer</strong>. Folio reads invoices straight from
          Gmail, recognises line items with Claude, and prepares reimbursements
          in seconds instead of evenings.
        </p>
        <p>
          Development has progressed through Gmail integration and invoice
          recognition phases, with{" "}
          <em>expense reimbursement recognition</em> as the next step. Built
          for one user — but clean enough that the next student treasurer can
          pick it up without me.
        </p>
      </>
    ),
  },
];

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <div className="section-num reveal">02 — Selected work</div>
        <h2 className="section-title reveal d1">
          Things I&apos;ve <em>built</em> or am building.
        </h2>
        <p className="section-intro reveal d2">
          Three projects, three different problems. What they share: end-to-end
          ownership and a stubborn preference for shipping over presenting.
        </p>
        <div className="work-list">
          {projects.map((p) => (
            <article key={p.name} className="project reveal">
              <div className="project-left">
                <div className="project-meta">{p.meta}</div>
                <h3 className="project-name">{p.name}</h3>
                <div className="project-role">{p.role}</div>
                <div className="project-stack">
                  {p.stack.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-right">
                <div className="project-desc">{p.body}</div>
                <a
                  href={p.href ?? "#contact"}
                  className="btn btn-primary project-button"
                  target={p.href?.startsWith("http") ? "_blank" : undefined}
                  rel={p.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {p.button ?? "View project ↗"}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
