"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const FRAMES = Array.from({ length: 16 }, (_, i) =>
  String(i).padStart(2, "0")
);

export default function Monolith() {
  const [idx, setIdx] = useState(8);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let current = 8;

    const update = () => {
      raf = 0;
      const hero = document.getElementById("top");
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const p = Math.min(Math.max(-rect.top / (rect.height * 0.75), 0), 1);
      const next = Math.round(8 - p * 8);
      if (next !== current) {
        current = next;
        setIdx(next);
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      className="monolith"
      role="img"
      aria-label="A dark brushed-metal monolith on a concrete floor under a single overhead light. It turns as the page scrolls."
    >
      {FRAMES.map((n, i) => (
        <Image
          key={n}
          src={`/images/monolith/turn${n}.jpg`}
          alt=""
          fill
          sizes="100vw"
          quality={90}
          priority={i === 8}
          style={{
            objectFit: "cover",
            objectPosition: "68% 50%",
            transition: "opacity .45s ease",
            opacity: i === idx ? 1 : 0,
          }}
        />
      ))}
    </div>
  );
}
