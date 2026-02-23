"use client";

import { RefObject } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    tier: "Strategic Retainer",
    tagline: "Deep, sustained advisory partnership",
    description:
      "A dedicated engagement for organisations navigating complex decisions at the intersection of climate finance, African markets, and AI-enabled strategy. Joseph works closely with your leadership team on a retained basis — combining institutional access, pattern recognition from 15+ years on the frontlines, and ongoing strategic guidance.",
    features: [
      "Monthly strategy sessions with the leadership team",
      "Deal review and investment thesis stress-testing",
      "Network introductions to DFIs, governments, and capital allocators",
      "AI and digital transformation roadmapping",
      "Access to AfCEN market intelligence",
      "Priority availability for emerging situations",
    ],
    ideal: "Climate funds · Energy companies · DFIs · Multilaterals",
    highlight: true,
    cta: "Discuss a Retainer",
  },
  {
    tier: "Workshops & Training",
    tagline: "Executive education for high-impact teams",
    description:
      "Intensive, bespoke workshops for investment teams, government delegations, and leadership groups. Designed to rapidly build institutional capability on African climate markets, development finance mechanics, and the practical application of AI in your organisation.",
    features: [
      "Half-day, full-day, or multi-day formats",
      "Tailored to your team's context and knowledge base",
      "Topics: Deal structuring, AfDB/EIB navigation, AI in finance",
      "Case studies drawn from live deals and real institutions",
      "Pre-workshop diagnostic and post-workshop resource pack",
      "Available in-person (Nairobi, DC, Brussels) or virtual",
    ],
    ideal: "Investment Teams · Government Delegations · Foundation Staff",
    highlight: false,
    cta: "Request a Workshop",
  },
  {
    tier: "Board Advisory",
    tagline: "Strategic voice at the governance level",
    description:
      "Board or Advisory Council membership for organisations where Joseph's networks, expertise, and credibility add direct value at the governance level. Joseph brings deep institutional relationships, executive credibility, and a track record in climate finance, energy, and AI to the table.",
    features: [
      "Formal or informal board/advisory council role",
      "Quarterly board sessions plus ad hoc availability",
      "Fiduciary or advisory capacity (as appropriate)",
      "Opens doors to AfDB, World Bank, EIB, and DFI networks",
      "Strategic alignment reviews and risk assessment",
      "Representation at key institutional forums",
    ],
    ideal: "Climate Funds · Energy Fintechs · Impact Platforms · NGOs",
    highlight: false,
    cta: "Explore Board Role",
  },
];

export default function Advisory() {
  const sectionRef = useScrollAnimation() as React.RefObject<HTMLElement>;

  const handleCTA = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector("#contact");
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="advisory"
      ref={sectionRef}
      style={{
        background: "#0a0f1a",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(212,168,83,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Section header */}
        <div className="fade-up" style={{ marginBottom: "64px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "16px",
            }}
          >
            <div className="gold-line" />
            <span
              style={{
                color: "#d4a853",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              Services
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#f8fafc",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "16px",
            }}
          >
            Advisory
          </h2>
          <p
            style={{
              color: "#64748b",
              fontSize: "1.0625rem",
              maxWidth: "560px",
              lineHeight: 1.6,
            }}
          >
            Joseph works with a small number of organisations at any given time.
            Engagements are selective, high-trust, and designed to create asymmetric
            value — access, network, and strategic clarity that can&apos;t be bought elsewhere.
          </p>
        </div>

        {/* Service tiers */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "24px",
            alignItems: "start",
          }}
        >
          {services.map((service, i) => (
            <div
              key={service.tier}
              className={`fade-up stagger-${i + 1} card-hover`}
              style={{
                position: "relative",
                background: service.highlight
                  ? "linear-gradient(135deg, rgba(212,168,83,0.08) 0%, rgba(14,21,37,0.8) 100%)"
                  : "rgba(14, 21, 37, 0.5)",
                border: service.highlight
                  ? "1px solid rgba(212,168,83,0.25)"
                  : "1px solid rgba(30, 45, 69, 0.5)",
                borderRadius: "12px",
                padding: "36px 32px",
                overflow: "hidden",
              }}
            >
              {/* Featured badge */}
              {service.highlight && (
                <div
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    padding: "4px 10px",
                    background: "rgba(212,168,83,0.15)",
                    border: "1px solid rgba(212,168,83,0.3)",
                    borderRadius: "100px",
                    fontSize: "0.625rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#d4a853",
                  }}
                >
                  Most Popular
                </div>
              )}

              {/* Tier name */}
              <h3
                style={{
                  fontSize: "1.375rem",
                  fontWeight: 800,
                  color: "#f8fafc",
                  marginBottom: "4px",
                  letterSpacing: "-0.01em",
                  paddingRight: service.highlight ? "80px" : "0",
                }}
              >
                {service.tier}
              </h3>
              <p
                style={{
                  color: "#d4a853",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  fontStyle: "italic",
                  marginBottom: "20px",
                }}
              >
                {service.tagline}
              </p>

              {/* Gold divider */}
              <div
                style={{
                  width: "32px",
                  height: "1px",
                  background: "#d4a853",
                  marginBottom: "20px",
                  opacity: 0.5,
                }}
              />

              <p
                style={{
                  color: "#94a3b8",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  marginBottom: "28px",
                }}
              >
                {service.description}
              </p>

              {/* Features */}
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginBottom: "28px",
                }}
              >
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "flex-start",
                      color: "#64748b",
                      fontSize: "0.875rem",
                      lineHeight: 1.5,
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      style={{ flexShrink: 0, marginTop: "3px" }}
                    >
                      <circle cx="7" cy="7" r="6" stroke="#d4a853" strokeWidth="1" opacity="0.5" />
                      <path
                        d="M4 7l2 2 4-4"
                        stroke="#d4a853"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Ideal for */}
              <div
                style={{
                  padding: "12px 16px",
                  background: "rgba(30, 45, 69, 0.3)",
                  borderRadius: "8px",
                  marginBottom: "24px",
                }}
              >
                <span
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#475569",
                  }}
                >
                  Ideal for ·{" "}
                </span>
                <span
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#94a3b8",
                  }}
                >
                  {service.ideal}
                </span>
              </div>

              {/* CTA */}
              <button
                onClick={handleCTA}
                className={service.highlight ? "btn-gold" : "btn-outline"}
                style={{ width: "100%", justifyContent: "center" }}
              >
                {service.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p
          className="fade-up"
          style={{
            textAlign: "center",
            marginTop: "48px",
            color: "#475569",
            fontSize: "0.875rem",
            lineHeight: 1.6,
          }}
        >
          All engagements are subject to capacity and fit. Joseph works with a small
          number of organisations at any time to ensure quality.
          <br />
          Reach out to start a conversation.
        </p>
      </div>
    </section>
  );
}
