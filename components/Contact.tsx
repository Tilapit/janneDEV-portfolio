import Section from "@/components/Section";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/janne-lappi-fi" },
  { label: "GitHub", href: "https://github.com/Tilapit" },
];

export default function Contact() {
  return (
    <Section
      id="contact"
      label="Contact"
      innerClassName="contact-inner"
      after={
        <footer className="wrap site-footer">
          <span>Helsinki</span>
          <span>2026</span>
        </footer>
      }
    >
      <div className="contact">
        <a href="mailto:jnnlappi@gmail.com" className="ul contact-email">
          jnnlappi@gmail.com
        </a>
        <div className="contact-links">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="ul"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
