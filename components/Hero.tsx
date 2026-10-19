import Monolith from "@/components/Monolith";

const links = [
  { label: "About", href: "#about" },
  { label: "Hackathons", href: "#hackathons" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Hero() {
  return (
    <section id="top" className="hero">
      <Monolith />
      <div className="hero-fade" aria-hidden="true" />
      <header className="wrap hero-header">
        <a href="#top" className="hero-home">
          Janne Lappi
        </a>
        <nav aria-label="Sections" className="hero-nav">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
      </header>
      <div className="wrap hero-name">
        <h1>
          Janne
          <br />
          Lappi
        </h1>
        <p>Business student at Aalto. Head of Finance at VES. Builder at Mindy.</p>
      </div>
    </section>
  );
}
