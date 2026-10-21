import Section from "@/components/Section";

export default function About() {
  return (
    <Section id="about" label="About" className="section-about">
      <div className="about">
        <p className="about-lead">
          I build web products and AI tools, and study Information and Service
          Management with a minor in Computer Science at Aalto.
        </p>
        <p>
          My first hackathon was Junction x Vaasa in 2025, where our team
          placed second. Since then I&apos;ve kept building: websites, internal
          tools and hackathon prototypes, mostly with Claude Code and Codex.
        </p>
        <p>
          I started on the business side and still run the finances of VES.
          Over the past year my focus has shifted to the technical side: a
          Computer Science minor, applied AI work at Fondia in Stockholm, and
          now the new mindy.fi.
        </p>
      </div>
    </Section>
  );
}
