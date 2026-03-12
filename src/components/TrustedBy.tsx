"use client";

import { RefObject } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const logos = [
  { src: "/logos/world-bank.png", alt: "The World Bank" },
  { src: "/logos/afdb.png", alt: "African Development Bank" },
  { src: "/logos/rockefeller.png", alt: "The Rockefeller Foundation" },
  { src: "/logos/acs.png", alt: "Africa Climate Summit" },
  // GEAPP and SEforALL logos pending from Jacqueline
];

export default function TrustedBy() {
  const sectionRef = useScrollAnimation() as RefObject<HTMLElement>;

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#080d18",
        padding: "48px 0",
        borderTop: "1px solid rgba(30, 45, 69, 0.3)",
        borderBottom: "1px solid rgba(30, 45, 69, 0.3)",
      }}
    >
      <div
        className="fade-up"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "0.6875rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#475569",
            marginBottom: "32px",
          }}
        >
          Trusted By Leading Institutions
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "48px",
            flexWrap: "wrap",
          }}
        >
          {logos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="logo-bar-img"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
