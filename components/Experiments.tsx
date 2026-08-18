type Experiment = {
  name: string;
  desc: string;
  href?: string;
};

const experiments: Experiment[] = [
  {
    name: "Folio",
    desc: "Small internal tool for tracking invoices and payment deadlines from email. Built for VES; never intended to be a product.",
  },
  {
    name: "Juristimo",
    desc: "Website for a Finnish law practice.",
    href: "https://juristimo.com",
  },
  {
    name: "Startup Window",
    desc: "Event site for VES's annual startup event.",
    href: "https://www.startupwindow-ves.com",
  },
];

export default function Experiments() {
  return (
    <section className="experiments">
      <div className="container">
        <h3 className="experiments-title">Other things I&apos;ve built</h3>
        <div className="experiments-list">
          {experiments.map((e) => (
            <div key={e.name} className="experiment">
              <h4 className="experiment-name">
                {e.href ? (
                  <a href={e.href} target="_blank" rel="noopener noreferrer">
                    {e.name}
                  </a>
                ) : (
                  e.name
                )}
              </h4>
              <p className="experiment-desc">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
