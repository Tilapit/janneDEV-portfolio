import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <span className="hero-coords">60°N · 24°E</span>
      <div className="container hero-grid">
        <div>
          <div className="hero-meta reveal">Helsinki, Finland · Available for work</div>
          <h1 className="reveal d1">
            I build software, businesses, and the <em>bridges</em> between
            them.
          </h1>
          <p className="hero-lede reveal d2">
            <strong>Janne Lappi</strong> — Business &amp; Economics student.
            Currently <strong>Applied AI Trainee</strong>{" "}
            at <strong>Fondia</strong>, where I build internal tools like{" "}
            <strong>Växthuset</strong>. Also building <strong>Folio</strong>{" "}
            and <strong>Myötä</strong>, and serving as <strong>Treasurer</strong>{" "}
            at VES. Top-3 finalist at the Greenstep CFO Hackathon and the
            Wärtsilä Challenge.
          </p>
          <div className="hero-ctas reveal d3">
            <a href="#work" className="btn btn-primary">
              See selected work →
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get in touch
            </a>
          </div>
        </div>
        <div className="hero-portrait reveal d2">
          <div className="hero-portrait-frame">
            <Image
              src="/images/janne-v2.jpg"
              alt="Janne Lappi portrait"
              fill
              priority
              sizes="(max-width: 960px) 360px, 440px"
              className="hero-portrait-img"
            />
          </div>
          <div className="hero-portrait-caption">
            <span>JL · 2026</span>
            <span>Portrait</span>
          </div>
        </div>
      </div>
    </section>
  );
}
