import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div>
          <h1 className="reveal d1">
            I build software, businesses, and the <em>bridges</em> between
            them.
          </h1>
          <p className="hero-lede reveal d2">
            Business student at <strong>Aalto</strong>, studying Information
            and Service Management with a minor in Computer Science.
            I&apos;m also <strong>Head of Finance</strong> at{" "}
            <strong>VES</strong>. Over the past year, most of my time has
            gone into building software with AI — a mix of my own projects,
            hackathons, and Applied AI work at <strong>Fondia</strong> in
            Stockholm.
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
