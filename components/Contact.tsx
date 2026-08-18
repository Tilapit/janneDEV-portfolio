const rows = [
  {
    label: "Email",
    value: "jannelappi@icloud.com",
    href: "mailto:jannelappi@icloud.com",
  },
  {
    label: "Phone",
    value: "+358 40 937 0907",
    href: "tel:+358409370907",
  },
  {
    label: "LinkedIn",
    value: "/in/janne-lappi-fi",
    href: "https://www.linkedin.com/in/janne-lappi-fi",
  },
  {
    label: "GitHub",
    value: "/Tilapit",
    href: "https://github.com/Tilapit",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-grid">
          <div>
            <div className="section-num reveal">05 — Get in touch</div>
            <h2 className="contact-title reveal d1">
              Let&apos;s <em>build</em> something.
            </h2>
            <p className="contact-sub reveal d2">
              Open to internships, projects, and conversations at the
              intersection of business, product, and AI. Easiest to reach
              by email — replies usually arrive the same day.
            </p>
          </div>
          <div className="contact-list reveal d3">
            {rows.map((r) => (
              <a
                key={r.label}
                href={r.href}
                className="contact-row"
                target={r.href.startsWith("http") ? "_blank" : undefined}
                rel={r.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <span className="contact-label">{r.label}</span>
                <span className="contact-value">{r.value}</span>
                <span className="contact-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
