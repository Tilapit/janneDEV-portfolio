import Section from "@/components/Section";

export default function About() {
  return (
    <Section id="about" label="About" className="section-about">
      <div className="about">
        <p className="about-lead">
          I study Information and Service Management at Aalto — how businesses
          put data and digital technology to use. The technology part, I mostly
          learn by building.
        </p>
        <p>
          It started at Junction x Vaasa in 2025. None of us had much of a
          coding background, we finished second, and I haven&apos;t stopped
          building since — mostly with Claude Code and Codex.
        </p>
        <p>
          My background is on the business side. I run the finances of VES,
          spent last summer on applied AI at Fondia in Stockholm, and before
          that ran an online vintage store through high school. Now I&apos;m at
          Mindy, building the new mindy.fi.
        </p>
      </div>
    </Section>
  );
}
