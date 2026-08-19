const stats = [
  { num: "2×", label: "Hackathon finalist" },
  { num: "€60K+", label: "Budget under oversight" },
  { num: "7.5M+", label: "Claude Code tokens" },
];

export default function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={s.label} className={`reveal d${i % 4}`}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
