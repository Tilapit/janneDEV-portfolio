"use client";

import { useEffect, useState, type ReactNode } from "react";

const TARGET = new Date("2026-10-19T08:00:00+02:00").getTime();

type Parts = { days: number; hours: number; minutes: number; seconds: number };

function diff(): Parts {
  const ms = Math.max(0, TARGET - Date.now());
  const totalSec = Math.floor(ms / 1000);
  const days = Math.floor(totalSec / 86400);
  const hours = Math.floor((totalSec % 86400) / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;
  return { days, hours, minutes, seconds };
}

function pad(n: number, len = 2) {
  return String(n).padStart(len, "0");
}

function Countdown() {
  const [t, setT] = useState<Parts | null>(null);

  useEffect(() => {
    setT(diff());
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  const cells: { label: string; value: string }[] = [
    { label: "Days", value: t ? pad(t.days, 3) : "—" },
    { label: "Hours", value: t ? pad(t.hours) : "—" },
    { label: "Minutes", value: t ? pad(t.minutes) : "—" },
    { label: "Seconds", value: t ? pad(t.seconds) : "—" },
  ];

  return (
    <div className="countdown">
      {cells.map((c) => (
        <div key={c.label} className="cd-cell">
          <span className="cd-num">{c.value}</span>
          <span className="cd-label">{c.label}</span>
        </div>
      ))}
    </div>
  );
}

type Interest = {
  icon: string;
  name: string;
  body: ReactNode;
};

const interests: Interest[] = [
  {
    icon: "⛳",
    name: "Golf",
    body: "Slowly becoming the kind of person who has opinions about wedges. Spring through autumn, weather permitting.",
  },
  {
    icon: "⛵",
    name: "Sailing",
    body: "The Finnish summer makes a strong case for being on the water. Different kind of focus than anything else I do.",
  },
  {
    icon: "🎧",
    name: "Podcasts",
    body: (
      <>
        A serious overconsumer. Long-time favourites:{" "}
        <strong>Startup-ministeriö</strong> and <strong>Technokratin</strong>.
        Anything with founder interviews, finance, or a long-form host who
        actually listens.
      </>
    ),
  },
  {
    icon: "🛠️",
    name: "AI tinkering",
    body: "Side projects, automations, weird experiments. The line between “work” and “play” got blurry, and that's fine.",
  },
];

export default function OffDuty() {
  return (
    <section id="offduty" className="offduty section">
      <div className="container">
        <div className="section-num reveal">04 — Off-Duty</div>
        <h2 className="section-title reveal d1">
          What I do when I&apos;m <em>not</em> at the desk.
        </h2>
        <p className="section-intro reveal d2">
          Most of it is some combination of a fairway, a sail, and a pair of
          headphones. <em>The headphones do most of the work.</em>
        </p>

        <div className="ironman reveal d2">
          <div className="ironman-left">
            <span className="ironman-label">Next Race · In Training</span>
            <h3 className="ironman-name">
              Half Ironman <em>Málaga</em>
            </h3>
            <span className="ironman-meta">19 October 2026 · Málaga, Spain</span>
            <Countdown />
          </div>
          <div className="ironman-right">
            <p className="ironman-quote">
              &ldquo;Training for a Half Ironman is the closest thing I&apos;ve
              found to building a startup — slow, methodical, mostly invisible
              from outside, and impossible to fake on race day.&rdquo;
            </p>
            <div className="ironman-legs">
              <span>🏊 1.9 km</span>
              <span>🚴 90 km</span>
              <span>🏃 21.1 km</span>
            </div>
          </div>
        </div>

        <div className="interests">
          {interests.map((i) => (
            <div key={i.name} className="interest reveal">
              <span className="interest-icon">{i.icon}</span>
              <h4 className="interest-name">
                <strong>{i.name}</strong>
              </h4>
              <p className="interest-desc">{i.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
