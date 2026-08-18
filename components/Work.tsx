import Image from "next/image";
import type { ReactNode } from "react";

type Project = {
  meta: string;
  name: string;
  role: string;
  stack: string[];
  body: ReactNode;
  href?: string;
  button?: string;
  image?: string;
};

const projects: Project[] = [
  {
    meta: "01 / LinkdPhoto",
    name: "LinkdPhoto",
    role: "AI LinkedIn headshots · 2026 — present",
    stack: ["Next.js", "Supabase", "Stripe", "Gemini API"],
    href: "https://linkdphoto.com",
    button: "Visit site ↗",
    body: (
      <>
        <p>
          An AI-powered headshot service — upload a few casual photos, get
          back professional <strong>LinkedIn-ready headshots</strong> in
          minutes. Full production product: Supabase for auth and data,
          Stripe for payments, Gemini API for image generation,
          transactional email flows, and a credit-based freemium model.
        </p>
        <p>
          <strong>€2.99</strong> for a single headshot, <strong>€4.99</strong>{" "}
          for a bundle. EU-hosted and GDPR-compliant. Built solo with{" "}
          <strong>Claude Code</strong>, and already has paying customers.
        </p>
      </>
    ),
  },
  {
    meta: "02 / Myötä",
    name: "Myötä",
    role: "Therapist matching · 2025 — currently paused",
    stack: ["Next.js", "Supabase", "Claude API", "TypeScript"],
    body: (
      <>
        <p>
          A service that helps people find the right therapist on the first
          try. Most people try <strong>2–3 therapists</strong> before finding
          one that fits — months lost, money spent, motivation drained.
        </p>
        <p>
          Built through VES&apos;s Startup Window event, then continued
          after it ended. Myötä replaces directory-style search with a
          guided quiz that scores fit and returns matched, explained
          recommendations. <strong>10 therapists onboarded</strong> so far.
        </p>
        <p>
          <em>Currently paused</em> — the team dispersed for summer. Picking
          it back up when everyone&apos;s back.
        </p>
      </>
    ),
  },
  {
    meta: "03 / Applied AI at Fondia",
    name: "Applied AI at Fondia",
    role: "Summer internship · Stockholm, 2026",
    stack: ["Power Automate", "Microsoft 365", "AI tooling"],
    body: (
      <>
        <p>
          Spent summer 2026 in Stockholm as Applied AI Trainee at Fondia,
          working at the intersection of AI, automation, and legal
          operations. Built internal Power Automate workflows to reduce
          repetitive manual work, and designed a browser-based compliance
          self-assessment tool for the Swedish market — from concept to
          working prototype.
        </p>
        <p>
          Analysed supplier contracts and spending across major vendors by
          combining contract management and accounting data, and presented
          the findings to management. Also supported an e-signature
          platform migration and trained colleagues on practical ways to
          use AI in legal and administrative work.
        </p>
      </>
    ),
  },
  {
    meta: "04 / Heltti",
    name: "Heltti / Mindy",
    role: "Therapy service websites · 2026 — present",
    stack: ["Next.js", "Vercel"],
    body: (
      <>
        <p>
          Rebuilding the websites behind Heltti&apos;s therapy services,
          migrating away from Wix-style platforms to cut hosting and
          maintenance costs. I own the technical build — the visual
          rebrand is handled separately.
        </p>
        <p>
          Next up: a therapist matching feature, leveraging what I learned
          building <strong>Myötä</strong>. No public URL yet.
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
          Four projects, four different problems. What they share:
          end-to-end ownership, and a preference for shipping over
          presenting.
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
                {p.image && (
                  <div className="project-image">
                    <Image
                      src={p.image}
                      alt={`${p.name} screenshot`}
                      fill
                      sizes="280px"
                      className="project-image-img"
                    />
                  </div>
                )}
              </div>
              <div className="project-right">
                <div className="project-desc">{p.body}</div>
                {p.href && (
                  <a
                    href={p.href}
                    className="btn btn-primary project-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {p.button ?? "View project ↗"}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
